import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  Play,
  Pause,
  X,
  RotateCcw,
  RotateCw,
  Heart,
  Repeat,
  Repeat1,
  Shuffle,
  Moon,
  Share2,
  ListMusic,
  CreditCard,
  AlertCircle,
  SkipBack,
  SkipForward,
  Check,
  Clock,
  Sparkles,
  Plus,
  Trash2,
  PlayCircle,
  FolderPlus,
  MoreVertical,
  Disc,
  User,
  ListPlus,
  Phone,
  ListX,
  Send,
  ExternalLink,
  Volume2,
  Volume1,
  VolumeX,
  Music,
  Film,
} from "lucide-react";
import type { TrendingTrack } from "@/lib/music.functions";

export type AudioItem = File | TrendingTrack;

export function isTrendingTrack(
  item: AudioItem | undefined,
): item is TrendingTrack {
  return !!item && !("size" in item) && "title" in item;
}

export function getAudioItemName(item: AudioItem | undefined): string {
  if (!item) return "";
  if (isTrendingTrack(item)) return `${item.artist} - ${item.title}`;
  return item.name;
}

export function getAudioItemTitle(item: AudioItem | undefined): string {
  if (!item) return "";
  if (isTrendingTrack(item)) return item.title;
  return item.name.replace(/\.[^/.]+$/, "");
}

export function getAudioItemCover(item: AudioItem | undefined): string | null {
  if (!item) return null;
  if (isTrendingTrack(item)) return item.coverUrl;
  return null;
}

function getAudioBlob(file: File): Blob {
  if (file.type && file.type.startsWith("audio/")) {
    return file;
  }
  const ext = file.name.split(".").pop()?.toLowerCase();
  let mimeType = file.type;
  if (ext === "mp3") mimeType = "audio/mpeg";
  else if (ext === "wav") mimeType = "audio/wav";
  else if (ext === "ogg") mimeType = "audio/ogg";
  else if (ext === "m4a" || ext === "aac") mimeType = "audio/mp4";
  else if (ext === "flac") mimeType = "audio/flac";
  else if (ext === "weba" || ext === "webm") mimeType = "audio/webm";

  if (mimeType && mimeType !== file.type) {
    return new Blob([file], { type: mimeType });
  }
  return file;
}

function parseTrackMetadata(item: AudioItem | string | undefined) {
  if (!item) {
    return {
      artist: "Unknown Artist",
      title: "Music Track",
      album: "Music Album",
    };
  }
  if (typeof item === "object" && isTrendingTrack(item)) {
    return {
      artist: item.artist || "Artist",
      title: item.title || "Track",
      album: `${item.artist || "Artist"} Essentials`,
    };
  }
  const fileName = typeof item === "string" ? item : item.name || "Track";
  const base = fileName.replace(/\.[^/.]+$/, "");
  let artist = "Unknown Artist";
  let title = base;

  if (base.includes(" by ")) {
    const parts = base.split(" by ");
    title = parts[0].replace(/^\d+[\s._-]+/, "").trim();
    artist = parts[1].trim();
  } else if (base.includes(" - ")) {
    const parts = base.split(" - ");
    artist = parts[0].trim();
    title = parts[1].replace(/^\d+[\s._-]+/, "").trim();
  } else {
    title = base.replace(/^\d+[\s._-]+/, "").trim();
  }

  const album = `${artist} Album`;
  return { title, artist, album };
}

// 65 normalized bar height factors matching the screenshot profile
const BASE_WAVE_BARS = [
  0.22, 0.26, 0.3, 0.35, 0.42, 0.5, 0.6, 0.72, 0.82, 0.9, 0.96, 0.92, 0.82,
  0.72, 0.64, 0.58, 0.62, 0.72, 0.84, 0.94, 1.0, 0.96, 0.88, 0.78, 0.7, 0.62,
  0.54, 0.48, 0.44, 0.46, 0.52, 0.58, 0.66, 0.74, 0.82, 0.88, 0.86, 0.8, 0.72,
  0.64, 0.56, 0.5, 0.46, 0.48, 0.54, 0.62, 0.7, 0.76, 0.8, 0.82, 0.8, 0.74,
  0.68, 0.6, 0.54, 0.46, 0.38, 0.32, 0.28, 0.24, 0.2, 0.16,
];

interface PlaylistData {
  id: string;
  name: string;
  createdAt: number;
  trackNames: string[];
}

export interface AudioPlayerProps {
  file?: AudioItem;
  tracks?: AudioItem[];
  initialIndex?: number;
  onClose: () => void;
  onSwitchToVideo?: () => void;
}

