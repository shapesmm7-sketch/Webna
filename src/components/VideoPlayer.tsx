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
  Share2,
  ListMusic,
  AlertCircle,
  SkipBack,
  SkipForward,
  Check,
  Clock,
  Sparkles,
  Plus,
  Trash2,
  FolderPlus,
  MoreVertical,
  ExternalLink,
  Volume2,
  Volume1,
  VolumeX,
  Maximize2,
  Minimize2,
  PictureInPicture2,
  Film,
  Music,
  Disc,
} from "lucide-react";
import type { TrendingVideo } from "@/lib/video.functions";

export type VideoItem = File | TrendingVideo;

interface VideoPlayerProps {
  tracks?: VideoItem[];
  file?: VideoItem;
  initialIndex?: number;
  onClose: () => void;
  onSwitchToAudio?: () => void;
}

interface PlaylistData {
  id: string;
  name: string;
  createdAt: number;
  trackNames: string[];
}

export function VideoPlayer({
  tracks = [],
  file,
  initialIndex = 0,
  onClose,
  onSwitchToAudio,
}: VideoPlayerProps) {
  const playlist = useMemo(() => {
    if (tracks.length > 0) return tracks;
    if (file) return [file];
    return [];
  }, [tracks, file]);

  const [currentIndex, setCurrentIndex] = useState(
    Math.min(initialIndex, Math.max(0, playlist.length - 1)),
  );

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const hideControlsTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Playback settings
  const [repeatMode, setRepeatMode] = useState<"off" | "all" | "one">("off");
  const [isShuffle, setIsShuffle] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [stopAfterCurrentTrack, setStopAfterCurrentTrack] = useState(false);

  // Volume state
  const [volume, setVolume] = useState(() => {
    try {
      const saved = localStorage.getItem("webna_player_volume");
      return saved !== null ? Number(saved) : 1;
    } catch {
      return 1;
    }
  });
  const [isMuted, setIsMuted] = useState(false);
  const prevVolumeRef = useRef(volume > 0 ? volume : 0.8);

  // Footer Modals (Playlists / Favorites / Albums)
  const [activeFooterTab, setActiveFooterTab] = useState<
    "playlists" | "favorites" | "albums" | null
  >(null);
  const [selectedVideoAlbumId, setSelectedVideoAlbumId] = useState<
    string | null
  >(null);

  // Group videos into albums / series / collections
  const videoAlbums = useMemo(() => {
    const map = new Map<
      string,
      {
        id: string;
        title: string;
        description: string;
        thumbnailUrl?: string;
        items: { item: VideoItem; index: number }[];
      }
    >();

    playlist.forEach((item, index) => {
      let albumName = "Featured Video Collection";
      let description = "Curated video selection";
      let thumb: string | undefined = undefined;

      if ("channel" in item) {
        albumName = item.channel;
        description = `${item.channel} Series`;
        thumb = item.thumbnailUrl;
      } else {
        albumName = "Uploaded Video Library";
        description = "Personal uploaded video files";
      }

      if (!map.has(albumName)) {
        map.set(albumName, {
          id: `album-${albumName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          title: albumName,
          description,
          thumbnailUrl: thumb,
          items: [],
        });
      }
      const entry = map.get(albumName)!;
      if (!entry.thumbnailUrl && "thumbnailUrl" in item) {
        entry.thumbnailUrl = item.thumbnailUrl;
      }
      entry.items.push({ item, index });
    });

    return Array.from(map.values());
  }, [playlist]);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 3-dots more menu
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("webna_video_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Playlists state
  const [playlists, setPlaylists] = useState<PlaylistData[]>(() => {
    try {
      const saved = localStorage.getItem("webna_video_playlists");
      return saved
        ? JSON.parse(saved)
        : [
            {
              id: "favs-default",
              name: "Featured Clips",
              createdAt: Date.now(),
              trackNames: [],
            },
          ];
    } catch {
      return [];
    }
  });

  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState(false);
  const [selectedPlaylistForAdd, setSelectedPlaylistForAdd] = useState<
    string | null
  >(null);

  const currentItem: VideoItem | undefined = playlist[currentIndex];

  const getItemTitle = (item: VideoItem | undefined): string => {
    if (!item) return "Video Player";
    if ("name" in item) return item.name;
    return item.title;
  };

  const getItemSubtitle = (item: VideoItem | undefined): string => {
    if (!item) return "Video";
    if ("channel" in item) return item.channel;
    return `${(item.size / (1024 * 1024)).toFixed(1)} MB • ${item.name.split(".").pop()?.toUpperCase()}`;
  };

  const currentTitle = getItemTitle(currentItem);
  const currentSubtitle = getItemSubtitle(currentItem);

  const showToast = (msg: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  // Video URL resolution & fallback handling
  const [activeVideoSrc, setActiveVideoSrc] = useState<string>("");
  const [hasTriedFallback, setHasTriedFallback] = useState(false);
  const blobUrlRef = useRef<string | null>(null);

  // Setup active video source on item change
  useEffect(() => {
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }

    setHasTriedFallback(false);
    setErrorMessage(null);
    setProgress(0);
    setDuration(0);

    if (!currentItem) {
      setActiveVideoSrc("");
      return;
    }

    if ("videoUrl" in currentItem) {
      setActiveVideoSrc(currentItem.videoUrl);
    } else {
      const url = URL.createObjectURL(currentItem);
      blobUrlRef.current = url;
      setActiveVideoSrc(url);
    }

    return () => {
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
        blobUrlRef.current = null;
      }
    };
  }, [currentItem]);

  // Handle video loading errors with fallback options
  const handleVideoError = useCallback(() => {
    const video = videoRef.current;
    console.warn(
      "Video load error for:",
      activeVideoSrc,
      video?.error?.message,
    );

    // Try fallback URL if available on the current video
    if (
      !hasTriedFallback &&
      currentItem &&
      "fallbackUrl" in currentItem &&
      currentItem.fallbackUrl &&
      activeVideoSrc !== currentItem.fallbackUrl
    ) {
      setHasTriedFallback(true);
      setActiveVideoSrc(currentItem.fallbackUrl);
      showToast("Switching to backup video stream...");
      return;
    }

    setIsPlaying(false);
    if (currentItem && "name" in currentItem) {
      setErrorMessage(
        `Unable to decode "${currentItem.name}". Your browser may not support this video format.`,
      );
    } else {
      setErrorMessage(
        "Video stream could not be loaded. Please check your connection or tap to retry.",
      );
    }
  }, [activeVideoSrc, hasTriedFallback, currentItem]);

  // Load and play video when activeVideoSrc changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeVideoSrc) return;

    setErrorMessage(null);
    video.playbackRate = playbackSpeed;
    video.volume = isMuted ? 0 : volume;

    try {
      video.load();
    } catch {
      // ignore
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setErrorMessage(null);
        })
        .catch((err) => {
          console.warn(
            "Autoplay deferred or awaiting user tap:",
            err?.message || err,
          );
          setIsPlaying(false);
        });
    }

    return () => {
      video.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeVideoSrc]);

  // Sync volume
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = isMuted ? 0 : volume;
    }
    try {
      localStorage.setItem("webna_player_volume", volume.toString());
    } catch {
      // ignore
    }
  }, [volume, isMuted]);

  // Handle controls auto-hide
  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideControlsTimerRef.current) {
      clearTimeout(hideControlsTimerRef.current);
    }
    if (isPlaying) {
      hideControlsTimerRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3500);
    }
  }, [isPlaying]);

  useEffect(() => {
    resetHideTimer();
    return () => {
      if (hideControlsTimerRef.current)
        clearTimeout(hideControlsTimerRef.current);
    };
  }, [isPlaying, resetHideTimer]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      if (!video.src && activeVideoSrc) {
        video.src = activeVideoSrc;
      }
      if (video.error) {
        video.load();
      }

      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setErrorMessage(null);
        })
        .catch((err) => {
          console.warn("Video playback note:", err?.message || err);
          if (
            err?.name === "NotSupportedError" ||
            String(err?.message).toLowerCase().includes("no supported sources")
          ) {
            handleVideoError();
          } else {
            setIsPlaying(false);
          }
        });
    } else {
      video.pause();
      setIsPlaying(false);
    }
    resetHideTimer();
  };

  const handleNext = useCallback(() => {
    if (playlist.length <= 1) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
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
    if (videoRef.current && videoRef.current.currentTime > 3) {
      videoRef.current.currentTime = 0;
      setProgress(0);
      return;
    }

    if (playlist.length <= 1) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
      return;
    }

    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  }, [playlist.length]);

  const handleSkip = (seconds: number) => {
    if (videoRef.current) {
      const newTime = Math.min(
        Math.max(0, videoRef.current.currentTime + seconds),
        duration || Infinity,
      );
      videoRef.current.currentTime = newTime;
      setProgress(newTime);
      resetHideTimer();
    }
  };

  const handleSeek = (newTime: number) => {
    setProgress(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
    resetHideTimer();
  };

  const cycleRepeatMode = () => {
    setRepeatMode((current) => {
      if (current === "off") {
        showToast("Repeat All videos");
        return "all";
      }
      if (current === "all") {
        showToast("Repeat Current video");
        return "one";
      }
      showToast("Repeat Off");
      return "off";
    });
  };

  const cycleSpeed = () => {
    const speeds = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const nextSpeed = speeds[nextIdx];
    setPlaybackSpeed(nextSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = nextSpeed;
    }
    showToast(`Speed: ${nextSpeed}x`);
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.warn("Fullscreen toggle error:", err);
    }
  };

  const togglePiP = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        showToast("Picture-in-Picture disabled");
      } else if (document.pictureInPictureEnabled) {
        await video.requestPictureInPicture();
        showToast("Picture-in-Picture enabled");
      }
    } catch (err) {
      console.warn("PiP error:", err);
      showToast("Picture-in-Picture not supported");
    }
  };

  const toggleFavorite = (title: string) => {
    setFavorites((prev) => {
      const next = prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title];
      try {
        localStorage.setItem("webna_video_favorites", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
    }
    if (videoRef.current) {
      videoRef.current.volume = newVol;
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      const restoreVol =
        prevVolumeRef.current > 0 ? prevVolumeRef.current : 0.8;
      setIsMuted(false);
      setVolume(restoreVol);
      if (videoRef.current) {
        videoRef.current.volume = restoreVol;
      }
      showToast(`Volume unmuted (${Math.round(restoreVol * 100)}%)`);
    } else {
      prevVolumeRef.current = volume > 0 ? volume : 0.8;
      setIsMuted(true);
      if (videoRef.current) {
        videoRef.current.volume = 0;
      }
      showToast("Muted");
    }
  };

  const handleVideoEnded = () => {
    if (stopAfterCurrentTrack) {
      setIsPlaying(false);
      setProgress(0);
      setStopAfterCurrentTrack(false);
      showToast("Stopped playback after video finished");
      return;
    }

    if (repeatMode === "one") {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    } else if (repeatMode === "all" || currentIndex < playlist.length - 1) {
      handleNext();
    } else {
      setIsPlaying(false);
      setProgress(0);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0 || !isFinite(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const isFavorite = currentTitle ? favorites.includes(currentTitle) : false;

  return (
    <div
      ref={containerRef}
      onMouseMove={resetHideTimer}
      onClick={resetHideTimer}
      className="fixed inset-0 z-[60] flex flex-col bg-black text-white select-none overflow-hidden"
    >
      {/* Hidden/Active Video Element */}
      <video
        ref={videoRef}
        src={activeVideoSrc || undefined}
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-contain cursor-pointer"
        onClick={togglePlay}
        onTimeUpdate={() => {
          if (videoRef.current) {
            setProgress(videoRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (videoRef.current) {
            setDuration(videoRef.current.duration);
          }
        }}
        onCanPlay={() => {
          setErrorMessage(null);
        }}
        onEnded={handleVideoEnded}
        onError={handleVideoError}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-[90] bg-[#1a1715]/90 text-white text-xs px-4 py-2 rounded-full shadow-lg backdrop-blur-md animate-fade-in pointer-events-none border border-white/10">
          {toastMessage}
        </div>
      )}

      {/* Top Header Bar */}
      <div
        className={`relative z-20 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
          showControls || !isPlaying
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Audio Player / Video Player Switcher Tabs */}
        <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/10">
          <button
            onClick={() => {
              if (videoRef.current) videoRef.current.pause();
              if (onSwitchToAudio) {
                onSwitchToAudio();
              } else {
                onClose();
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/70 hover:text-white transition-all hover:bg-white/10"
            title="Switch to Audio Player"
          >
            <Music className="size-3.5" />
            <span>Audio player</span>
          </button>

          <button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-black shadow-xs transition-all"
            title="Video Player (Active)"
          >
            <Film className="size-3.5" />
            <span>Video player</span>
          </button>
        </div>

        {/* Title & Queue Info */}
        <div className="hidden sm:block min-w-0 flex-1 px-4 text-center">
          <h2 className="text-sm font-semibold truncate text-white drop-shadow-sm">
            {currentTitle}
          </h2>
          <p className="text-[11px] text-white/70 truncate">
            {currentSubtitle} • Track {currentIndex + 1} of {playlist.length}
          </p>
        </div>

        {/* Actions: 3-Dots Menu & Close */}
        <div className="flex items-center gap-1">
          <button
            onClick={togglePiP}
            className="p-2 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors"
            title="Picture in Picture"
          >
            <PictureInPicture2 className="size-4.5" />
          </button>

          <button
            onClick={() => setShowMoreMenu(true)}
            className="p-2 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors"
            title="Options"
          >
            <MoreVertical className="size-5" />
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors"
            title="Close"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>

      {/* Center Play/Pause Overlay indicator when paused */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 z-10 m-auto size-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-2xl"
          aria-label="Play video"
        >
          <Play className="size-10 fill-white text-white ml-1" />
        </button>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 p-3 rounded-2xl bg-destructive/90 text-white text-xs backdrop-blur-md shadow-xl max-w-sm">
          <AlertCircle className="size-4 shrink-0" />
          <span className="flex-1 text-left">{errorMessage}</span>
          <button
            onClick={() => {
              if (playlist.length > 1) {
                handleNext();
              } else if (videoRef.current) {
                videoRef.current.load();
                videoRef.current.play().catch(() => {});
              }
            }}
            className="px-2.5 py-1 bg-white/20 hover:bg-white/30 rounded-lg font-semibold shrink-0 transition-colors"
          >
            {playlist.length > 1 ? "Next Video" : "Retry"}
          </button>
        </div>
      )}

      {/* Spacer to push controls to bottom */}
      <div className="flex-1" onClick={togglePlay} />

      {/* Bottom Controls Bar */}
      <div
        className={`relative z-20 flex flex-col gap-2.5 px-4 pt-6 pb-4 bg-gradient-to-t from-black/95 via-black/75 to-transparent transition-opacity duration-300 ${
          showControls || !isPlaying
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Scrubber Progress Bar */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-white/80 min-w-[42px] text-right">
            {formatTime(progress)}
          </span>

          <div className="relative flex-1 group flex items-center h-6 cursor-pointer">
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.1}
              value={progress}
              onChange={(e) => handleSeek(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white focus:outline-none transition-all group-hover:h-2.5"
            />
          </div>

          <span className="text-xs font-mono text-white/60 min-w-[42px]">
            {formatTime(duration)}
          </span>
        </div>

        {/* Primary Playback Controls Row */}
        <div className="flex items-center justify-between gap-2">
          {/* Left Controls: Repeat & Shuffle & Speed */}
          <div className="flex items-center gap-1">
            <button
              onClick={cycleRepeatMode}
              className={`p-2 rounded-xl transition-all ${
                repeatMode !== "off"
                  ? "bg-white/20 text-white shadow-xs"
                  : "text-white/60 hover:text-white"
              }`}
              title={`Repeat: ${repeatMode}`}
            >
              {repeatMode === "one" ? (
                <Repeat1 className="size-4.5" />
              ) : (
                <Repeat className="size-4.5" />
              )}
            </button>

            <button
              onClick={() => {
                setIsShuffle((s) => !s);
                showToast(!isShuffle ? "Shuffle On" : "Shuffle Off");
              }}
              className={`p-2 rounded-xl transition-all ${
                isShuffle
                  ? "bg-white/20 text-white shadow-xs"
                  : "text-white/60 hover:text-white"
              }`}
              title="Shuffle"
            >
              <Shuffle className="size-4.5" />
            </button>

            <button
              onClick={cycleSpeed}
              className="px-2 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
              title="Playback speed"
            >
              {playbackSpeed}x
            </button>
          </div>

          {/* Center Main Controls: Prev, -10s, Play/Pause, +10s, Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all"
              title="Previous Video"
            >
              <SkipBack className="size-5" />
            </button>

            <button
              onClick={() => handleSkip(-10)}
              className="p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all"
              title="Rewind 10s"
            >
              <RotateCcw className="size-5" />
            </button>

            <button
              onClick={togglePlay}
              className="size-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="size-6 fill-black" />
              ) : (
                <Play className="size-6 fill-black ml-0.5" />
              )}
            </button>

            <button
              onClick={() => handleSkip(10)}
              className="p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all"
              title="Forward 10s"
            >
              <RotateCw className="size-5" />
            </button>

            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all"
              title="Next Video"
            >
              <SkipForward className="size-5" />
            </button>
          </div>

          {/* Right Controls: Favorite & Fullscreen */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => toggleFavorite(currentTitle)}
              className={`p-2 rounded-xl transition-all ${
                isFavorite
                  ? "text-red-500 hover:text-red-400"
                  : "text-white/60 hover:text-white"
              }`}
              title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            >
              <Heart className={`size-5 ${isFavorite ? "fill-current" : ""}`} />
            </button>

            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/15 transition-all"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? (
                <Minimize2 className="size-5" />
              ) : (
                <Maximize2 className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Footer Sub-Row: Volume Slider & Playlists / Favorites buttons */}
        <div className="flex items-center justify-between gap-4 pt-2 border-t border-white/10">
          {/* Volume Control */}
          <div className="flex items-center gap-2 max-w-[200px] w-full">
            <button
              onClick={toggleMute}
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="size-4 text-red-400" />
              ) : volume < 0.5 ? (
                <Volume1 className="size-4" />
              ) : (
                <Volume2 className="size-4" />
              )}
            </button>

            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-24 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white focus:outline-none"
              title={`Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
            />

            <span className="text-[11px] font-mono text-white/60 min-w-[32px]">
              {Math.round((isMuted ? 0 : volume) * 100)}%
            </span>
          </div>

          {/* Footer Buttons: Playlist, Favorites, Albums */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* 1. Playlist */}
            <button
              onClick={() =>
                setActiveFooterTab(
                  activeFooterTab === "playlists" ? null : "playlists",
                )
              }
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeFooterTab === "playlists"
                  ? "bg-white text-black shadow-md"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
              title="View playlists"
            >
              <ListMusic className="size-3.5" />
              <span>Playlist</span>
            </button>

            {/* 2. Favorites */}
            <button
              onClick={() =>
                setActiveFooterTab(
                  activeFooterTab === "favorites" ? null : "favorites",
                )
              }
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeFooterTab === "favorites"
                  ? "bg-white text-black shadow-md"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
              title="View favorites"
            >
              <Heart className="size-3.5 fill-current text-red-500" />
              <span>Favorites</span>
              {favorites.length > 0 && (
                <span className="text-[10px] bg-red-500/20 text-red-300 font-bold px-1.5 py-0.2 rounded-full">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* 3. Albums */}
            <button
              onClick={() => {
                setSelectedVideoAlbumId(null);
                setActiveFooterTab(
                  activeFooterTab === "albums" ? null : "albums",
                );
              }}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeFooterTab === "albums"
                  ? "bg-white text-black shadow-md"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
              title="View video albums"
            >
              <Disc className="size-3.5 text-brand" />
              <span>Albums</span>
              {videoAlbums.length > 0 && (
                <span className="text-[10px] bg-white/20 text-white font-bold px-1.5 py-0.2 rounded-full">
                  {videoAlbums.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Playlists, Favorites & Albums Sheet Modal */}
      {activeFooterTab && (
        <div className="absolute inset-x-0 bottom-0 z-50 max-h-[75vh] flex flex-col bg-[#141210] border-t border-white/15 rounded-t-3xl shadow-2xl p-5 text-white animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl">
              <button
                onClick={() => setActiveFooterTab("playlists")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeFooterTab === "playlists"
                    ? "bg-white text-black shadow-xs"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <ListMusic className="size-3.5" />
                <span>Playlist</span>
              </button>

              <button
                onClick={() => setActiveFooterTab("favorites")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeFooterTab === "favorites"
                    ? "bg-white text-black shadow-xs"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <Heart className="size-3.5 fill-current text-red-500" />
                <span>Favorites</span>
                {favorites.length > 0 && (
                  <span className="text-[10px] bg-red-500/20 text-red-300 px-1.5 rounded-full">
                    {favorites.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => {
                  setActiveFooterTab("albums");
                  setSelectedVideoAlbumId(null);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeFooterTab === "albums"
                    ? "bg-white text-black shadow-xs"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <Disc className="size-3.5" />
                <span>Albums</span>
                {videoAlbums.length > 0 && (
                  <span className="text-[10px] bg-white/20 text-white px-1.5 rounded-full">
                    {videoAlbums.length}
                  </span>
                )}
              </button>
            </div>

            <button
              onClick={() => setActiveFooterTab(null)}
              className="p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-3 space-y-3">
            {activeFooterTab === "favorites" ? (
              favorites.length === 0 ? (
                <div className="text-center py-8 text-white/50 text-xs">
                  No favorite videos yet. Tap the heart icon while watching to
                  add videos to your favorites.
                </div>
              ) : (
                <div className="space-y-1.5">
                  {favorites.map((favTitle, idx) => {
                    const matchIndex = playlist.findIndex(
                      (p) => getItemTitle(p) === favTitle,
                    );
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <button
                          onClick={() => {
                            if (matchIndex !== -1) {
                              setCurrentIndex(matchIndex);
                              setActiveFooterTab(null);
                            } else {
                              showToast(
                                `Video "${favTitle}" is not in current queue`,
                              );
                            }
                          }}
                          className="flex-1 min-w-0 text-left"
                        >
                          <p className="text-sm font-semibold truncate">
                            {favTitle}
                          </p>
                          <p className="text-xs text-white/50">
                            {matchIndex !== -1
                              ? "Tap to play from queue"
                              : "Saved favorite"}
                          </p>
                        </button>

                        <button
                          onClick={() => toggleFavorite(favTitle)}
                          className="p-2 text-red-400 hover:text-red-300"
                          title="Remove favorite"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )
            ) : activeFooterTab === "albums" ? (
              <div className="space-y-4">
                {selectedVideoAlbumId ? (
                  (() => {
                    const album = videoAlbums.find(
                      (a) => a.id === selectedVideoAlbumId,
                    );
                    if (!album) return null;
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => setSelectedVideoAlbumId(null)}
                            className="text-xs font-medium text-brand hover:underline flex items-center gap-1"
                          >
                            ← Back to all video albums
                          </button>
                          <span className="text-xs text-white/50">
                            {album.items.length}{" "}
                            {album.items.length === 1 ? "video" : "videos"}
                          </span>
                        </div>

                        {/* Album header banner */}
                        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/15">
                          {album.thumbnailUrl ? (
                            <img
                              src={album.thumbnailUrl}
                              alt={album.title}
                              referrerPolicy="no-referrer"
                              crossOrigin="anonymous"
                              className="size-14 rounded-xl object-cover shrink-0"
                            />
                          ) : (
                            <div className="size-14 rounded-xl bg-white/10 flex items-center justify-center text-brand shrink-0">
                              <Film className="size-7" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-sm text-white truncate">
                              {album.title}
                            </h4>
                            <p className="text-xs text-white/60 truncate mt-0.5">
                              {album.description}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              if (album.items.length > 0) {
                                setCurrentIndex(album.items[0].index);
                                showToast(`Playing "${album.title}"`);
                              }
                            }}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-xl text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md shrink-0"
                          >
                            <Play className="size-3.5 fill-black ml-0.5" />
                            <span>Play All</span>
                          </button>
                        </div>

                        {/* Videos in this album */}
                        <div className="space-y-1.5">
                          {album.items.map(({ item, index }) => {
                            const isCurrent = index === currentIndex;
                            const title = getItemTitle(item);
                            const subtitle = getItemSubtitle(item);
                            return (
                              <div
                                key={index}
                                className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${
                                  isCurrent
                                    ? "bg-white/20 border-white/40 text-white"
                                    : "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                                }`}
                              >
                                <button
                                  onClick={() => {
                                    setCurrentIndex(index);
                                    setActiveFooterTab(null);
                                  }}
                                  className="flex items-center gap-3 min-w-0 flex-1 text-left"
                                >
                                  {"thumbnailUrl" in item ? (
                                    <img
                                      src={item.thumbnailUrl}
                                      alt={title}
                                      referrerPolicy="no-referrer"
                                      crossOrigin="anonymous"
                                      className="w-12 h-8 rounded-lg object-cover shrink-0"
                                    />
                                  ) : (
                                    <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                      <Film className="size-4 text-white/60" />
                                    </div>
                                  )}
                                  <div className="min-w-0 flex-1">
                                    <p className="font-semibold text-xs truncate">
                                      {title}
                                    </p>
                                    <p className="text-[10px] text-white/50 truncate">
                                      {subtitle}
                                    </p>
                                  </div>
                                </button>
                                {isCurrent ? (
                                  <span className="text-[10px] bg-brand text-brand-foreground px-2 py-0.5 rounded-full font-semibold ml-2">
                                    Playing
                                  </span>
                                ) : (
                                  <button
                                    onClick={() => {
                                      setCurrentIndex(index);
                                      setActiveFooterTab(null);
                                    }}
                                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white ml-2"
                                    title="Play this video"
                                  >
                                    <Play className="size-3.5 fill-current ml-0.5" />
                                  </button>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  <>
                    {/* Now Playing Album Card */}
                    <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="size-11 rounded-xl bg-white/10 flex items-center justify-center text-brand shrink-0">
                          <Disc className="size-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] uppercase font-bold text-brand tracking-wider">
                            Current Video Album / Channel
                          </span>
                          <h4 className="font-bold text-sm text-white truncate">
                            {currentItem && "channel" in currentItem
                              ? currentItem.channel
                              : "Uploaded Video Library"}
                          </h4>
                          <p className="text-xs text-white/60 truncate">
                            {currentTitle}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          const targetAlbum = videoAlbums.find((a) =>
                            a.items.some((it) => it.index === currentIndex),
                          );
                          if (targetAlbum) {
                            setSelectedVideoAlbumId(targetAlbum.id);
                          }
                        }}
                        className="px-3 py-1.5 rounded-xl bg-white text-black text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shrink-0"
                      >
                        View Album
                      </button>
                    </div>

                    {/* Albums Library / Grouped List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                        Available Video Albums ({videoAlbums.length})
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {videoAlbums.map((album) => {
                          const isCurrentAlbum = album.items.some(
                            (it) => it.index === currentIndex,
                          );
                          return (
                            <button
                              key={album.id}
                              onClick={() => setSelectedVideoAlbumId(album.id)}
                              className={`w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all hover:bg-white/10 ${
                                isCurrentAlbum
                                  ? "bg-white/10 border-brand/50 ring-1 ring-brand/30"
                                  : "bg-white/5 border-white/10"
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                {album.thumbnailUrl ? (
                                  <img
                                    src={album.thumbnailUrl}
                                    alt={album.title}
                                    referrerPolicy="no-referrer"
                                    crossOrigin="anonymous"
                                    className="size-11 rounded-xl object-cover shrink-0"
                                  />
                                ) : (
                                  <div className="size-11 rounded-xl bg-white/10 flex items-center justify-center text-brand shrink-0">
                                    <Film className="size-5" />
                                  </div>
                                )}
                                <div className="min-w-0 flex-1">
                                  <p className="font-semibold text-sm text-white truncate">
                                    {album.title}
                                  </p>
                                  <p className="text-xs text-white/60 truncate">
                                    {album.items.length}{" "}
                                    {album.items.length === 1
                                      ? "video"
                                      : "videos"}{" "}
                                    • {album.description}
                                  </p>
                                </div>
                              </div>

                              <span className="text-xs text-brand font-medium ml-2 shrink-0">
                                Browse →
                              </span>
                            </button>
                          );
                        })}

                        {videoAlbums.length === 0 && (
                          <p className="text-center py-8 text-xs text-white/50">
                            No video albums available
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* Playlists Tab */
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="New playlist name..."
                    value={newPlaylistName}
                    onChange={(e) => setNewPlaylistName(e.target.value)}
                    className="flex-1 px-3 py-2 bg-white/10 rounded-xl text-sm border border-white/15 focus:outline-none focus:border-white/40 text-white"
                  />
                  <button
                    onClick={() => {
                      if (!newPlaylistName.trim()) return;
                      const newP: PlaylistData = {
                        id: `pl-${Date.now()}`,
                        name: newPlaylistName.trim(),
                        createdAt: Date.now(),
                        trackNames: [currentTitle],
                      };
                      const next = [...playlists, newP];
                      setPlaylists(next);
                      localStorage.setItem(
                        "webna_video_playlists",
                        JSON.stringify(next),
                      );
                      setNewPlaylistName("");
                      showToast(`Created "${newP.name}"`);
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 bg-white text-black text-xs font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all"
                  >
                    <Plus className="size-4" />
                    <span>Create</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {playlists.map((pl) => (
                    <div
                      key={pl.id}
                      className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold">{pl.name}</p>
                          <p className="text-xs text-white/50">
                            {pl.trackNames.length}{" "}
                            {pl.trackNames.length === 1 ? "video" : "videos"}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              if (pl.trackNames.includes(currentTitle)) {
                                showToast("Video already in this playlist");
                                return;
                              }
                              const updated = playlists.map((p) =>
                                p.id === pl.id
                                  ? {
                                      ...p,
                                      trackNames: [
                                        ...p.trackNames,
                                        currentTitle,
                                      ],
                                    }
                                  : p,
                              );
                              setPlaylists(updated);
                              localStorage.setItem(
                                "webna_video_playlists",
                                JSON.stringify(updated),
                              );
                              showToast(`Added to "${pl.name}"`);
                            }}
                            className="flex items-center gap-1 px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg"
                          >
                            <FolderPlus className="size-3.5" />
                            <span>Add Current</span>
                          </button>
                          <button
                            onClick={() => {
                              const updated = playlists.filter(
                                (p) => p.id !== pl.id,
                              );
                              setPlaylists(updated);
                              localStorage.setItem(
                                "webna_video_playlists",
                                JSON.stringify(updated),
                              );
                              showToast(`Deleted "${pl.name}"`);
                            }}
                            className="p-1.5 text-white/40 hover:text-red-400 hover:bg-white/10 rounded-lg transition-colors"
                            title="Delete playlist"
                          >
                            <Trash2 className="size-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Video items in playlist */}
                      {pl.trackNames.length > 0 && (
                        <div className="pt-2 border-t border-white/10 space-y-1">
                          {pl.trackNames.map((tName, i) => {
                            const matchIdx = playlist.findIndex(
                              (p) => getItemTitle(p) === tName,
                            );
                            return (
                              <div
                                key={i}
                                className="flex items-center justify-between p-1.5 rounded-lg bg-white/5 text-xs hover:bg-white/10"
                              >
                                <button
                                  onClick={() => {
                                    if (matchIdx !== -1) {
                                      setCurrentIndex(matchIdx);
                                      setActiveFooterTab(null);
                                    } else {
                                      showToast(
                                        `Video "${tName}" is not in current queue`,
                                      );
                                    }
                                  }}
                                  className="flex items-center gap-2 min-w-0 flex-1 text-left"
                                >
                                  <Play className="size-3 text-brand shrink-0 ml-0.5" />
                                  <span className="truncate">{tName}</span>
                                </button>
                                <button
                                  onClick={() => {
                                    const updated = playlists.map((p) =>
                                      p.id === pl.id
                                        ? {
                                            ...p,
                                            trackNames: p.trackNames.filter(
                                              (_, idx) => idx !== i,
                                            ),
                                          }
                                        : p,
                                    );
                                    setPlaylists(updated);
                                    localStorage.setItem(
                                      "webna_video_playlists",
                                      JSON.stringify(updated),
                                    );
                                  }}
                                  className="p-1 text-white/40 hover:text-red-400"
                                  title="Remove video from playlist"
                                >
                                  <Trash2 className="size-3" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3-Dots More Options Menu */}
      {showMoreMenu && (
        <div className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-sm bg-[#1a1715] border border-white/15 rounded-3xl p-4 shadow-2xl text-white space-y-2 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="min-w-0 pr-2">
                <p className="text-sm font-semibold truncate">{currentTitle}</p>
                <p className="text-xs text-white/60">Options</p>
              </div>
              <button
                onClick={() => setShowMoreMenu(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white"
              >
                <X className="size-5" />
              </button>
            </div>

            <button
              onClick={() => {
                setShowMoreMenu(false);
                setShowDetailsModal(true);
              }}
              className="flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors text-left"
            >
              <Sparkles className="size-4.5 text-brand" />
              <span>Video details & specs</span>
            </button>

            <button
              onClick={() => {
                setStopAfterCurrentTrack((prev) => {
                  showToast(
                    !prev
                      ? "Will stop after this video finishes"
                      : "Stop after video cancelled",
                  );
                  return !prev;
                });
                setShowMoreMenu(false);
              }}
              className="flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors text-left"
            >
              <Clock className="size-4.5 text-amber-400" />
              <span>
                {stopAfterCurrentTrack
                  ? "Cancel Stop After Video"
                  : "Stop after this video"}
              </span>
            </button>

            <button
              onClick={async () => {
                setShowMoreMenu(false);
                if (navigator.share) {
                  try {
                    await navigator.share({
                      title: currentTitle,
                      text: `Watching ${currentTitle} on WebNa Video Player`,
                    });
                  } catch {
                    // ignore
                  }
                } else {
                  await navigator.clipboard.writeText(currentTitle);
                  showToast("Video title copied to clipboard");
                }
              }}
              className="flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors text-left"
            >
              <Share2 className="size-4.5 text-blue-400" />
              <span>Share video</span>
            </button>
          </div>
        </div>
      )}

      {/* Video Details Modal */}
      {showDetailsModal && (
        <div className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-[#1c1917] border border-white/15 rounded-3xl p-5 shadow-2xl text-white space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h3 className="text-base font-semibold">Video Details</h3>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="text-xs space-y-2 text-white/80">
              <p>
                <strong className="text-white">Title:</strong> {currentTitle}
              </p>
              <p>
                <strong className="text-white">Duration:</strong>{" "}
                {formatTime(duration)}
              </p>
              <p>
                <strong className="text-white">Source:</strong>{" "}
                {"channel" in (currentItem || {})
                  ? "Streaming Catalog"
                  : "Device Storage"}
              </p>
              {"quality" in (currentItem || {}) && (
                <p>
                  <strong className="text-white">Quality:</strong>{" "}
                  {(currentItem as TrendingVideo).quality}
                </p>
              )}
              {"size" in (currentItem || {}) && (
                <p>
                  <strong className="text-white">File Size:</strong>{" "}
                  {(((currentItem as File).size || 0) / (1024 * 1024)).toFixed(
                    2,
                  )}{" "}
                  MB
                </p>
              )}
            </div>
            <button
              onClick={() => setShowDetailsModal(false)}
              className="w-full py-2 bg-white text-black text-xs font-semibold rounded-xl mt-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