export function AudioPlayer({
  file,
  tracks = [],
  initialIndex = 0,
  onClose,
  onSwitchToVideo,
}: AudioPlayerProps) {
  // Playlist resolution
  const playlist = useMemo(() => {
    if (tracks && tracks.length > 0) return tracks;
    if (file) return [file];
    return [];
  }, [tracks, file]);

  const [currentIndex, setCurrentIndex] = useState(() => {
    if (initialIndex >= 0 && initialIndex < playlist.length)
      return initialIndex;
    if (file) {
      const fileName = getAudioItemName(file);
      const idx = playlist.findIndex((t) => getAudioItemName(t) === fileName);
      return idx >= 0 ? idx : 0;
    }
    return 0;
  });

  const currentTrack = playlist[currentIndex] || file;
  const currentTrackName = getAudioItemName(currentTrack);

  const parsedMeta = useMemo(() => {
    if (!currentTrack) {
      return {
        artist: "Unknown Artist",
        title: "Music Track",
        album: "Music Album",
      };
    }
    if (isTrendingTrack(currentTrack)) {
      return {
        artist: currentTrack.artist || "Artist",
        title: currentTrack.title || "Track",
        album: `${currentTrack.artist} Essentials`,
      };
    }
    return parseTrackMetadata(currentTrack);
  }, [currentTrack]);

  // Audio Playback state
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [repeatMode, setRepeatMode] = useState<"off" | "all" | "one">("off");
  const [isShuffle, setIsShuffle] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Volume & Mute state (persisted)
  const [volume, setVolume] = useState<number>(() => {
    try {
      const saved = localStorage.getItem("webna_music_volume");
      return saved !== null ? Math.max(0, Math.min(1, Number(saved))) : 1;
    } catch {
      return 1;
    }
  });
  const [isMuted, setIsMuted] = useState(false);
  const prevVolumeRef = useRef<number>(1);

  // 3-Dots Menu & Modals state
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [stopAfterCurrentTrack, setStopAfterCurrentTrack] = useState(false);
  const [showAlbumModal, setShowAlbumModal] = useState(false);
  const [showArtistModal, setShowArtistModal] = useState(false);

  // Modals & Panels state
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showEqualizer, setShowEqualizer] = useState(false);
  const [showSleepTimer, setShowSleepTimer] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Footer Section Modal (Playlists, Favorites, Albums)
  const [showFooterModal, setShowFooterModal] = useState(false);
  const [activeFooterTab, setActiveFooterTab] = useState<
    "playlists" | "favorites" | "albums"
  >("playlists");
  const [selectedAlbumName, setSelectedAlbumName] = useState<string | null>(
    null,
  );

  // Derive albums list from queue
  const albumsList = useMemo(() => {
    const map = new Map<
      string,
      {
        albumName: string;
        artist: string;
        tracks: { file: AudioItem; index: number }[];
      }
    >();
    playlist.forEach((trackFile, index) => {
      const meta = parseTrackMetadata(trackFile);
      const albumKey = meta.album || "Default Album";
      if (!map.has(albumKey)) {
        map.set(albumKey, {
          albumName: albumKey,
          artist: meta.artist,
          tracks: [],
        });
      }
      map.get(albumKey)!.tracks.push({ file: trackFile, index });
    });
    return Array.from(map.values());
  }, [playlist]);

  // User Playlists state (persisted)
  const [userPlaylists, setUserPlaylists] = useState<PlaylistData[]>(() => {
    try {
      const saved = localStorage.getItem("webna_user_playlists");
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [
      {
        id: "default-1",
        name: "My Favorite Mix",
        createdAt: Date.now(),
        trackNames: [],
      },
      {
        id: "default-2",
        name: "Chill & Focus",
        createdAt: Date.now(),
        trackNames: [],
      },
    ];
  });

  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(
    null,
  );

  const savePlaylists = (updated: PlaylistData[]) => {
    setUserPlaylists(updated);
    try {
      localStorage.setItem("webna_user_playlists", JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleCreatePlaylist = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newPlaylistName.trim();
    if (!trimmed) return;
    const newPl: PlaylistData = {
      id: "pl-" + Date.now(),
      name: trimmed,
      createdAt: Date.now(),
      trackNames: currentTrack ? [currentTrack.name] : [],
    };
    const updated = [newPl, ...userPlaylists];
    savePlaylists(updated);
    setNewPlaylistName("");
    showToast(`Created playlist "${trimmed}"`);
  };

  const handleDeletePlaylist = (id: string, name: string) => {
    const updated = userPlaylists.filter((p) => p.id !== id);
    savePlaylists(updated);
    if (selectedPlaylistId === id) setSelectedPlaylistId(null);
    showToast(`Deleted playlist "${name}"`);
  };

  const addTrackToPlaylist = (playlistId: string) => {
    if (!currentTrack) return;
    const updated = userPlaylists.map((pl) => {
      if (pl.id === playlistId) {
        if (pl.trackNames.includes(currentTrack.name)) {
          showToast(`Track is already in "${pl.name}"`);
          return pl;
        }
        showToast(`Added to "${pl.name}"`);
        return {
          ...pl,
          trackNames: [...pl.trackNames, currentTrack.name],
        };
      }
      return pl;
    });
    savePlaylists(updated);
  };

  const removeTrackFromPlaylist = (playlistId: string, trackName: string) => {
    const updated = userPlaylists.map((pl) => {
      if (pl.id === playlistId) {
        return {
          ...pl,
          trackNames: pl.trackNames.filter((n) => n !== trackName),
        };
      }
      return pl;
    });
    savePlaylists(updated);
    showToast("Removed track from playlist");
  };

  // Equalizer Preset
  const [activePreset, setActivePreset] = useState("Flat (Original)");

  // Sleep Timer state
  const [sleepTimerMinutes, setSleepTimerMinutes] = useState<number | null>(
    null,
  );
  const [sleepRemainingSeconds, setSleepRemainingSeconds] = useState<
    number | null
  >(null);

  // Favorites state (persisted)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("webna_music_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const isFavorited = currentTrack
    ? favorites.includes(currentTrack.name)
    : false;

  const toggleFavorite = () => {
    if (!currentTrack) return;
    setFavorites((prev) => {
      const next = prev.includes(currentTrack.name)
        ? prev.filter((name) => name !== currentTrack.name)
        : [...prev, currentTrack.name];
      try {
        localStorage.setItem("webna_music_favorites", JSON.stringify(next));
      } catch {
        // ignore
      }
      showToast(
        next.includes(currentTrack.name)
          ? "Added to favorites ❤️"
          : "Removed from favorites",
      );
      return next;
    });
  };

  const removeFavoriteByName = (trackName: string) => {
    setFavorites((prev) => {
      const next = prev.filter((n) => n !== trackName);
      try {
        localStorage.setItem("webna_music_favorites", JSON.stringify(next));
      } catch {
        // ignore
      }
      showToast("Removed from favorites");
      return next;
    });
  };

  const playSongByName = (trackName: string) => {
    const foundIdx = playlist.findIndex((t) => t.name === trackName);
    if (foundIdx !== -1) {
      setCurrentIndex(foundIdx);
      setShowFooterModal(false);
      setShowPlaylist(false);
      showToast(`Playing ${trackName}`);
    } else {
      showToast("Track not loaded in current session");
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((cur) => (cur === msg ? null : cur));
    }, 2500);
  };

  // Sleep Timer countdown effect
  useEffect(() => {
    if (sleepRemainingSeconds === null) return;
    if (sleepRemainingSeconds <= 0) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      setSleepTimerMinutes(null);
      setSleepRemainingSeconds(null);
      showToast("Sleep timer ended. Playback paused.");
      return;
    }

    const timer = setInterval(() => {
      setSleepRemainingSeconds((s) => (s !== null ? s - 1 : null));
    }, 1000);

    return () => clearInterval(timer);
  }, [sleepRemainingSeconds]);

  const setSleepTimer = (minutes: number | null) => {
    setSleepTimerMinutes(minutes);
    setSleepRemainingSeconds(minutes ? minutes * 60 : null);
    setShowSleepTimer(false);
    showToast(
      minutes ? `Sleep timer set for ${minutes} min` : "Sleep timer turned off",
    );
  };

  // Native HTML5 audio ref & URL
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioUrl, setAudioUrl] = useState<string>("");

  useEffect(() => {
    if (!currentTrack) return;
    if (isTrendingTrack(currentTrack)) {
      const url =
        currentTrack.previewUrl ||
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
      setAudioUrl(url);
      return;
    }
    const blob = getAudioBlob(currentTrack as File);
    const url = URL.createObjectURL(blob);
    setAudioUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [currentTrack]);

  // Load and play when audioUrl changes
  useEffect(() => {
    if (!audioUrl) return;
    const audio = audioRef.current;
    if (!audio) return;

    setErrorMessage(null);
    audio.src = audioUrl;
    audio.playbackRate = playbackSpeed;
    audio.volume = isMuted ? 0 : volume;
    audio.load();

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Autoplay deferred or blocked:", err);
          setIsPlaying(false);
        });
    }

    return () => {
      audio.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioUrl]);

  // Synchronize volume and mute state dynamically with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = Math.max(0, Math.min(1, parseFloat(e.target.value)));
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
    }
    try {
      localStorage.setItem("webna_music_volume", newVol.toString());
    } catch {
      // ignore
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      const restoreVol =
        prevVolumeRef.current > 0 ? prevVolumeRef.current : 0.8;
      setIsMuted(false);
      setVolume(restoreVol);
      if (audioRef.current) {
        audioRef.current.volume = restoreVol;
      }
      showToast(`Volume unmuted (${Math.round(restoreVol * 100)}%)`);
    } else {
      prevVolumeRef.current = volume > 0 ? volume : 0.8;
      setIsMuted(true);
      if (audioRef.current) {
        audioRef.current.volume = 0;
      }
      showToast("Muted");
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Playback error:", err);
          setErrorMessage("Failed to play audio.");
        });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleNext = useCallback(() => {
    if (playlist.length <= 1) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
      return;
    }

    if (isShuffle) {
      let nextIdx = Math.floor(Math.random() * playlist.length);
      if (nextIdx === currentIndex && playlist.length > 1) {
        nextIdx = (currentIndex + 1) % playlist.length;
      }
      setCurrentIndex(nextIdx);
    } else {
      setCurrentIndex((prev) => (prev + 1) % playlist.length);
    }
  }, [playlist.length, isShuffle, currentIndex]);

  const handlePrev = useCallback(() => {
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      setProgress(0);
      return;
    }

    if (playlist.length <= 1) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
      return;
    }

    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  }, [playlist.length]);

  const handleSkip = (seconds: number) => {
    if (audioRef.current) {
      const newTime = Math.min(
        Math.max(0, audioRef.current.currentTime + seconds),
        duration || Infinity,
      );
      audioRef.current.currentTime = newTime;
      setProgress(newTime);
    }
  };

  const handleSeek = (newTime: number) => {
    setProgress(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const cycleRepeatMode = () => {
    setRepeatMode((current) => {
      if (current === "off") {
        showToast("Repeat All playlist");
        return "all";
      }
      if (current === "all") {
        showToast("Repeat Current song");
        return "one";
      }
      showToast("Repeat Off");
      return "off";
    });
  };

  const cycleSpeed = () => {
    const speeds = [0.75, 1.0, 1.25, 1.5, 2.0];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const nextSpeed = speeds[nextIdx];
    setPlaybackSpeed(nextSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextSpeed;
    }
    showToast(`Speed: ${nextSpeed}x`);
  };

  const handleShare = async () => {
    if (!currentTrack) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentTrack.name,
          text: `Listening to ${currentTrack.name} on WebNa Music Player`,
        });
      } catch {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(currentTrack.name);
        showToast("Track title copied to clipboard!");
      } catch {
        showToast("Sharing not supported on this browser");
      }
    }
  };

  const handleSetAsRingtone = () => {
    if (!currentTrack) return;
    const blob = getAudioBlob(currentTrack);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${currentTrack.name.replace(/\.[^/.]+$/, "")}_ringtone.mp3`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setShowMoreMenu(false);
    showToast("Downloaded! Set it in Settings > Sound > Ringtone");
  };

  const handleRemoveTrack = () => {
    if (!currentTrack) return;
    const trackToRemove = currentTrack.name;
    setShowMoreMenu(false);
    if (playlist.length <= 1) {
      showToast(`Removed "${trackToRemove}"`);
      onClose();
    } else {
      showToast(`Removed "${trackToRemove}" from queue`);
      handleNext();
    }
  };

  const handleTrackEnded = () => {
    if (stopAfterCurrentTrack) {
      setIsPlaying(false);
      setProgress(0);
      setStopAfterCurrentTrack(false);
      showToast("Stopped playback after track finished");
      return;
    }

    if (repeatMode === "one") {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    } else if (repeatMode === "all" || currentIndex < playlist.length - 1) {
      handleNext();
    } else {
      setIsPlaying(false);
      setProgress(0);
    }
  };

  // Sound Waves Real-time Animation
  const [waveAnimationTime, setWaveAnimationTime] = useState(0);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const start = performance.now();
    const updateWaves = (now: number) => {
      const elapsed = (now - start) / 1000;
      setWaveAnimationTime(elapsed);
      animFrameRef.current = requestAnimationFrame(updateWaves);
    };

    animFrameRef.current = requestAnimationFrame(updateWaves);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  const waveformRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const calculateSeekFromPointer = (clientX: number) => {
    if (!waveformRef.current || !duration) return;
    const rect = waveformRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    handleSeek(pos * duration);
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0 || !isFinite(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progressFraction = duration > 0 ? Math.min(1, progress / duration) : 0;
  const activeBarIndex = Math.floor(progressFraction * BASE_WAVE_BARS.length);

  // Filtered tracks for Favorites tab
  const favoriteTracksInPlaylist = playlist.filter((t) =>
    favorites.includes(t.name),
  );

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-[#fbf9f6] text-[#2b2520] select-none overflow-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-[90] bg-[#3a322c]/90 text-white text-xs px-4 py-2 rounded-full shadow-lg backdrop-blur-sm animate-fade-in pointer-events-none">
          {toastMessage}
        </div>
      )}

      {/* Top Header Bar with Audio/Video switch, 3-Dots Menu & Close Button */}
      <div className="flex flex-col gap-2 px-4 pt-3 pb-2 shrink-0 border-b border-[#eee7de]">
        <div className="flex items-center justify-between gap-2">
          {/* Audio Player and Video Player Switcher Tabs */}
          <div className="flex items-center gap-1 bg-[#f0eae0] p-1 rounded-xl shrink-0">
            <button
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-brand shadow-xs transition-all"
              title="Audio Player (Active)"
            >
              <Music className="size-3.5 text-brand" />
              <span>Audio player</span>
            </button>
            <button
              onClick={() => {
                if (audioRef.current) audioRef.current.pause();
                if (onSwitchToVideo) {
                  onSwitchToVideo();
                } else {
                  onClose();
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-[#7c726a] hover:text-[#2b2520] hover:bg-white/60 transition-all"
              title="Switch to Video Player"
            >
              <Film className="size-3.5" />
              <span>Video player</span>
            </button>
          </div>

          {/* 3-Dots Menu Button & Close Button */}
          <div className="flex items-center gap-0.5">
            <button
              onClick={() => setShowMoreMenu(true)}
              className="p-2 rounded-full hover:bg-black/5 active:scale-95 transition-transform"
              aria-label="More options"
              title="Options"
            >
              <MoreVertical className="size-5 text-[#4a423a]" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 active:scale-95 transition-transform"
              aria-label="Close player"
            >
              <X className="size-5 text-[#4a423a]" />
            </button>
          </div>
        </div>

        <div className="min-w-0 flex items-center justify-between px-1">
          <div className="min-w-0 flex-1 pr-2">
            <h2 className="text-sm font-semibold truncate leading-tight">
              {getAudioItemTitle(currentTrack) || "Music Player"}
            </h2>
            <p className="text-[11px] text-[#8c827a] truncate mt-0.5">
              {isTrendingTrack(currentTrack)
                ? currentTrack.artist
                : playlist.length > 1
                  ? `Track ${currentIndex + 1} of ${playlist.length}`
                  : "Local Audio"}
            </p>
          </div>
        </div>
      </div>

      {/* Center Section: Album Art / Disc */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-1 min-h-0">
        <div className="relative size-48 sm:size-56 rounded-full bg-[#f1ebe3] flex items-center justify-center shadow-inner my-auto transition-transform">
          <div
            className={`size-40 sm:size-44 rounded-full bg-gradient-to-tr from-[#6d5b97]/20 to-[#9e8ec2]/30 flex items-center justify-center border-4 border-white/60 shadow-sm overflow-hidden transition-transform duration-700 ${
              isPlaying
                ? "rotate-360 duration-[12000ms] ease-linear repeat-infinite"
                : ""
            }`}
          >
            {getAudioItemCover(currentTrack) ? (
              <img
                src={getAudioItemCover(currentTrack)!}
                alt=""
                className="size-full object-cover"
              />
            ) : (
              <span className="text-4xl sm:text-5xl select-none">🎵</span>
            )}
          </div>
          {isPlaying && (
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#6d5b97]/30 animate-spin duration-[16000ms]" />
          )}
        </div>

        {errorMessage && (
          <div className="flex items-center gap-2 p-2 rounded-xl bg-destructive/10 text-destructive text-xs text-center w-full max-w-sm mt-2">
            <AlertCircle className="size-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>

      {/* Main Controls & Waveform Container */}
      <div className="w-full max-w-md mx-auto px-5 pb-2 pt-1 flex flex-col gap-3.5 shrink-0">
        {/* Top Action Row (Queue, Equalizer, Favorite, Loop, Sleep Timer, Share) */}
        <div className="flex items-center justify-between text-[#574d46] px-1">
          {/* 1. Queue / Playlist */}
          <button
            onClick={() => setShowPlaylist(true)}
            className="p-1.5 hover:text-[#6d5b97] active:scale-90 transition-transform relative"
            title="Playlist queue"
          >
            <ListMusic className="size-5" />
            {playlist.length > 1 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#6d5b97] text-white text-[9px] size-3.5 rounded-full flex items-center justify-center font-bold">
                {playlist.length}
              </span>
            )}
          </button>

          {/* 2. Audio Card / Equalizer */}
          <button
            onClick={() => setShowEqualizer(true)}
            className="p-1.5 hover:text-[#6d5b97] active:scale-90 transition-transform"
            title="Equalizer & Track Info"
          >
            <CreditCard className="size-5" />
          </button>

          {/* 3. Favorite / Heart */}
          <button
            onClick={toggleFavorite}
            className={`p-1.5 active:scale-90 transition-transform ${
              isFavorited ? "text-[#d14343]" : "hover:text-[#6d5b97]"
            }`}
            title={isFavorited ? "Favorited" : "Add to favorites"}
          >
            <Heart
              className={`size-5 transition-colors ${
                isFavorited ? "fill-[#d14343] text-[#d14343]" : ""
              }`}
            />
          </button>

          {/* 4. Repeat mode */}
          <button
            onClick={cycleRepeatMode}
            className={`p-1.5 relative active:scale-90 transition-transform ${
              repeatMode !== "off" ? "text-[#6d5b97]" : "hover:text-[#6d5b97]"
            }`}
            title={`Repeat: ${repeatMode}`}
          >
            {repeatMode === "one" ? (
              <Repeat1 className="size-5 text-[#6d5b97]" />
            ) : (
              <Repeat className="size-5" />
            )}
            {repeatMode === "all" && (
              <span className="absolute bottom-1 right-1 size-1.5 rounded-full bg-[#6d5b97]" />
            )}
          </button>

          {/* 5. Sleep timer */}
          <button
            onClick={() => setShowSleepTimer(true)}
            className={`p-1.5 relative active:scale-90 transition-transform ${
              sleepRemainingSeconds !== null
                ? "text-[#6d5b97]"
                : "hover:text-[#6d5b97]"
            }`}
            title="Sleep timer"
          >
            <Moon className="size-5" />
            {sleepRemainingSeconds !== null && (
              <span className="absolute -top-1 -right-2 bg-[#6d5b97] text-white text-[8px] px-1 rounded-full font-mono">
                {Math.ceil(sleepRemainingSeconds / 60)}m
              </span>
            )}
          </button>

          {/* 6. Share */}
          <button
            onClick={handleShare}
            className="p-1.5 hover:text-[#6d5b97] active:scale-90 transition-transform"
            title="Share track"
          >
            <Share2 className="size-5" />
          </button>
        </div>

        {/* Music Sound Waveform Scrubber Section */}
        <div className="flex flex-col gap-1">
          <div
            ref={waveformRef}
            className="h-12 w-full flex items-center justify-between gap-[2.5px] sm:gap-[3px] cursor-pointer select-none py-1 relative group"
            onPointerDown={(e) => {
              isDraggingRef.current = true;
              calculateSeekFromPointer(e.clientX);
            }}
            onPointerMove={(e) => {
              if (isDraggingRef.current) {
                calculateSeekFromPointer(e.clientX);
              }
            }}
            onPointerUp={() => {
              isDraggingRef.current = false;
            }}
            onPointerLeave={() => {
              isDraggingRef.current = false;
            }}
          >
            {BASE_WAVE_BARS.map((baseHeight, index) => {
              const isPast = index <= activeBarIndex;
              const isCurrent = index === activeBarIndex;

              let liveMultiplier = 1;
              if (isPlaying) {
                const waveFreq = 0.35;
                const waveSpeed = 6;
                const harmonic =
                  Math.sin(waveAnimationTime * waveSpeed + index * waveFreq) *
                    0.28 +
                  Math.cos(waveAnimationTime * 4 - index * 0.2) * 0.15;
                liveMultiplier = Math.max(0.3, 1 + harmonic);
              }

              const barHeightPct = Math.min(
                100,
                Math.max(14, baseHeight * 100 * liveMultiplier),
              );

              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center items-center h-full relative"
                >
                  <div
                    className={`w-[2.5px] sm:w-[3px] rounded-full transition-all duration-75 ${
                      isPast
                        ? "bg-[#6d5b97]"
                        : "bg-[#cfc8c2] dark:bg-muted-foreground/30"
                    }`}
                    style={{
                      height: `${barHeightPct}%`,
                    }}
                  />
                  {isCurrent && (
                    <div className="absolute top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-[#6d5b97] shadow-md border-2 border-white pointer-events-none ring-2 ring-[#6d5b97]/30 scale-110" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Timestamps */}
          <div className="flex justify-between text-xs font-medium text-[#7a6f67] px-0.5">
            <span>{formatTime(progress)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Playback Controls Row: Shuffle, Previous, Play/Pause, Next, Speed */}
        <div className="flex items-center justify-between px-1">
          {/* Shuffle */}
          <button
            onClick={() => {
              setIsShuffle(!isShuffle);
              showToast(!isShuffle ? "Shuffle On" : "Shuffle Off");
            }}
            className={`p-2 transition-transform active:scale-90 ${
              isShuffle
                ? "text-[#6d5b97]"
                : "text-[#574d46] hover:text-[#6d5b97]"
            }`}
            title="Toggle shuffle"
          >
            <Shuffle className="size-5" />
          </button>

          {/* Previous Track */}
          <button
            onClick={handlePrev}
            className="p-2 text-[#2b2520] hover:text-[#6d5b97] active:scale-90 transition-transform"
            title="Previous track"
          >
            <SkipBack className="size-6 fill-current" />
          </button>

          {/* Big Play / Pause Button */}
          <button
            onClick={togglePlay}
            className="size-16 rounded-full bg-[#6d5b97] hover:bg-[#5e4d87] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all mx-2"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="size-8 fill-current" />
            ) : (
              <Play className="size-8 fill-current ml-1" />
            )}
          </button>

          {/* Next Track */}
          <button
            onClick={handleNext}
            className="p-2 text-[#2b2520] hover:text-[#6d5b97] active:scale-90 transition-transform"
            title="Next track"
          >
            <SkipForward className="size-6 fill-current" />
          </button>

          {/* Playback Speed Pill Button */}
          <button
            onClick={cycleSpeed}
            className="px-2.5 py-1 rounded-full bg-[#ece6f2] hover:bg-[#dfd7e8] text-[#6d5b97] font-semibold text-xs tracking-tight active:scale-95 transition-all shadow-xs"
            title="Change playback speed"
          >
            {playbackSpeed.toFixed(1)}x
          </button>
        </div>

        {/* Sub-row: 10s Rewind and 10s Forward */}
        <div className="flex items-center justify-center gap-12 text-[#685d55]">
          <button
            onClick={() => handleSkip(-10)}
            className="flex flex-col items-center gap-0.5 p-1 hover:text-[#6d5b97] active:scale-90 transition-transform relative"
            title="Rewind 10 seconds"
          >
            <RotateCcw className="size-5" />
            <span className="text-[7.5px] font-bold absolute top-[5px]">
              10
            </span>
          </button>

          <button
            onClick={() => handleSkip(10)}
            className="flex flex-col items-center gap-0.5 p-1 hover:text-[#6d5b97] active:scale-90 transition-transform relative"
            title="Forward 10 seconds"
          >
            <RotateCw className="size-5" />
            <span className="text-[7.5px] font-bold absolute top-[5px]">
              10
            </span>
          </button>
        </div>

        {/* FOOTER SECTION: Volume Control, Playlists & Favorites */}
        <div className="border-t border-[#e8e2d9] pt-2.5 pb-1 mt-0.5 flex flex-col gap-2">
          {/* Slider-based Volume Control Component */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 bg-white/80 rounded-2xl border border-[#e8e2d9] shadow-2xs">
            <button
              type="button"
              onClick={toggleMute}
              className="p-1 rounded-lg text-[#685d55] hover:text-[#6d5b97] hover:bg-black/5 active:scale-90 transition-all shrink-0"
              title={isMuted || volume === 0 ? "Unmute" : "Mute"}
              aria-label={isMuted || volume === 0 ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="size-4.5 text-[#d14343]" />
              ) : volume < 0.5 ? (
                <Volume1 className="size-4.5 text-[#6d5b97]" />
              ) : (
                <Volume2 className="size-4.5 text-[#6d5b97]" />
              )}
            </button>

            <div className="flex-1 flex items-center gap-2.5">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-full h-1.5 bg-[#e4ddd5] rounded-lg appearance-none cursor-pointer accent-[#6d5b97] transition-all"
                aria-label="Playback volume"
              />
              <span className="text-[11px] font-semibold text-[#7a6f67] w-9 text-right font-mono shrink-0 select-none">
                {isMuted ? "0%" : `${Math.round(volume * 100)}%`}
              </span>
            </div>
          </div>

          {/* Section 1, 2 & 3: Playlist, Favorites, Albums */}
          <div className="flex items-center justify-between text-xs gap-1.5">
            {/* Section 1: Playlist */}
            <button
              onClick={() => {
                setActiveFooterTab("playlists");
                setSelectedPlaylistId(null);
                setShowFooterModal(true);
              }}
              className="flex items-center justify-center gap-1.5 flex-1 py-2 px-2 rounded-xl bg-white hover:bg-[#f6f2ec] border border-[#e8e2d9] shadow-xs active:scale-95 transition-all text-[#3c342d] hover:text-[#6d5b97]"
              title="View playlists"
            >
              <ListMusic className="size-4 text-[#6d5b97] shrink-0" />
              <span className="font-semibold text-xs">Playlist</span>
              {userPlaylists.length > 0 && (
                <span className="text-[10px] bg-[#ece6f2] text-[#6d5b97] font-bold px-1.5 py-0.2 rounded-full shrink-0">
                  {userPlaylists.length}
                </span>
              )}
            </button>

            {/* Section 2: Favorites */}
            <button
              onClick={() => {
                setActiveFooterTab("favorites");
                setShowFooterModal(true);
              }}
              className="flex items-center justify-center gap-1.5 flex-1 py-2 px-2 rounded-xl bg-white hover:bg-[#f6f2ec] border border-[#e8e2d9] shadow-xs active:scale-95 transition-all text-[#3c342d] hover:text-[#d14343]"
              title="View favorites"
            >
              <Heart className="size-4 fill-[#d14343] text-[#d14343] shrink-0" />
              <span className="font-semibold text-xs">Favorites</span>
              {favorites.length > 0 && (
                <span className="text-[10px] bg-red-50 text-[#d14343] font-bold px-1.5 py-0.2 rounded-full shrink-0">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Section 3: Albums */}
            <button
              onClick={() => {
                setActiveFooterTab("albums");
                setSelectedAlbumName(null);
                setShowFooterModal(true);
              }}
              className="flex items-center justify-center gap-1.5 flex-1 py-2 px-2 rounded-xl bg-white hover:bg-[#f6f2ec] border border-[#e8e2d9] shadow-xs active:scale-95 transition-all text-[#3c342d] hover:text-[#6d5b97]"
              title="View albums"
            >
              <Disc className="size-4 text-[#6d5b97] shrink-0" />
              <span className="font-semibold text-xs">Albums</span>
              {albumsList.length > 0 && (
                <span className="text-[10px] bg-[#ece6f2] text-[#6d5b97] font-bold px-1.5 py-0.2 rounded-full shrink-0">
                  {albumsList.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Native HTML5 Audio Element: 100% Bit-Perfect Original Quality */}
      <audio
        ref={audioRef}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleTrackEnded}
        onTimeUpdate={() => setProgress(audioRef.current?.currentTime || 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onError={() => {
          setIsPlaying(false);
          setErrorMessage("Unable to play this audio file.");
        }}
      />

      {/* 3-DOTS CONTEXT MENU MODAL (Matching Screenshot) */}
      {showMoreMenu && (
        <div
          className="fixed inset-0 z-[85] bg-black/40 backdrop-blur-xs flex flex-col justify-end"
          onClick={() => setShowMoreMenu(false)}
        >
          <div
            className="bg-white rounded-t-3xl p-5 shadow-2xl animate-in slide-in-from-bottom duration-200 text-[#1a1a1a]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Track preview in menu */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#f0ece5]">
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm truncate">
                  {parsedMeta.title}
                </p>
                <p className="text-xs text-[#8c827a] truncate">
                  {parsedMeta.artist}
                </p>
              </div>
              <button
                onClick={() => setShowMoreMenu(false)}
                className="p-1 rounded-full hover:bg-black/5 text-[#7a6f67]"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* The 8 Menu Items from Screenshot */}
            <div className="divide-y divide-[#f5f1eb] text-sm font-medium">
              {/* 1. Go to album */}
              <button
                onClick={() => {
                  setShowMoreMenu(false);
                  setShowAlbumModal(true);
                }}
                className="w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left"
              >
                <Disc className="size-5 text-[#2b2520]" />
                <span className="text-[15px]">Go to album</span>
              </button>

              {/* 2. Go to artist */}
              <button
                onClick={() => {
                  setShowMoreMenu(false);
                  setShowArtistModal(true);
                }}
                className="w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left"
              >
                <User className="size-5 text-[#2b2520]" />
                <span className="text-[15px]">Go to artist</span>
              </button>

              {/* 3. Add to playlist */}
              <button
                onClick={() => {
                  setShowMoreMenu(false);
                  setActiveFooterTab("playlists");
                  setSelectedPlaylistId(null);
                  setShowFooterModal(true);
                }}
                className="w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left"
              >
                <ListPlus className="size-5 text-[#2b2520]" />
                <span className="text-[15px]">Add to playlist</span>
              </button>

              {/* 4. Set as ringtone */}
              <button
                onClick={handleSetAsRingtone}
                className="w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left"
              >
                <Phone className="size-5 text-[#2b2520]" />
                <span className="text-[15px]">Set as ringtone</span>
              </button>

              {/* 5. Add to favorites */}
              <button
                onClick={() => {
                  toggleFavorite();
                  setShowMoreMenu(false);
                }}
                className="w-full flex items-center gap-4 py-3.5 hover:text-[#d14343] active:bg-black/5 transition-colors text-left"
              >
                <Heart
                  className={`size-5 ${
                    isFavorited
                      ? "fill-[#d14343] text-[#d14343]"
                      : "text-[#2b2520]"
                  }`}
                />
                <span className="text-[15px]">
                  {isFavorited ? "Remove from favorites" : "Add to favorites"}
                </span>
              </button>

              {/* 6. Remove */}
              <button
                onClick={handleRemoveTrack}
                className="w-full flex items-center gap-4 py-3.5 text-[#d14343] hover:opacity-80 active:bg-black/5 transition-colors text-left"
              >
                <ListX className="size-5" />
                <span className="text-[15px]">Remove</span>
              </button>

              {/* 7. Stop after this track */}
              <button
                onClick={() => {
                  const nextState = !stopAfterCurrentTrack;
                  setStopAfterCurrentTrack(nextState);
                  setShowMoreMenu(false);
                  showToast(
                    nextState
                      ? "Will stop playback after this track"
                      : "Stop after this track disabled",
                  );
                }}
                className="w-full flex items-center justify-between py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <Send className="size-5 text-[#2b2520]" />
                  <span className="text-[15px]">Stop after this track</span>
                </div>
                {stopAfterCurrentTrack && (
                  <Check className="size-4 text-[#6d5b97] font-bold" />
                )}
              </button>

              {/* 8. Share */}
              <button
                onClick={() => {
                  setShowMoreMenu(false);
                  handleShare();
                }}
                className="w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left"
              >
                <Share2 className="size-5 text-[#2b2520]" />
                <span className="text-[15px]">Share</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Album Modal (from Go to album) */}
      {showAlbumModal && (
        <div className="fixed inset-0 z-[85] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fbf9f6] rounded-2xl w-full max-w-sm p-5 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8e2d9]">
              <div className="flex items-center gap-2">
                <Disc className="size-5 text-[#6d5b97]" />
                <h3 className="font-semibold text-base">Album Overview</h3>
              </div>
              <button
                onClick={() => setShowAlbumModal(false)}
                className="p-1 rounded-full hover:bg-black/5"
              >
                <X className="size-5 text-[#5e534a]" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-[#e8e2d9]">
                <div className="size-16 rounded-xl bg-[#ece6f2] flex items-center justify-center shrink-0">
                  <Disc className="size-8 text-[#6d5b97]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-sm text-[#2b2520] truncate">
                    {parsedMeta.album}
                  </h4>
                  <p className="text-xs text-[#8c827a] truncate mt-0.5">
                    {parsedMeta.artist}
                  </p>
                  <p className="text-[11px] text-[#6d5b97] font-medium mt-1">
                    {playlist.length}{" "}
                    {playlist.length === 1 ? "track" : "tracks"} available
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 max-h-48 overflow-y-auto">
                <p className="text-xs font-semibold text-[#8c827a] uppercase">
                  Tracks in this Album / Session
                </p>
                {playlist.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setShowAlbumModal(false);
                    }}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs text-left transition-colors ${
                      idx === currentIndex
                        ? "bg-[#ece6f2] text-[#6d5b97] font-semibold"
                        : "bg-white border border-[#e8e2d9] hover:bg-[#f6f2ec]"
                    }`}
                  >
                    <span className="truncate flex-1">{t.name}</span>
                    {idx === currentIndex && (
                      <span className="text-[10px] bg-[#6d5b97] text-white px-2 py-0.5 rounded-full ml-2">
                        Playing
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowAlbumModal(false)}
                className="w-full py-2.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Artist Modal (from Go to artist) */}
      {showArtistModal && (
        <div className="fixed inset-0 z-[85] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fbf9f6] rounded-2xl w-full max-w-sm p-5 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8e2d9]">
              <div className="flex items-center gap-2">
                <User className="size-5 text-[#6d5b97]" />
                <h3 className="font-semibold text-base">Artist Profile</h3>
              </div>
              <button
                onClick={() => setShowArtistModal(false)}
                className="p-1 rounded-full hover:bg-black/5"
              >
                <X className="size-5 text-[#5e534a]" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-[#e8e2d9]">
                <div className="size-16 rounded-full bg-[#ece6f2] flex items-center justify-center shrink-0">
                  <User className="size-8 text-[#6d5b97]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-base text-[#2b2520] truncate">
                    {parsedMeta.artist}
                  </h4>
                  <p className="text-xs text-[#8c827a] mt-0.5">
                    Track: {parsedMeta.title}
                  </p>
                </div>
              </div>

              {/* Action to search artist online */}
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(parsedMeta.artist + " music")}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-[#e8e2d9] text-xs font-semibold text-[#6d5b97] hover:bg-[#ece6f2]/50 transition-colors"
              >
                <ExternalLink className="size-3.5" />
                <span>Search {parsedMeta.artist} on Google</span>
              </a>

              <button
                onClick={() => setShowArtistModal(false)}
                className="w-full py-2.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER MODAL: Playlists & Favorites Sheet */}
      {showFooterModal && (
        <div className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex flex-col justify-end">
          <div className="bg-[#fbf9f6] rounded-t-3xl max-h-[75vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-200">
            {/* Modal Header with Tabs */}
            <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-[#e8e2d9]">
              <div className="flex items-center gap-2 bg-[#ece6f2]/80 p-1 rounded-xl">
                <button
                  onClick={() => {
                    setActiveFooterTab("playlists");
                    setSelectedPlaylistId(null);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeFooterTab === "playlists"
                      ? "bg-white text-[#6d5b97] shadow-xs"
                      : "text-[#685d55] hover:text-[#2b2520]"
                  }`}
                >
                  <ListMusic className="size-3.5" />
                  <span>Playlist</span>
                </button>
                <button
                  onClick={() => setActiveFooterTab("favorites")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeFooterTab === "favorites"
                      ? "bg-white text-[#d14343] shadow-xs"
                      : "text-[#685d55] hover:text-[#2b2520]"
                  }`}
                >
                  <Heart className="size-3.5 fill-[#d14343] text-[#d14343]" />
                  <span>Favorites</span>
                  {favorites.length > 0 && (
                    <span className="text-[10px] bg-red-100 text-[#d14343] px-1.5 rounded-full">
                      {favorites.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => {
                    setActiveFooterTab("albums");
                    setSelectedAlbumName(null);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeFooterTab === "albums"
                      ? "bg-white text-[#6d5b97] shadow-xs"
                      : "text-[#685d55] hover:text-[#2b2520]"
                  }`}
                >
                  <Disc className="size-3.5" />
                  <span>Albums</span>
                  {albumsList.length > 0 && (
                    <span className="text-[10px] bg-[#ece6f2] text-[#6d5b97] px-1.5 rounded-full">
                      {albumsList.length}
                    </span>
                  )}
                </button>
              </div>

              <button
                onClick={() => setShowFooterModal(false)}
                className="p-1 rounded-full hover:bg-black/5"
              >
                <X className="size-5 text-[#5e534a]" />
              </button>
            </div>

            {/* TAB CONTENT: PLAYLISTS */}
            {activeFooterTab === "playlists" && (
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedPlaylistId ? (
                  (() => {
                    const pl = userPlaylists.find(
                      (p) => p.id === selectedPlaylistId,
                    );
                    if (!pl) return null;
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => setSelectedPlaylistId(null)}
                            className="text-xs font-medium text-[#6d5b97] hover:underline flex items-center gap-1"
                          >
                            ← Back to all playlists
                          </button>
                          <span className="text-xs text-[#8c827a]">
                            {pl.trackNames.length} tracks
                          </span>
                        </div>

                        <div className="flex items-center justify-between pb-2 border-b border-[#e8e2d9]">
                          <h4 className="font-bold text-base text-[#2b2520]">
                            {pl.name}
                          </h4>
                          <button
                            onClick={() => addTrackToPlaylist(pl.id)}
                            className="flex items-center gap-1 text-xs bg-[#6d5b97] text-white px-3 py-1.5 rounded-xl font-medium shadow-xs hover:bg-[#5e4d87]"
                          >
                            <Plus className="size-3.5" />
                            Add Current Track
                          </button>
                        </div>

                        <div className="space-y-1.5">
                          {pl.trackNames.map((trackName, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9] text-xs hover:border-[#6d5b97]/40 transition-colors"
                            >
                              <button
                                onClick={() => playSongByName(trackName)}
                                className="flex items-center gap-2 min-w-0 flex-1 text-left"
                              >
                                <PlayCircle className="size-4 text-[#6d5b97] shrink-0" />
                                <span className="font-medium truncate">
                                  {trackName}
                                </span>
                              </button>
                              <button
                                onClick={() =>
                                  removeTrackFromPlaylist(pl.id, trackName)
                                }
                                className="p-1 text-[#a3978e] hover:text-destructive"
                                title="Remove track"
                              >
                                <Trash2 className="size-3.5" />
                              </button>
                            </div>
                          ))}
                          {pl.trackNames.length === 0 && (
                            <p className="text-center py-8 text-xs text-[#8c827a]">
                              No tracks in this playlist yet. Tap &quot;Add
                              Current Track&quot; above to add one!
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  <>
                    <form
                      onSubmit={handleCreatePlaylist}
                      className="flex gap-2"
                    >
                      <input
                        type="text"
                        value={newPlaylistName}
                        onChange={(e) => setNewPlaylistName(e.target.value)}
                        placeholder="New playlist name..."
                        className="flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-[#e8e2d9] focus:outline-none focus:ring-2 focus:ring-[#6d5b97]"
                      />
                      <button
                        type="submit"
                        className="flex items-center gap-1.5 px-3 py-2 bg-[#6d5b97] text-white text-xs font-semibold rounded-xl hover:bg-[#5e4d87] transition-colors shadow-xs"
                      >
                        <FolderPlus className="size-3.5" />
                        <span>Create</span>
                      </button>
                    </form>

                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-[#8c827a] uppercase tracking-wider">
                        Your Playlists ({userPlaylists.length})
                      </h4>
                      {userPlaylists.map((pl) => (
                        <div
                          key={pl.id}
                          className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#e8e2d9] hover:border-[#6d5b97]/50 shadow-xs transition-all"
                        >
                          <button
                            onClick={() => setSelectedPlaylistId(pl.id)}
                            className="flex items-center gap-3 min-w-0 flex-1 text-left"
                          >
                            <div className="size-10 rounded-xl bg-[#ece6f2] flex items-center justify-center shrink-0">
                              <ListMusic className="size-5 text-[#6d5b97]" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-sm truncate">
                                {pl.name}
                              </p>
                              <p className="text-xs text-[#8c827a]">
                                {pl.trackNames.length}{" "}
                                {pl.trackNames.length === 1
                                  ? "track"
                                  : "tracks"}
                              </p>
                            </div>
                          </button>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => addTrackToPlaylist(pl.id)}
                              className="p-1.5 text-[#6d5b97] hover:bg-[#ece6f2] rounded-lg"
                              title="Add current track"
                            >
                              <Plus className="size-4" />
                            </button>
                            <button
                              onClick={() =>
                                handleDeletePlaylist(pl.id, pl.name)
                              }
                              className="p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg"
                              title="Delete playlist"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* TAB CONTENT: FAVORITES */}
            {activeFooterTab === "favorites" && (
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#e8e2d9]">
                  <div>
                    <h4 className="font-bold text-sm text-[#2b2520]">
                      Favorite Tracks
                    </h4>
                    <p className="text-xs text-[#8c827a]">
                      {favorites.length}{" "}
                      {favorites.length === 1 ? "song" : "songs"} saved
                    </p>
                  </div>
                  {favorites.length > 0 &&
                    favoriteTracksInPlaylist.length > 0 && (
                      <button
                        onClick={() =>
                          playSongByName(favoriteTracksInPlaylist[0].name)
                        }
                        className="flex items-center gap-1.5 text-xs bg-[#6d5b97] text-white px-3 py-1.5 rounded-xl font-medium shadow-xs hover:bg-[#5e4d87]"
                      >
                        <PlayCircle className="size-3.5" />
                        Play Favorites
                      </button>
                    )}
                </div>

                <div className="space-y-1.5">
                  {favorites.map((favName, i) => {
                    const isCurrentPlaying = currentTrack?.name === favName;
                    return (
                      <div
                        key={i}
                        className={`flex items-center justify-between p-3 rounded-xl border text-xs transition-colors ${
                          isCurrentPlaying
                            ? "bg-[#ece6f2] border-[#6d5b97] text-[#6d5b97]"
                            : "bg-white border-[#e8e2d9] text-[#2b2520]"
                        }`}
                      >
                        <button
                          onClick={() => playSongByName(favName)}
                          className="flex items-center gap-2.5 min-w-0 flex-1 text-left"
                        >
                          <PlayCircle
                            className={`size-4.5 ${isCurrentPlaying ? "text-[#6d5b97]" : "text-[#7a6f67]"}`}
                          />
                          <div className="min-w-0 flex-1">
                            <p className="font-medium truncate">{favName}</p>
                            {isCurrentPlaying && (
                              <p className="text-[10px] text-[#6d5b97] font-semibold">
                                Currently Playing
                              </p>
                            )}
                          </div>
                        </button>

                        <button
                          onClick={() => removeFavoriteByName(favName)}
                          className="p-1 text-[#d14343] hover:bg-red-50 rounded-lg transition-colors ml-2"
                          title="Remove from favorites"
                        >
                          <Heart className="size-4 fill-[#d14343]" />
                        </button>
                      </div>
                    );
                  })}

                  {favorites.length === 0 && (
                    <div className="text-center py-10 space-y-3">
                      <div className="size-12 rounded-full bg-red-50 text-[#d14343] flex items-center justify-center mx-auto">
                        <Heart className="size-6 fill-[#d14343]" />
                      </div>
                      <p className="text-xs text-[#8c827a]">
                        No favorite tracks yet.
                      </p>
                      {currentTrack && (
                        <button
                          onClick={toggleFavorite}
                          className="inline-flex items-center gap-1.5 text-xs bg-[#ece6f2] text-[#6d5b97] font-semibold px-4 py-2 rounded-xl hover:bg-[#dfd7e8] transition-colors"
                        >
                          <Heart className="size-3.5" />
                          Favorite Current Song
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB CONTENT: ALBUMS */}
            {activeFooterTab === "albums" && (
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedAlbumName ? (
                  (() => {
                    const album = albumsList.find(
                      (a) => a.albumName === selectedAlbumName,
                    );
                    if (!album) return null;
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => setSelectedAlbumName(null)}
                            className="text-xs font-medium text-[#6d5b97] hover:underline flex items-center gap-1"
                          >
                            ← Back to all albums
                          </button>
                          <span className="text-xs text-[#8c827a]">
                            {album.tracks.length}{" "}
                            {album.tracks.length === 1 ? "track" : "tracks"}
                          </span>
                        </div>

                        <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-[#e8e2d9] shadow-xs">
                          <div className="size-12 rounded-xl bg-[#ece6f2] flex items-center justify-center text-[#6d5b97] shrink-0">
                            <Disc className="size-6 animate-spin [animation-duration:8s]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-sm text-[#2b2520] truncate">
                              {album.albumName}
                            </h4>
                            <p className="text-xs text-[#8c827a] truncate">
                              {album.artist}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              if (album.tracks.length > 0) {
                                setCurrentIndex(album.tracks[0].index);
                                showToast(`Playing "${album.albumName}"`);
                              }
                            }}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87] shadow-xs"
                          >
                            <Play className="size-3.5 fill-current" />
                            <span>Play All</span>
                          </button>
                        </div>

                        <div className="space-y-1.5">
                          {album.tracks.map(
                            ({ file: trackFile, index: trackIdx }) => {
                              const isCurrent = trackIdx === currentIndex;
                              const meta = parseTrackMetadata(trackFile);
                              return (
                                <div
                                  key={trackIdx}
                                  className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${
                                    isCurrent
                                      ? "bg-[#ece6f2] border-[#6d5b97] text-[#6d5b97]"
                                      : "bg-white border-[#e8e2d9] hover:bg-[#f6f2ec] text-[#2b2520]"
                                  }`}
                                >
                                  <button
                                    onClick={() => setCurrentIndex(trackIdx)}
                                    className="flex items-center gap-2.5 min-w-0 flex-1 text-left"
                                  >
                                    <PlayCircle
                                      className={`size-4 ${isCurrent ? "text-[#6d5b97]" : "text-[#8c827a]"}`}
                                    />
                                    <div className="min-w-0 flex-1">
                                      <p className="font-medium truncate">
                                        {meta.title}
                                      </p>
                                      <p className="text-[10px] text-[#8c827a] truncate">
                                        {meta.artist}
                                      </p>
                                    </div>
                                  </button>
                                  {isCurrent && (
                                    <span className="text-[10px] bg-[#6d5b97] text-white px-2 py-0.5 rounded-full font-semibold">
                                      Playing
                                    </span>
                                  )}
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  <>
                    {/* Now Playing Album Card */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#ece6f2] to-[#f4eff8] border border-[#ded5e5] flex items-center justify-between gap-3 shadow-xs">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="size-11 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#6d5b97] shrink-0">
                          <Disc className="size-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] uppercase font-bold text-[#6d5b97] tracking-wider">
                            Now Playing Album
                          </span>
                          <h4 className="font-bold text-sm text-[#2b2520] truncate">
                            {parsedMeta.album}
                          </h4>
                          <p className="text-xs text-[#685d55] truncate">
                            {parsedMeta.artist}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedAlbumName(parsedMeta.album)}
                        className="px-3 py-1.5 rounded-xl bg-white text-[#6d5b97] text-xs font-semibold hover:bg-white/80 shadow-2xs shrink-0"
                      >
                        View Tracks
                      </button>
                    </div>

                    {/* Albums Library / Grouped List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-[#8c827a] uppercase tracking-wider">
                        Available Albums ({albumsList.length})
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {albumsList.map((album) => {
                          const isNowPlayingThis =
                            parsedMeta.album === album.albumName;
                          return (
                            <button
                              key={album.albumName}
                              onClick={() =>
                                setSelectedAlbumName(album.albumName)
                              }
                              className={`w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all hover:scale-[1.01] ${
                                isNowPlayingThis
                                  ? "bg-white border-[#6d5b97]/60 shadow-xs ring-1 ring-[#6d5b97]/30"
                                  : "bg-white border-[#e8e2d9] hover:border-[#6d5b97]/40 shadow-xs"
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                <div className="size-10 rounded-xl bg-[#ece6f2] flex items-center justify-center text-[#6d5b97] shrink-0">
                                  <Disc className="size-5" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="font-semibold text-sm text-[#2b2520] truncate">
                                    {album.albumName}
                                  </p>
                                  <p className="text-xs text-[#8c827a] truncate">
                                    {album.artist} • {album.tracks.length}{" "}
                                    {album.tracks.length === 1
                                      ? "track"
                                      : "tracks"}
                                  </p>
                                </div>
                              </div>

                              <span className="text-xs text-[#6d5b97] font-medium ml-2 shrink-0">
                                Browse →
                              </span>
                            </button>
                          );
                        })}

                        {albumsList.length === 0 && (
                          <p className="text-center py-8 text-xs text-[#8c827a]">
                            No albums found in current playlist
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Playlist / Queue Sheet Modal (from top row icon) */}
      {showPlaylist && (
        <div className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex flex-col justify-end">
          <div className="bg-[#fbf9f6] rounded-t-3xl max-h-[70vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between p-4 border-b border-[#e8e2d9]">
              <div className="flex items-center gap-2">
                <ListMusic className="size-5 text-[#6d5b97]" />
                <h3 className="font-semibold text-base">Playing Queue</h3>
                <span className="text-xs bg-[#ece6f2] text-[#6d5b97] font-semibold px-2 py-0.5 rounded-full">
                  {playlist.length}
                </span>
              </div>
              <button
                onClick={() => setShowPlaylist(false)}
                className="p-1 rounded-full hover:bg-black/5"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-3 space-y-1 divide-y divide-[#ece6f2]/50">
              {playlist.map((track, i) => {
                const isSelected = i === currentIndex;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentIndex(i);
                      setShowPlaylist(false);
                    }}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl text-left text-sm transition-colors ${
                      isSelected
                        ? "bg-[#ece6f2] text-[#6d5b97] font-medium"
                        : "hover:bg-black/5 text-[#3b322a]"
                    }`}
                  >
                    <span className="w-5 text-center text-xs opacity-60">
                      {i + 1}
                    </span>
                    <div className="flex-1 truncate">
                      <p className="truncate">{track.name}</p>
                    </div>
                    {isSelected && (
                      <span className="flex gap-0.5 items-end h-4">
                        <span className="w-0.5 h-3 bg-[#6d5b97] animate-pulse" />
                        <span className="w-0.5 h-4 bg-[#6d5b97] animate-pulse delay-75" />
                        <span className="w-0.5 h-2 bg-[#6d5b97] animate-pulse delay-150" />
                      </span>
                    )}
                  </button>
                );
              })}
              {playlist.length === 0 && (
                <p className="text-center py-8 text-xs text-[#8c827a]">
                  No songs in queue
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Audio Info & Equalizer Modal */}
      {showEqualizer && (
        <div className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fbf9f6] rounded-2xl w-full max-w-sm p-5 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8e2d9]">
              <div className="flex items-center gap-2">
                <Sparkles className="size-5 text-[#6d5b97]" />
                <h3 className="font-semibold text-base">Sound & Track Info</h3>
              </div>
              <button
                onClick={() => setShowEqualizer(false)}
                className="p-1 rounded-full hover:bg-black/5"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div className="bg-[#f1ebe3] p-3 rounded-xl text-xs space-y-1.5 text-[#5e534a]">
                <p className="font-medium text-[#2b2520] truncate">
                  {currentTrack?.name}
                </p>
                <div className="flex justify-between">
                  <span>File size:</span>
                  <span className="font-mono">
                    {currentTrack
                      ? `${(currentTrack.size / (1024 * 1024)).toFixed(2)} MB`
                      : "Unknown"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span className="font-mono uppercase">
                    {currentTrack?.name.split(".").pop() || "Audio"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Length:</span>
                  <span className="font-mono">{formatTime(duration)}</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-[#5e534a] mb-2">
                  Sound Profile Preset
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    "Flat (Original)",
                    "Bass Boost",
                    "Vocal Enhance",
                    "Treble Boost",
                  ].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => {
                        setActivePreset(preset);
                        showToast(`Preset: ${preset}`);
                      }}
                      className={`p-2.5 rounded-lg border text-left transition-all ${
                        activePreset === preset
                          ? "border-[#6d5b97] bg-[#ece6f2] text-[#6d5b97] font-semibold"
                          : "border-[#e0d8cd] hover:bg-black/5 text-[#4a423a]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{preset}</span>
                        {activePreset === preset && (
                          <Check className="size-3.5 text-[#6d5b97]" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setShowEqualizer(false)}
                className="w-full py-2.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sleep Timer Modal */}
      {showSleepTimer && (
        <div className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fbf9f6] rounded-2xl w-full max-w-xs p-5 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8e2d9]">
              <div className="flex items-center gap-2">
                <Clock className="size-5 text-[#6d5b97]" />
                <h3 className="font-semibold text-base">Sleep Timer</h3>
              </div>
              <button
                onClick={() => setShowSleepTimer(false)}
                className="p-1 rounded-full hover:bg-black/5"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mt-3 space-y-1.5 text-xs">
              {[
                { label: "Turn off timer", value: null },
                { label: "15 minutes", value: 15 },
                { label: "30 minutes", value: 30 },
                { label: "45 minutes", value: 45 },
                { label: "60 minutes", value: 60 },
              ].map((opt) => (
                <button
                  key={String(opt.value)}
                  onClick={() => setSleepTimer(opt.value)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-colors ${
                    sleepTimerMinutes === opt.value
                      ? "bg-[#ece6f2] text-[#6d5b97] font-semibold"
                      : "hover:bg-black/5 text-[#3b322a]"
                  }`}
                >
                  <span>{opt.label}</span>
                  {sleepTimerMinutes === opt.value && (
                    <Check className="size-4 text-[#6d5b97]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
