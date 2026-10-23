import React, { useEffect, useState, useMemo } from "react";
import {
  getTrendingTracks,
  searchMusicTracks,
  type TrendingTrack,
} from "@/lib/music.functions";
import { getTrendingVideos, type TrendingVideo } from "@/lib/video.functions";
import {
  Play,
  Music,
  Plus,
  Trash2,
  CheckSquare,
  Square,
  Film,
  Video,
  Clock,
  Sparkles,
  ListMusic,
  Heart,
  Disc,
  FolderPlus,
  X,
  PlayCircle,
  ChevronLeft,
  Search,
  ExternalLink,
} from "lucide-react";
import { AudioPlayer, type AudioItem } from "./AudioPlayer";
import { VideoPlayer, type VideoItem } from "./VideoPlayer";

type MusicPlatform =
  | "all"
  | "apple"
  | "spotify"
  | "itunes"
  | "youtube"
  | "amazon"
  | "tidal"
  | "deezer"
  | "soundcloud"
  | "bandcamp"
  | "pandora"
  | "qobuz"
  | "napster"
  | "boomplay"
  | "audiomack";

interface AudioPlayerPanelProps {
  playerMode?: "audio" | "video";
  onPlayerModeChange?: (mode: "audio" | "video") => void;
  initialVideoQueue?: VideoItem[];
  initialVideoIndex?: number;
  onCloseVideo?: () => void;
  onOpenUrl?: (url: string) => void;
}

export function AudioPlayerPanel({
  playerMode: externalPlayerMode,
  onPlayerModeChange,
  initialVideoQueue,
  initialVideoIndex,
  onCloseVideo,
  onOpenUrl,
}: AudioPlayerPanelProps) {
  const [internalPlayerMode, setInternalPlayerMode] = useState<
    "audio" | "video"
  >("audio");

  const currentMode = externalPlayerMode ?? internalPlayerMode;
  const setPlayerMode = (mode: "audio" | "video") => {
    if (onPlayerModeChange) {
      onPlayerModeChange(mode);
    } else {
      setInternalPlayerMode(mode);
    }
  };

  // Audio state
  const [audioTab, setAudioTab] = useState<"foryou" | "phone">("foryou");
  const [audioTracks, setAudioTracks] = useState<TrendingTrack[]>([]);
  const [localAudioTracks, setLocalAudioTracks] = useState<File[]>([]);
  const [selectedAudioNames, setSelectedAudioNames] = useState<Set<string>>(
    new Set(),
  );
  const [activeAudioQueue, setActiveAudioQueue] = useState<AudioItem[] | null>(
    null,
  );
  const [playingAudioIndex, setPlayingAudioIndex] = useState<number | null>(
    null,
  );
  const [musicQuery, setMusicQuery] = useState("");
  const [searchResults, setSearchResults] = useState<TrendingTrack[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedMusicPlatform, setSelectedMusicPlatform] =
    useState<MusicPlatform>("spotify");

  const handleMusicSearch = async (
    e?: React.FormEvent,
    overrideQuery?: string,
    overridePlatform?: MusicPlatform,
  ) => {
    if (e) e.preventDefault();
    const query = (overrideQuery ?? musicQuery).trim();
    const platformToSearch = overridePlatform ?? selectedMusicPlatform;
    if (!query) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    try {
      const results = await searchMusicTracks({
        data: {
          term: query,
          platform: platformToSearch,
        },
      });
      setSearchResults(results);
    } catch (err) {
      console.error("Music search error:", err);
      // Fallback search locally in trending
      const lower = query.toLowerCase();
      const filtered = audioTracks.filter(
        (t) =>
          t.title.toLowerCase().includes(lower) ||
          t.artist.toLowerCase().includes(lower),
      );
      setSearchResults(filtered);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSelectPlatform = async (pId: MusicPlatform) => {
    setSelectedMusicPlatform(pId);
    const trimmed = musicQuery.trim();
    if (trimmed) {
      // Re-search active query immediately on the newly selected platform
      handleMusicSearch(undefined, trimmed, pId);
    } else {
      // Platform curated query for initial results
      const platformKeywords: Record<string, string> = {
        all: "Top Hits 2026",
        spotify: "Today's Top Hits",
        apple: "Apple Music Top Hits",
        itunes: "iTunes Top 40",
        youtube: "Trending Viral",
        amazon: "Amazon Music Prime",
        tidal: "Master Audio Hits",
        deezer: "Deezer Top Chart",
        soundcloud: "SoundCloud Trending",
        bandcamp: "Indie Essentials",
        pandora: "Top Radio Hits",
        qobuz: "Hi-Res Audio Hits",
        napster: "Trending Classics",
        boomplay: "Afrobeats & Pop",
        audiomack: "Hip-Hop Hits",
      };
      const query = platformKeywords[pId] || "Top Hits";
      setIsSearching(true);
      try {
        const results = await searchMusicTracks({
          data: {
            term: query,
            platform: pId,
          },
        });
        if (results && results.length > 0) {
          setSearchResults(results);
        }
      } catch (err) {
        console.error("Platform fetch error:", err);
      } finally {
        setIsSearching(false);
      }
    }
  };

  // Video state
  const [videoTab, setVideoTab] = useState<"foryou" | "phone">("foryou");
  const [videoTracks, setVideoTracks] = useState<TrendingVideo[]>([]);
  const [localVideoTracks, setLocalVideoTracks] = useState<File[]>([]);
  const [selectedVideoNames, setSelectedVideoNames] = useState<Set<string>>(
    new Set(),
  );
  const [activeVideoQueue, setActiveVideoQueue] = useState<VideoItem[] | null>(
    null,
  );
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(
    null,
  );

  // Fetch trending tracks
  useEffect(() => {
    if (currentMode === "audio" && audioTab === "foryou") {
      getTrendingTracks().then(setAudioTracks);
    }
  }, [currentMode, audioTab]);

  // Fetch trending videos
  useEffect(() => {
    if (currentMode === "video" && videoTab === "foryou") {
      getTrendingVideos().then(setVideoTracks);
    }
  }, [currentMode, videoTab]);

  // Handle external video request (e.g. from Discover TikTok Trends)
  useEffect(() => {
    if (initialVideoQueue && initialVideoQueue.length > 0) {
      setActiveVideoQueue(initialVideoQueue);
      setPlayingVideoIndex(initialVideoIndex ?? 0);
    }
  }, [initialVideoQueue, initialVideoIndex]);

  // Page Footer Modal state ("playlists" | "favorites" | "albums" | null)
  const [pageFooterModal, setPageFooterModal] = useState<
    "playlists" | "favorites" | "albums" | null
  >(null);
  const [selectedAlbumItem, setSelectedAlbumItem] = useState<string | null>(
    null,
  );
  const [selectedPlaylistDetailId, setSelectedPlaylistDetailId] = useState<
    string | null
  >(null);
  const [newPlaylistInput, setNewPlaylistInput] = useState("");

  // Playlists & Favorites state synced with localStorage
  const [audioPlaylists, setAudioPlaylists] = useState<
    { id: string; name: string; trackNames: string[] }[]
  >(() => {
    try {
      const saved = localStorage.getItem("webna_user_playlists");
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [
      { id: "default-1", name: "My Favorite Mix", trackNames: [] },
      { id: "default-2", name: "Chill & Focus", trackNames: [] },
    ];
  });

  const [audioFavorites, setAudioFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("webna_favorites");
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [];
  });

  const [videoPlaylists, setVideoPlaylists] = useState<
    { id: string; name: string; trackNames: string[] }[]
  >(() => {
    try {
      const saved = localStorage.getItem("webna_video_playlists");
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [{ id: "favs-default", name: "Featured Clips", trackNames: [] }];
  });

  const [videoFavorites, setVideoFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("webna_video_favorites");
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [];
  });

  // Reload localStorage whenever pageFooterModal is opened
  useEffect(() => {
    try {
      const aPl = localStorage.getItem("webna_user_playlists");
      if (aPl) setAudioPlaylists(JSON.parse(aPl));
      const aFav = localStorage.getItem("webna_favorites");
      if (aFav) setAudioFavorites(JSON.parse(aFav));
      const vPl = localStorage.getItem("webna_video_playlists");
      if (vPl) setVideoPlaylists(JSON.parse(vPl));
      const vFav = localStorage.getItem("webna_video_favorites");
      if (vFav) setVideoFavorites(JSON.parse(vFav));
    } catch {
      // ignore
    }
  }, [pageFooterModal]);

  // Audio albums derived from local files and trending tracks
  const audioAlbums = useMemo(() => {
    const map = new Map<
      string,
      {
        albumName: string;
        artist: string;
        tracks: { title: string; file?: File; trending?: TrendingTrack }[];
      }
    >();

    localAudioTracks.forEach((file) => {
      const base = file.name.replace(/\.[^/.]+$/, "");
      let artist = "My Phone Audio";
      let album = "Local Phone Tracks";
      let title = base;
      if (base.includes(" - ")) {
        const parts = base.split(" - ");
        artist = parts[0].trim();
        title = parts[1].trim();
        album = `${artist} Album`;
      }
      if (!map.has(album)) {
        map.set(album, { albumName: album, artist, tracks: [] });
      }
      map.get(album)!.tracks.push({ title, file });
    });

    audioTracks.forEach((t) => {
      const album = `${t.artist} Essentials`;
      if (!map.has(album)) {
        map.set(album, { albumName: album, artist: t.artist, tracks: [] });
      }
      map.get(album)!.tracks.push({ title: t.title, trending: t });
    });

    return Array.from(map.values());
  }, [localAudioTracks, audioTracks]);

  // Video albums derived from trending channels and uploads
  const videoAlbums = useMemo(() => {
    const map = new Map<
      string,
      {
        albumName: string;
        description: string;
        thumbnailUrl?: string;
        items: VideoItem[];
      }
    >();

    videoTracks.forEach((v) => {
      const ch = v.channel || "Curated Collection";
      if (!map.has(ch)) {
        map.set(ch, {
          albumName: ch,
          description: `${ch} Video Series`,
          thumbnailUrl: v.thumbnailUrl,
          items: [],
        });
      }
      map.get(ch)!.items.push(v);
    });

    if (localVideoTracks.length > 0) {
      map.set("My Uploaded Videos", {
        albumName: "My Uploaded Videos",
        description: "Videos from your phone storage",
        items: localVideoTracks,
      });
    }

    return Array.from(map.values());
  }, [videoTracks, localVideoTracks]);

  const handleCreateNewPlaylist = (e: React.FormEvent) => {
    e.preventDefault();
    const name = newPlaylistInput.trim();
    if (!name) return;

    if (currentMode === "audio") {
      const newP = { id: `pl-${Date.now()}`, name, trackNames: [] };
      const updated = [newP, ...audioPlaylists];
      setAudioPlaylists(updated);
      try {
        localStorage.setItem("webna_user_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    } else {
      const newP = { id: `vpl-${Date.now()}`, name, trackNames: [] };
      const updated = [newP, ...videoPlaylists];
      setVideoPlaylists(updated);
      try {
        localStorage.setItem("webna_video_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    }
    setNewPlaylistInput("");
  };

  const handleDeletePlaylist = (id: string) => {
    if (currentMode === "audio") {
      const updated = audioPlaylists.filter((p) => p.id !== id);
      setAudioPlaylists(updated);
      try {
        localStorage.setItem("webna_user_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    } else {
      const updated = videoPlaylists.filter((p) => p.id !== id);
      setVideoPlaylists(updated);
      try {
        localStorage.setItem("webna_video_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    }
    if (selectedPlaylistDetailId === id) setSelectedPlaylistDetailId(null);
  };

  const handleRemoveFavorite = (name: string) => {
    if (currentMode === "audio") {
      const updated = audioFavorites.filter((f) => f !== name);
      setAudioFavorites(updated);
      try {
        localStorage.setItem("webna_favorites", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    } else {
      const updated = videoFavorites.filter((f) => f !== name);
      setVideoFavorites(updated);
      try {
        localStorage.setItem("webna_video_favorites", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const resolveAudioItem = (songName: string): AudioItem => {
    // 1. Check local files
    const local = localAudioTracks.find(
      (f) =>
        f.name === songName ||
        f.name.replace(/\.[^/.]+$/, "") === songName ||
        f.name.toLowerCase() === songName.toLowerCase(),
    );
    if (local) return local;

    // 2. Check trending tracks
    const trending = audioTracks.find(
      (t) =>
        t.title === songName ||
        `${t.artist} - ${t.title}` === songName ||
        t.title.toLowerCase().includes(songName.toLowerCase()),
    );
    if (trending) return trending;

    // 3. Check search results
    const searched = searchResults.find(
      (t) =>
        t.title === songName ||
        t.title.toLowerCase().includes(songName.toLowerCase()),
    );
    if (searched) return searched;

    // 4. Fallback playable track item
    return {
      title: songName,
      artist: "Popular Artist",
      coverUrl:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=80",
      rank: 1,
      previewUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    };
  };

  const playSongByName = (songName: string) => {
    // Check local tracks first
    const localIdx = localAudioTracks.findIndex(
      (f) =>
        f.name === songName ||
        f.name.replace(/\.[^/.]+$/, "") === songName ||
        f.name.toLowerCase() === songName.toLowerCase(),
    );
    if (localIdx !== -1) {
      playFromAudioTracks(localAudioTracks, localIdx);
      setPageFooterModal(null);
      return;
    }

    // Check trending tracks
    const trendingIdx = audioTracks.findIndex(
      (t) =>
        t.title === songName ||
        `${t.artist} - ${t.title}` === songName ||
        t.title.toLowerCase().includes(songName.toLowerCase()),
    );
    if (trendingIdx !== -1) {
      playFromAudioTracks(audioTracks, trendingIdx);
      setPageFooterModal(null);
      return;
    }

    // Check search results
    const searchIdx = searchResults.findIndex(
      (t) =>
        t.title === songName ||
        t.title.toLowerCase().includes(songName.toLowerCase()),
    );
    if (searchIdx !== -1) {
      playFromAudioTracks(searchResults, searchIdx);
      setPageFooterModal(null);
      return;
    }

    // Play resolved audio item
    const resolved = resolveAudioItem(songName);
    playFromAudioTracks([resolved], 0);
    setPageFooterModal(null);
  };

  const playPlaylist = (
    pl: { id: string; name: string; trackNames: string[] },
    startIndex = 0,
  ) => {
    if (pl.trackNames.length === 0) return;
    const queue = pl.trackNames.map((name) => resolveAudioItem(name));
    playFromAudioTracks(
      queue,
      Math.max(0, Math.min(startIndex, queue.length - 1)),
    );
    setPageFooterModal(null);
  };

  const playVideoByName = (videoName: string) => {
    const localIdx = localVideoTracks.findIndex((f) => f.name === videoName);
    if (localIdx !== -1) {
      playFromVideoTracks(localVideoTracks, localIdx);
      setPageFooterModal(null);
      return;
    }
    const trendingIdx = videoTracks.findIndex((v) => v.title === videoName);
    if (trendingIdx !== -1) {
      playFromVideoTracks(videoTracks, trendingIdx);
      setPageFooterModal(null);
      return;
    }
    if (videoTracks.length > 0) {
      playFromVideoTracks(videoTracks, 0);
      setPageFooterModal(null);
    }
  };

  const toggleAudioFavorite = (name: string) => {
    setAudioFavorites((prev) => {
      const next = prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name];
      try {
        localStorage.setItem("webna_favorites", JSON.stringify(next));
      } catch (err) {
        console.error(err);
      }
      return next;
    });
  };

  const toggleVideoFavorite = (name: string) => {
    setVideoFavorites((prev) => {
      const next = prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name];
      try {
        localStorage.setItem("webna_video_favorites", JSON.stringify(next));
      } catch (err) {
        console.error(err);
      }
      return next;
    });
  };

  const handleAddTrackToPlaylist = (playlistId: string, trackName: string) => {
    if (!trackName.trim()) return;
    if (currentMode === "audio") {
      const updated = audioPlaylists.map((p) => {
        if (p.id === playlistId) {
          if (p.trackNames.includes(trackName)) return p;
          return { ...p, trackNames: [...p.trackNames, trackName] };
        }
        return p;
      });
      setAudioPlaylists(updated);
      try {
        localStorage.setItem("webna_user_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    } else {
      const updated = videoPlaylists.map((p) => {
        if (p.id === playlistId) {
          if (p.trackNames.includes(trackName)) return p;
          return { ...p, trackNames: [...p.trackNames, trackName] };
        }
        return p;
      });
      setVideoPlaylists(updated);
      try {
        localStorage.setItem("webna_video_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleRemoveTrackFromPlaylist = (
    playlistId: string,
    trackName: string,
  ) => {
    if (currentMode === "audio") {
      const updated = audioPlaylists.map((p) => {
        if (p.id === playlistId) {
          return {
            ...p,
            trackNames: p.trackNames.filter((t) => t !== trackName),
          };
        }
        return p;
      });
      setAudioPlaylists(updated);
      try {
        localStorage.setItem("webna_user_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    } else {
      const updated = videoPlaylists.map((p) => {
        if (p.id === playlistId) {
          return {
            ...p,
            trackNames: p.trackNames.filter((t) => t !== trackName),
          };
        }
        return p;
      });
      setVideoPlaylists(updated);
      try {
        localStorage.setItem("webna_video_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    }
  };

  // Handle local audio files
  const handleAudioFilesAdded = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const added = Array.from(files);
    setLocalAudioTracks((prev) => {
      const existingKeys = new Set(prev.map((f) => `${f.name}-${f.size}`));
      const uniqueNew = added.filter(
        (f) => !existingKeys.has(`${f.name}-${f.size}`),
      );
      const combined = [...prev, ...uniqueNew];
      setSelectedAudioNames((prevSel) => {
        const nextSel = new Set(prevSel);
        uniqueNew.forEach((f) => nextSel.add(f.name));
        return nextSel;
      });
      return combined;
    });
  };

  const toggleSelectAudio = (fileName: string) => {
    setSelectedAudioNames((prev) => {
      const next = new Set(prev);
      if (next.has(fileName)) {
        next.delete(fileName);
      } else {
        next.add(fileName);
      }
      return next;
    });
  };

  const toggleSelectAllAudio = () => {
    if (selectedAudioNames.size === localAudioTracks.length) {
      setSelectedAudioNames(new Set());
    } else {
      setSelectedAudioNames(new Set(localAudioTracks.map((f) => f.name)));
    }
  };

  const removeLocalAudioTrack = (index: number) => {
    const trackToRemove = localAudioTracks[index];
    setLocalAudioTracks((prev) => prev.filter((_, i) => i !== index));
    if (trackToRemove) {
      setSelectedAudioNames((prev) => {
        const next = new Set(prev);
        next.delete(trackToRemove.name);
        return next;
      });
    }
  };

  const clearAllAudioTracks = () => {
    setLocalAudioTracks([]);
    setSelectedAudioNames(new Set());
  };

  const playFromAudioTracks = (queue: AudioItem[], startIndex = 0) => {
    if (queue.length === 0) return;
    setActiveAudioQueue(queue);
    setPlayingAudioIndex(startIndex);
  };

  const handlePlaySelectedAudio = () => {
    const queue = localAudioTracks.filter((t) =>
      selectedAudioNames.has(t.name),
    );
    if (queue.length > 0) {
      playFromAudioTracks(queue, 0);
    } else if (localAudioTracks.length > 0) {
      playFromAudioTracks(localAudioTracks, 0);
    }
  };

  const handlePlaySingleAudio = (index: number) => {
    const targetFile = localAudioTracks[index];
    const selectedList = localAudioTracks.filter((t) =>
      selectedAudioNames.has(t.name),
    );

    if (selectedList.length > 1 && selectedAudioNames.has(targetFile.name)) {
      const startIdx = selectedList.findIndex(
        (t) => t.name === targetFile.name,
      );
      playFromAudioTracks(selectedList, Math.max(0, startIdx));
    } else {
      playFromAudioTracks(localAudioTracks, index);
    }
  };

  // Handle local video files
  const handleVideoFilesAdded = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const added = Array.from(files);
    setLocalVideoTracks((prev) => {
      const existingKeys = new Set(prev.map((f) => `${f.name}-${f.size}`));
      const uniqueNew = added.filter(
        (f) => !existingKeys.has(`${f.name}-${f.size}`),
      );
      const combined = [...prev, ...uniqueNew];
      setSelectedVideoNames((prevSel) => {
        const nextSel = new Set(prevSel);
        uniqueNew.forEach((f) => nextSel.add(f.name));
        return nextSel;
      });
      return combined;
    });
  };

  const toggleSelectVideo = (fileName: string) => {
    setSelectedVideoNames((prev) => {
      const next = new Set(prev);
      if (next.has(fileName)) {
        next.delete(fileName);
      } else {
        next.add(fileName);
      }
      return next;
    });
  };

  const toggleSelectAllVideo = () => {
    if (selectedVideoNames.size === localVideoTracks.length) {
      setSelectedVideoNames(new Set());
    } else {
      setSelectedVideoNames(new Set(localVideoTracks.map((f) => f.name)));
    }
  };

  const removeLocalVideoTrack = (index: number) => {
    const videoToRemove = localVideoTracks[index];
    setLocalVideoTracks((prev) => prev.filter((_, i) => i !== index));
    if (videoToRemove) {
      setSelectedVideoNames((prev) => {
        const next = new Set(prev);
        next.delete(videoToRemove.name);
        return next;
      });
    }
  };

  const clearAllVideoTracks = () => {
    setLocalVideoTracks([]);
    setSelectedVideoNames(new Set());
  };

  const playFromVideoTracks = (queue: VideoItem[], startIndex = 0) => {
    if (queue.length === 0) return;
    setActiveVideoQueue(queue);
    setPlayingVideoIndex(startIndex);
  };

  const handlePlaySelectedVideo = () => {
    const queue = localVideoTracks.filter((t) =>
      selectedVideoNames.has(t.name),
    );
    if (queue.length > 0) {
      playFromVideoTracks(queue, 0);
    } else if (localVideoTracks.length > 0) {
      playFromVideoTracks(localVideoTracks, 0);
    }
  };

  const handlePlaySingleVideo = (index: number) => {
    const targetFile = localVideoTracks[index];
    const selectedList = localVideoTracks.filter((t) =>
      selectedVideoNames.has(t.name),
    );

    if (selectedList.length > 1 && selectedVideoNames.has(targetFile.name)) {
      const startIdx = selectedList.findIndex(
        (t) => t.name === targetFile.name,
      );
      playFromVideoTracks(selectedList, Math.max(0, startIdx));
    } else {
      playFromVideoTracks(localVideoTracks, index);
    }
  };

  const selectedAudioCount = selectedAudioNames.size;
  const isAllAudioSelected =
    localAudioTracks.length > 0 &&
    selectedAudioCount === localAudioTracks.length;

  const selectedVideoCount = selectedVideoNames.size;
  const isAllVideoSelected =
    localVideoTracks.length > 0 &&
    selectedVideoCount === localVideoTracks.length;

  const currentPlaylistsCount =
    currentMode === "audio" ? audioPlaylists.length : videoPlaylists.length;
  const currentFavoritesCount =
    currentMode === "audio" ? audioFavorites.length : videoFavorites.length;
  const currentAlbumsCount =
    currentMode === "audio" ? audioAlbums.length : videoAlbums.length;

  return (
    <>
      <div className="flex flex-col h-full select-none">
        {pageFooterModal ? (
          /* Active Footer Section View (Favorites, Playlist, Albums) */
          <div className="flex-1 overflow-y-auto min-h-0 space-y-4 px-4 py-3">
            {/* FAVORITES VIEW */}
            {pageFooterModal === "favorites" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#e8e2d9]">
                  <button
                    onClick={() => setPageFooterModal(null)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                  >
                    <ChevronLeft className="size-4" />
                    <span>Back to Player</span>
                  </button>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {currentMode === "audio"
                      ? "Audio Favorites"
                      : "Video Favorites"}{" "}
                    (
                    {currentMode === "audio"
                      ? audioFavorites.length
                      : videoFavorites.length}
                    )
                  </span>
                </div>

                {(currentMode === "audio" ? audioFavorites : videoFavorites)
                  .length > 0 ? (
                  <>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground font-medium">
                        {currentMode === "audio"
                          ? "Your favorited songs"
                          : "Your favorited videos"}
                      </p>
                      <button
                        onClick={() => {
                          if (currentMode === "audio") {
                            if (audioFavorites.length > 0)
                              playSongByName(audioFavorites[0]);
                          } else {
                            if (videoFavorites.length > 0)
                              playVideoByName(videoFavorites[0]);
                          }
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 transition-all"
                      >
                        <Play className="size-3.5 fill-current" />
                        <span>Play All Favorites</span>
                      </button>
                    </div>

                    <div className="space-y-2">
                      {(currentMode === "audio"
                        ? audioFavorites
                        : videoFavorites
                      ).map((name, idx) => (
                        <div
                          key={name}
                          className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#e8e2d9] shadow-xs hover:border-brand/30 transition-all"
                        >
                          <div className="flex items-center gap-3 min-w-0 flex-1">
                            <div className="size-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                              {currentMode === "audio" ? (
                                <Music className="size-5" />
                              ) : (
                                <Film className="size-5" />
                              )}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-xs sm:text-sm text-[#2b2520] truncate">
                                {name}
                              </p>
                              <p className="text-[11px] text-[#8c827a] mt-0.5">
                                Favorite #{idx + 1}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                if (currentMode === "audio")
                                  playSongByName(name);
                                else playVideoByName(name);
                              }}
                              className="size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs"
                              title="Play"
                            >
                              <Play className="size-4 fill-current ml-0.5" />
                            </button>
                            <button
                              onClick={() => handleRemoveFavorite(name)}
                              className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              title="Remove from favorites"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center text-muted-foreground py-12 flex flex-col items-center justify-center gap-3">
                    <div className="size-16 rounded-full bg-red-50 text-red-400 flex items-center justify-center">
                      <Heart className="size-8" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#3c342d]">
                        No favorites yet
                      </p>
                      <p className="text-xs text-[#8c827a] mt-1 max-w-xs">
                        Tap the heart icon on any{" "}
                        {currentMode === "audio" ? "song" : "video"} in your
                        library or trending feed to add it here.
                      </p>
                    </div>
                    <button
                      onClick={() => setPageFooterModal(null)}
                      className="mt-2 px-4 py-2 bg-brand text-brand-foreground text-xs font-semibold rounded-xl hover:opacity-90 transition-all"
                    >
                      Browse {currentMode === "audio" ? "Songs" : "Videos"}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* PLAYLISTS VIEW */}
            {pageFooterModal === "playlists" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#e8e2d9]">
                  <button
                    onClick={() => {
                      if (selectedPlaylistDetailId)
                        setSelectedPlaylistDetailId(null);
                      else setPageFooterModal(null);
                    }}
                    className="flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                  >
                    <ChevronLeft className="size-4" />
                    <span>
                      {selectedPlaylistDetailId
                        ? "Back to Playlists"
                        : "Back to Player"}
                    </span>
                  </button>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {currentMode === "audio"
                      ? "Audio Playlists"
                      : "Video Playlists"}
                  </span>
                </div>

                {/* Selected Playlist Detail View */}
                {selectedPlaylistDetailId ? (
                  (() => {
                    const currentList =
                      currentMode === "audio" ? audioPlaylists : videoPlaylists;
                    const pl = currentList.find(
                      (p) => p.id === selectedPlaylistDetailId,
                    );
                    if (!pl) return null;
                    return (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between bg-white p-3.5 rounded-2xl border border-[#e8e2d9] shadow-xs">
                          <div>
                            <h4 className="font-bold text-base text-[#2b2520]">
                              {pl.name}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {pl.trackNames.length}{" "}
                              {pl.trackNames.length === 1 ? "track" : "tracks"}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                if (pl.trackNames.length > 0) {
                                  if (currentMode === "audio")
                                    playPlaylist(pl, 0);
                                  else playVideoByName(pl.trackNames[0]);
                                }
                              }}
                              disabled={pl.trackNames.length === 0}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 disabled:opacity-50"
                            >
                              <Play className="size-3.5 fill-current" />
                              <span>Play</span>
                            </button>
                            <button
                              onClick={() => handleDeletePlaylist(pl.id)}
                              className="p-1.5 text-muted-foreground hover:text-destructive"
                              title="Delete playlist"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                        </div>

                        {/* Quick add track to this playlist */}
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-muted-foreground">
                            Add tracks to this playlist
                          </p>
                          <select
                            className="w-full rounded-xl border border-[#e8e2d9] bg-white px-3 py-2 text-xs text-[#2b2520]"
                            defaultValue=""
                            onChange={(e) => {
                              if (e.target.value) {
                                handleAddTrackToPlaylist(pl.id, e.target.value);
                                e.target.value = "";
                              }
                            }}
                          >
                            <option value="" disabled>
                              Choose from your uploads...
                            </option>
                            {(currentMode === "audio"
                              ? localAudioTracks
                              : localVideoTracks
                            ).map((f) => (
                              <option key={f.name} value={f.name}>
                                {f.name}
                              </option>
                            ))}
                            {(currentMode === "audio"
                              ? audioTracks
                              : videoTracks
                            ).map((item) => {
                              const title = "title" in item ? item.title : "";
                              return (
                                <option key={title} value={title}>
                                  {title}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        {/* Tracks list inside playlist */}
                        <div className="space-y-2">
                          {pl.trackNames.map((trackName, idx) => (
                            <div
                              key={`${trackName}-${idx}`}
                              className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9]"
                            >
                              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                                <span className="text-xs font-mono text-muted-foreground w-4 text-center">
                                  {idx + 1}
                                </span>
                                <p className="text-xs font-medium truncate text-[#2b2520]">
                                  {trackName}
                                </p>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={() => {
                                    if (currentMode === "audio")
                                      playPlaylist(pl, idx);
                                    else playVideoByName(trackName);
                                  }}
                                  className="size-7 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors"
                                  title="Play"
                                >
                                  <Play className="size-3.5 fill-current ml-0.5" />
                                </button>
                                <button
                                  onClick={() =>
                                    handleRemoveTrackFromPlaylist(
                                      pl.id,
                                      trackName,
                                    )
                                  }
                                  className="p-1 text-muted-foreground hover:text-destructive"
                                  title="Remove from playlist"
                                >
                                  <Trash2 className="size-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}

                          {pl.trackNames.length === 0 && (
                            <p className="text-center text-xs text-muted-foreground py-6">
                              No tracks in this playlist yet. Add tracks using
                              the selector above.
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  /* Playlists List View */
                  <div className="space-y-4">
                    {/* Create Playlist Form */}
                    <form
                      onSubmit={handleCreateNewPlaylist}
                      className="flex gap-2"
                    >
                      <input
                        type="text"
                        placeholder="New playlist name..."
                        value={newPlaylistInput}
                        onChange={(e) => setNewPlaylistInput(e.target.value)}
                        className="flex-1 rounded-xl border border-[#e8e2d9] bg-white px-3 py-2 text-xs focus:outline-hidden focus:border-brand"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shrink-0 hover:opacity-90 flex items-center gap-1"
                      >
                        <Plus className="size-3.5" />
                        <span>Create</span>
                      </button>
                    </form>

                    {/* Existing Playlists */}
                    <div className="space-y-2.5">
                      {(currentMode === "audio"
                        ? audioPlaylists
                        : videoPlaylists
                      ).map((pl) => (
                        <div
                          key={pl.id}
                          className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#e8e2d9] shadow-xs hover:border-brand/40 transition-all cursor-pointer"
                          onClick={() => setSelectedPlaylistDetailId(pl.id)}
                        >
                          <div className="flex items-center gap-3 min-w-0 flex-1">
                            <div className="size-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                              <ListMusic className="size-5.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="font-semibold text-xs sm:text-sm text-[#2b2520] truncate">
                                {pl.name}
                              </h4>
                              <p className="text-[11px] text-[#8c827a] mt-0.5">
                                {pl.trackNames.length}{" "}
                                {pl.trackNames.length === 1
                                  ? "track"
                                  : "tracks"}
                              </p>
                            </div>
                          </div>

                          <div
                            className="flex items-center gap-1.5"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {pl.trackNames.length > 0 && (
                              <button
                                onClick={() => {
                                  if (currentMode === "audio")
                                    playPlaylist(pl, 0);
                                  else playVideoByName(pl.trackNames[0]);
                                }}
                                className="size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs"
                                title="Play playlist"
                              >
                                <Play className="size-4 fill-current ml-0.5" />
                              </button>
                            )}
                            <button
                              onClick={() => handleDeletePlaylist(pl.id)}
                              className="p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete playlist"
                            >
                              <Trash2 className="size-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ALBUMS VIEW */}
            {pageFooterModal === "albums" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#e8e2d9]">
                  <button
                    onClick={() => {
                      if (selectedAlbumItem) setSelectedAlbumItem(null);
                      else setPageFooterModal(null);
                    }}
                    className="flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                  >
                    <ChevronLeft className="size-4" />
                    <span>
                      {selectedAlbumItem ? "Back to Albums" : "Back to Player"}
                    </span>
                  </button>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {currentMode === "audio"
                      ? "Audio Albums"
                      : "Video Collections"}
                  </span>
                </div>

                {/* Selected Album Detail View */}
                {selectedAlbumItem ? (
                  (() => {
                    if (currentMode === "audio") {
                      const alb = audioAlbums.find(
                        (a) => a.albumName === selectedAlbumItem,
                      );
                      if (!alb) return null;
                      return (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-[#e8e2d9] shadow-xs">
                            <div className="size-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                              <Disc className="size-7" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="font-bold text-sm sm:text-base text-[#2b2520] truncate">
                                {alb.albumName}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {alb.artist} • {alb.tracks.length} tracks
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                const queue: AudioItem[] = alb.tracks
                                  .map((t) => t.file || t.trending)
                                  .filter((item): item is AudioItem =>
                                    Boolean(item),
                                  );
                                if (queue.length > 0) {
                                  playFromAudioTracks(queue, 0);
                                  setPageFooterModal(null);
                                }
                              }}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90"
                            >
                              <Play className="size-3.5 fill-current" />
                              <span>Play Album</span>
                            </button>
                          </div>

                          <div className="space-y-1.5">
                            {alb.tracks.map((t, idx) => (
                              <div
                                key={`${t.title}-${idx}`}
                                className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9]"
                              >
                                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                                  <span className="text-xs font-mono text-muted-foreground w-4 text-center">
                                    {idx + 1}
                                  </span>
                                  <p className="text-xs font-medium truncate text-[#2b2520]">
                                    {t.title}
                                  </p>
                                </div>
                                <button
                                  onClick={() => {
                                    const queue: AudioItem[] = alb.tracks
                                      .map((item) => item.file || item.trending)
                                      .filter((item): item is AudioItem =>
                                        Boolean(item),
                                      );
                                    playFromAudioTracks(queue, idx);
                                    setPageFooterModal(null);
                                  }}
                                  className="size-7 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors"
                                  title="Play song"
                                >
                                  <Play className="size-3.5 fill-current ml-0.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    } else {
                      const alb = videoAlbums.find(
                        (a) => a.albumName === selectedAlbumItem,
                      );
                      if (!alb) return null;
                      return (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-[#e8e2d9] shadow-xs">
                            <div className="size-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                              <Film className="size-7" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="font-bold text-sm sm:text-base text-[#2b2520] truncate">
                                {alb.albumName}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {alb.description} • {alb.items.length} videos
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                if (alb.items.length > 0)
                                  playFromVideoTracks(alb.items, 0);
                              }}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90"
                            >
                              <Play className="size-3.5 fill-current" />
                              <span>Play</span>
                            </button>
                          </div>

                          <div className="space-y-1.5">
                            {alb.items.map((item, idx) => {
                              const title =
                                "title" in item ? item.title : item.name;
                              return (
                                <div
                                  key={`${title}-${idx}`}
                                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9]"
                                >
                                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                                    <span className="text-xs font-mono text-muted-foreground w-4 text-center">
                                      {idx + 1}
                                    </span>
                                    <p className="text-xs font-medium truncate text-[#2b2520]">
                                      {title}
                                    </p>
                                  </div>
                                  <button
                                    onClick={() =>
                                      playFromVideoTracks(alb.items, idx)
                                    }
                                    className="size-7 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors"
                                  >
                                    <Play className="size-3.5 fill-current ml-0.5" />
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                  })()
                ) : (
                  /* Albums Grid View */
                  <div className="space-y-3">
                    <p className="text-xs text-muted-foreground font-medium">
                      {currentMode === "audio"
                        ? "Albums organized by artist and uploads"
                        : "Curated video series and collections"}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {(currentMode === "audio"
                        ? audioAlbums
                        : videoAlbums
                      ).map((album) => {
                        const name = album.albumName;
                        const subtitle =
                          "artist" in album ? album.artist : album.description;
                        const count =
                          "tracks" in album
                            ? album.tracks.length
                            : album.items.length;
                        const thumb =
                          "thumbnailUrl" in album
                            ? album.thumbnailUrl
                            : undefined;

                        return (
                          <div
                            key={name}
                            onClick={() => setSelectedAlbumItem(name)}
                            className="group p-3 rounded-2xl bg-white border border-[#e8e2d9] hover:border-brand/40 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center gap-2.5"
                          >
                            <div className="size-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                              {thumb ? (
                                <img
                                  src={thumb}
                                  alt={name}
                                  className="w-full h-full object-cover"
                                />
                              ) : currentMode === "audio" ? (
                                <Disc className="size-8" />
                              ) : (
                                <Film className="size-8" />
                              )}
                            </div>
                            <div className="w-full min-w-0">
                              <h4 className="font-semibold text-xs text-[#2b2520] truncate group-hover:text-brand transition-colors">
                                {name}
                              </h4>
                              <p className="text-[10px] text-muted-foreground truncate mt-0.5">
                                {subtitle}
                              </p>
                              <span className="inline-block mt-1 text-[9px] font-semibold bg-[#f2ede4] text-[#6b6158] px-2 py-0.5 rounded-full">
                                {count} {count === 1 ? "track" : "tracks"}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Sub-Tabs: "For you" (first) and "My phone" (second) */}
            {currentMode === "audio" ? (
              <div className="flex border-b border-[#e8e2d9] mb-3 shrink-0 px-4 pt-1">
                <button
                  className={`flex-1 py-2 text-sm font-semibold transition-colors ${
                    audioTab === "foryou"
                      ? "border-b-2 border-brand text-brand"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setAudioTab("foryou")}
                >
                  For you
                </button>
                <button
                  className={`flex-1 py-2 text-sm font-semibold transition-colors ${
                    audioTab === "phone"
                      ? "border-b-2 border-brand text-brand"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setAudioTab("phone")}
                >
                  My phone{" "}
                  {localAudioTracks.length > 0 &&
                    `(${localAudioTracks.length})`}
                </button>
              </div>
            ) : (
              <div className="flex border-b border-[#e8e2d9] mb-3 shrink-0 px-4 pt-1">
                <button
                  className={`flex-1 py-2 text-sm font-semibold transition-colors ${
                    videoTab === "foryou"
                      ? "border-b-2 border-brand text-brand"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setVideoTab("foryou")}
                >
                  For you
                </button>
                <button
                  className={`flex-1 py-2 text-sm font-semibold transition-colors ${
                    videoTab === "phone"
                      ? "border-b-2 border-brand text-brand"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setVideoTab("phone")}
                >
                  My phone{" "}
                  {localVideoTracks.length > 0 &&
                    `(${localVideoTracks.length})`}
                </button>
              </div>
            )}

            {/* Tab Contents */}
            <div className="flex-1 overflow-y-auto min-h-0 space-y-4 px-4 pb-4">
              {/* AUDIO MODE CONTENT */}
              {currentMode === "audio" &&
                (audioTab === "phone" ? (
                  <div className="space-y-3 pb-6">
                    {/* Upload & Action Bar */}
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand hover:opacity-90 active:scale-[0.99] text-brand-foreground rounded-2xl text-center text-sm font-semibold cursor-pointer shadow-sm transition-all">
                        <Plus className="size-4.5" />
                        <span>
                          {localAudioTracks.length === 0
                            ? "Select audio files"
                            : "Upload / Add more songs"}
                        </span>
                        <input
                          type="file"
                          multiple
                          accept="audio/*"
                          className="hidden"
                          onChange={(e) => {
                            handleAudioFilesAdded(e.target.files);
                            e.target.value = "";
                          }}
                        />
                      </label>

                      {localAudioTracks.length > 0 && (
                        <div className="flex items-center justify-between gap-2 bg-[#f4eee6] p-2 rounded-2xl border border-[#e8e2d9]">
                          <div className="flex items-center gap-2 pl-1">
                            <button
                              onClick={toggleSelectAllAudio}
                              className="flex items-center gap-1.5 text-xs font-semibold text-[#574d46] hover:text-brand"
                            >
                              {isAllAudioSelected ? (
                                <CheckSquare className="size-4 text-brand" />
                              ) : (
                                <Square className="size-4 text-[#8c827a]" />
                              )}
                              <span>
                                {isAllAudioSelected
                                  ? "Deselect All"
                                  : "Select All"}
                              </span>
                            </button>
                            <span className="text-[11px] text-[#8c827a]">
                              ({selectedAudioCount}/{localAudioTracks.length})
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={handlePlaySelectedAudio}
                              disabled={
                                selectedAudioCount === 0 &&
                                localAudioTracks.length === 0
                              }
                              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 active:scale-95 transition-all"
                            >
                              <Play className="size-3.5 fill-current" />
                              <span>
                                Play{" "}
                                {selectedAudioCount > 0
                                  ? `Selected (${selectedAudioCount})`
                                  : "All"}
                              </span>
                            </button>

                            <button
                              onClick={clearAllAudioTracks}
                              className="p-1.5 text-[#8c827a] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors"
                              title="Clear all songs"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Audio Songs List */}
                    <div className="space-y-1.5">
                      {localAudioTracks.map((file, i) => {
                        const isSelected = selectedAudioNames.has(file.name);
                        return (
                          <div
                            key={`${file.name}-${i}`}
                            className={`flex items-center justify-between p-2.5 rounded-2xl border transition-all ${
                              isSelected
                                ? "bg-white border-brand/40 shadow-xs"
                                : "bg-white/60 border-[#e8e2d9] opacity-75"
                            }`}
                          >
                            <button
                              onClick={() => toggleSelectAudio(file.name)}
                              className="p-1.5 text-[#574d46] hover:text-brand"
                              title={
                                isSelected ? "Unselect" : "Select for playback"
                              }
                            >
                              {isSelected ? (
                                <CheckSquare className="size-4.5 text-brand" />
                              ) : (
                                <Square className="size-4.5 text-[#8c827a]" />
                              )}
                            </button>

                            <button
                              className="min-w-0 flex-1 text-left px-2"
                              onClick={() => handlePlaySingleAudio(i)}
                            >
                              <p className="font-semibold text-xs sm:text-sm text-[#2b2520] truncate">
                                {file.name}
                              </p>
                              <p className="text-[11px] text-[#8c827a] truncate mt-0.5">
                                {(file.size / (1024 * 1024)).toFixed(2)} MB •{" "}
                                {file.name.split(".").pop()?.toUpperCase()}
                              </p>
                            </button>

                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => toggleAudioFavorite(file.name)}
                                className={`p-1.5 rounded-lg transition-colors ${
                                  audioFavorites.includes(file.name)
                                    ? "text-red-500"
                                    : "text-[#a3978e] hover:text-red-500"
                                }`}
                                title={
                                  audioFavorites.includes(file.name)
                                    ? "Remove from favorites"
                                    : "Add to favorites"
                                }
                              >
                                <Heart
                                  className={`size-4 ${
                                    audioFavorites.includes(file.name)
                                      ? "fill-red-500 text-red-500"
                                      : ""
                                  }`}
                                />
                              </button>
                              <button
                                onClick={() => handlePlaySingleAudio(i)}
                                className="size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs"
                                title="Play now"
                              >
                                <Play className="size-4 fill-current ml-0.5" />
                              </button>
                              <button
                                onClick={() => removeLocalAudioTrack(i)}
                                className="p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors"
                                title="Remove from list"
                              >
                                <Trash2 className="size-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}

                      {localAudioTracks.length === 0 && (
                        <div className="text-center text-muted-foreground py-14 flex flex-col items-center justify-center gap-3">
                          <div className="size-16 rounded-full bg-[#f4eee6] flex items-center justify-center text-brand">
                            <Music className="size-8" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#3c342d]">
                              No songs uploaded yet
                            </p>
                            <p className="text-xs text-[#8c827a] mt-1 max-w-xs">
                              Tap &quot;Select audio files&quot; above to upload
                              your songs (MP3, WAV, etc.) and play them one by
                              one.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* For You (Trending Music & Cross-Platform Search) */
                  <div className="space-y-4 pb-6">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Sparkles className="size-5 text-brand" />
                      <span>Popular now</span>
                    </h3>

                    {/* Search bar for full songs across Apple Music, Spotify, iTunes, YouTube Music */}
                    <div className="space-y-3">
                      <form onSubmit={handleMusicSearch} className="flex gap-2">
                        <div className="relative flex-1">
                          <input
                            type="text"
                            placeholder={
                              selectedMusicPlatform === "all"
                                ? "Search any song, artist across all platforms..."
                                : `Search tracks on ${
                                    selectedMusicPlatform
                                      .charAt(0)
                                      .toUpperCase() +
                                    selectedMusicPlatform.slice(1)
                                  }...`
                            }
                            value={musicQuery}
                            onChange={(e) => {
                              setMusicQuery(e.target.value);
                              if (!e.target.value.trim()) {
                                setSearchResults([]);
                                setIsSearching(false);
                              }
                            }}
                            className="w-full rounded-2xl border border-[#e8e2d9] bg-white px-4 py-2.5 pl-9 text-sm shadow-inner outline-none focus:border-[#6d5b97]"
                          />
                          <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
                        </div>
                        <button
                          type="submit"
                          className="rounded-2xl bg-[#6d5b97] px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
                        >
                          {isSearching ? "Searching..." : "Search"}
                        </button>
                      </form>

                      {/* Platform Filter Pills */}
                      <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-1">
                        {[
                          { id: "all", label: "All Platforms" },
                          { id: "spotify", label: "Spotify" },
                          { id: "apple", label: "Apple Music" },
                          { id: "itunes", label: "iTunes" },
                          { id: "youtube", label: "YouTube Music" },
                          { id: "amazon", label: "Amazon Music" },
                          { id: "tidal", label: "Tidal" },
                          { id: "deezer", label: "Deezer" },
                          { id: "soundcloud", label: "SoundCloud" },
                          { id: "bandcamp", label: "Bandcamp" },
                          { id: "pandora", label: "Pandora" },
                          { id: "qobuz", label: "Qobuz" },
                          { id: "napster", label: "Napster" },
                          { id: "boomplay", label: "Boomplay" },
                          { id: "audiomack", label: "Audiomack" },
                        ].map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            data-id={p.id}
                            onClick={() =>
                              handleSelectPlatform(p.id as MusicPlatform)
                            }
                            className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-all ${
                              selectedMusicPlatform === p.id
                                ? "bg-[#6d5b97] text-white shadow-xs"
                                : "bg-white border border-[#e8e2d9] text-[#685d55] hover:bg-[#f6f2ec]"
                            }`}
                          >
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Results / List */}
                    {isSearching ? (
                      <div className="py-12 text-center text-sm text-muted-foreground">
                        Searching across music platforms...
                      </div>
                    ) : (
                      (musicQuery.trim() ? searchResults : audioTracks).map(
                        (track, index) => {
                          const listToPlay = musicQuery.trim()
                            ? searchResults
                            : audioTracks;
                          return (
                            <div
                              key={`${track.id || track.rank || "track"}-${index}`}
                              onClick={() =>
                                playFromAudioTracks(listToPlay, index)
                              }
                              className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-[#f5efe8] border border-transparent hover:border-[#e8e2d9] transition-all cursor-pointer group"
                            >
                              <span className="text-muted-foreground w-6 text-right font-mono text-sm">
                                {index + 1}
                              </span>
                              <img
                                src={track.coverUrl}
                                alt={track.title}
                                className="size-12 rounded-xl object-cover shadow-xs shrink-0"
                              />
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-1.5 mb-0.5">
                                  <p className="font-semibold text-sm truncate">
                                    {track.title}
                                  </p>
                                  {track.platform === "spotify" ? (
                                    <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-[#1DB954]/15 px-1.5 py-0.2 text-[10px] font-semibold text-[#1DB954]">
                                      <svg
                                        className="size-2.5 fill-current"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.485 17.31c-.216.353-.674.464-1.026.25-2.812-1.718-6.351-2.106-10.52-1.152-.403.093-.807-.156-.9-.56-.093-.404.156-.807.56-.9 4.568-1.043 8.487-.604 11.636 1.336.352.216.463.674.25 1.026zm1.464-3.255c-.272.443-.85.584-1.293.313-3.218-1.978-8.125-2.55-11.93-1.393-.497.15-1.026-.134-1.176-.63-.15-.497.134-1.026.63-1.176 4.35-1.32 9.776-.684 13.456 1.593.443.272.584.85.313 1.293zm.126-3.39c-3.86-2.292-10.222-2.503-13.88-1.393-.591.178-1.22-.162-1.398-.753-.178-.59.162-1.22.753-1.398 4.214-1.28 11.238-1.034 15.68 1.602.532.316.707 1.004.391 1.536-.316.532-1.004.707-1.546.406z" />
                                      </svg>
                                      Spotify
                                    </span>
                                  ) : track.platform === "apple" ? (
                                    <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-[#FC3C44]/15 px-1.5 py-0.2 text-[10px] font-semibold text-[#FC3C44]">
                                      <svg
                                        className="size-2.5 fill-current"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.93-.93.04-2.02.63-2.67 1.4-.58.67-1.09 1.76-.95 2.82 1.03.08 2.05-.53 2.68-1.29z" />
                                      </svg>
                                      Apple
                                    </span>
                                  ) : track.platformName ? (
                                    <span className="inline-flex shrink-0 items-center rounded-md bg-muted px-1.5 py-0.2 text-[10px] font-semibold text-muted-foreground">
                                      {track.platformName}
                                    </span>
                                  ) : null}
                                </div>
                                <p className="text-xs text-muted-foreground truncate">
                                  {track.artist}
                                </p>
                              </div>
                              <div className="flex items-center gap-0.5">
                                {track.externalUrl && (
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (onOpenUrl) {
                                        onOpenUrl(track.externalUrl!);
                                      } else {
                                        window.open(
                                          track.externalUrl,
                                          "_blank",
                                        );
                                      }
                                    }}
                                    title={`Open on ${track.platformName || "Platform"}`}
                                    className="p-1.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-[#eae4dc] transition-colors"
                                  >
                                    <ExternalLink className="size-3.5" />
                                  </button>
                                )}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleAudioFavorite(track.title);
                                  }}
                                  className={`p-1.5 rounded-xl transition-colors ${
                                    audioFavorites.includes(track.title)
                                      ? "text-red-500"
                                      : "text-[#a3978e] hover:text-red-500"
                                  }`}
                                  title={
                                    audioFavorites.includes(track.title)
                                      ? "Remove from favorites"
                                      : "Add to favorites"
                                  }
                                >
                                  <Heart
                                    className={`size-4 ${
                                      audioFavorites.includes(track.title)
                                        ? "fill-red-500 text-red-500"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                          );
                        },
                      )
                    )}
                  </div>
                ))}

              {/* VIDEO MODE CONTENT */}
              {currentMode === "video" &&
                (videoTab === "phone" ? (
                  <div className="space-y-3 pb-6">
                    {/* Upload & Action Bar for Video */}
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand hover:opacity-90 active:scale-[0.99] text-brand-foreground rounded-2xl text-center text-sm font-semibold cursor-pointer shadow-sm transition-all">
                        <Plus className="size-4.5" />
                        <span>
                          {localVideoTracks.length === 0
                            ? "Select video files"
                            : "Upload / Add more videos"}
                        </span>
                        <input
                          type="file"
                          multiple
                          accept="video/*"
                          className="hidden"
                          onChange={(e) => {
                            handleVideoFilesAdded(e.target.files);
                            e.target.value = "";
                          }}
                        />
                      </label>

                      {localVideoTracks.length > 0 && (
                        <div className="flex items-center justify-between gap-2 bg-[#f4eee6] p-2 rounded-2xl border border-[#e8e2d9]">
                          <div className="flex items-center gap-2 pl-1">
                            <button
                              onClick={toggleSelectAllVideo}
                              className="flex items-center gap-1.5 text-xs font-semibold text-[#574d46] hover:text-brand"
                            >
                              {isAllVideoSelected ? (
                                <CheckSquare className="size-4 text-brand" />
                              ) : (
                                <Square className="size-4 text-[#8c827a]" />
                              )}
                              <span>
                                {isAllVideoSelected
                                  ? "Deselect All"
                                  : "Select All"}
                              </span>
                            </button>
                            <span className="text-[11px] text-[#8c827a]">
                              ({selectedVideoCount}/{localVideoTracks.length})
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={handlePlaySelectedVideo}
                              disabled={
                                selectedVideoCount === 0 &&
                                localVideoTracks.length === 0
                              }
                              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 active:scale-95 transition-all"
                            >
                              <Play className="size-3.5 fill-current" />
                              <span>
                                Play{" "}
                                {selectedVideoCount > 0
                                  ? `Selected (${selectedVideoCount})`
                                  : "All"}
                              </span>
                            </button>

                            <button
                              onClick={clearAllVideoTracks}
                              className="p-1.5 text-[#8c827a] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors"
                              title="Clear all videos"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Videos List */}
                    <div className="space-y-1.5">
                      {localVideoTracks.map((file, i) => {
                        const isSelected = selectedVideoNames.has(file.name);
                        return (
                          <div
                            key={`${file.name}-${i}`}
                            className={`flex items-center justify-between p-2.5 rounded-2xl border transition-all ${
                              isSelected
                                ? "bg-white border-brand/40 shadow-xs"
                                : "bg-white/60 border-[#e8e2d9] opacity-75"
                            }`}
                          >
                            <button
                              onClick={() => toggleSelectVideo(file.name)}
                              className="p-1.5 text-[#574d46] hover:text-brand"
                              title={
                                isSelected ? "Unselect" : "Select for playback"
                              }
                            >
                              {isSelected ? (
                                <CheckSquare className="size-4.5 text-brand" />
                              ) : (
                                <Square className="size-4.5 text-[#8c827a]" />
                              )}
                            </button>

                            <button
                              className="min-w-0 flex-1 text-left px-2 flex items-center gap-3"
                              onClick={() => handlePlaySingleVideo(i)}
                            >
                              <div className="size-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                                <Film className="size-5" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="font-semibold text-xs sm:text-sm text-[#2b2520] truncate">
                                  {file.name}
                                </p>
                                <p className="text-[11px] text-[#8c827a] truncate mt-0.5">
                                  {(file.size / (1024 * 1024)).toFixed(2)} MB •{" "}
                                  {file.name.split(".").pop()?.toUpperCase()}{" "}
                                  Video
                                </p>
                              </div>
                            </button>

                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => toggleVideoFavorite(file.name)}
                                className={`p-1.5 rounded-lg transition-colors ${
                                  videoFavorites.includes(file.name)
                                    ? "text-red-500"
                                    : "text-[#a3978e] hover:text-red-500"
                                }`}
                                title={
                                  videoFavorites.includes(file.name)
                                    ? "Remove from favorites"
                                    : "Add to favorites"
                                }
                              >
                                <Heart
                                  className={`size-4 ${
                                    videoFavorites.includes(file.name)
                                      ? "fill-red-500 text-red-500"
                                      : ""
                                  }`}
                                />
                              </button>
                              <button
                                onClick={() => handlePlaySingleVideo(i)}
                                className="size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs"
                                title="Watch video"
                              >
                                <Play className="size-4 fill-current ml-0.5" />
                              </button>
                              <button
                                onClick={() => removeLocalVideoTrack(i)}
                                className="p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors"
                                title="Remove from list"
                              >
                                <Trash2 className="size-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}

                      {localVideoTracks.length === 0 && (
                        <div className="text-center text-muted-foreground py-14 flex flex-col items-center justify-center gap-3">
                          <div className="size-16 rounded-full bg-[#f4eee6] flex items-center justify-center text-brand">
                            <Video className="size-8" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#3c342d]">
                              No videos uploaded yet
                            </p>
                            <p className="text-xs text-[#8c827a] mt-1 max-w-xs">
                              Tap &quot;Select video files&quot; above to upload
                              your movies or clips (MP4, WebM, etc.) and watch
                              them here.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* For You (Trending Videos) */
                  <div className="space-y-4 pb-6">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Sparkles className="size-5 text-brand" />
                      <span>Trending Videos</span>
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {videoTracks.map((video, idx) => (
                        <div
                          key={video.id}
                          onClick={() => playFromVideoTracks(videoTracks, idx)}
                          className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 rounded-2xl bg-white border border-[#e8e2d9] hover:border-brand/40 hover:shadow-md transition-all cursor-pointer"
                        >
                          <div className="relative aspect-video w-full sm:w-40 rounded-xl overflow-hidden bg-black shrink-0">
                            <img
                              src={video.thumbnailUrl}
                              alt={video.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                              <div className="size-10 rounded-full bg-white/90 text-brand flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                <Play className="size-4.5 fill-current ml-0.5" />
                              </div>
                            </div>
                            <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white font-mono text-[10px] px-1.5 py-0.5 rounded-md backdrop-blur-xs">
                              {video.duration}
                            </span>
                            <span className="absolute top-1.5 left-1.5 bg-brand text-brand-foreground font-semibold text-[9px] px-1.5 py-0.5 rounded-md">
                              {video.quality}
                            </span>
                          </div>

                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-sm text-[#2b2520] group-hover:text-brand transition-colors line-clamp-2">
                              {video.title}
                            </h4>
                            <p className="text-xs text-[#8c827a] mt-1">
                              {video.channel}
                            </p>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleVideoFavorite(video.title);
                            }}
                            className={`p-2 rounded-xl transition-colors ${
                              videoFavorites.includes(video.title)
                                ? "text-red-500"
                                : "text-[#a3978e] hover:text-red-500"
                            }`}
                            title={
                              videoFavorites.includes(video.title)
                                ? "Remove from favorites"
                                : "Add to favorites"
                            }
                          >
                            <Heart
                              className={`size-4.5 ${
                                videoFavorites.includes(video.title)
                                  ? "fill-red-500 text-red-500"
                                  : ""
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}

        {/* Footer Navigation Bar: Favorites, Playlist, Albums */}
        <div className="shrink-0 border-t border-[#e8e2d9] bg-[#fbf9f5] px-6 py-2.5 flex items-center justify-around shadow-xs z-10">
          <button
            onClick={() =>
              setPageFooterModal((prev) =>
                prev === "favorites" ? null : "favorites",
              )
            }
            className={`flex flex-col items-center gap-1 py-1 px-4 rounded-xl transition-all ${
              pageFooterModal === "favorites"
                ? "text-brand font-bold scale-105"
                : "text-[#7b7167] hover:text-foreground active:scale-95"
            }`}
          >
            <div className="relative">
              <Heart
                className={`size-5 ${
                  currentFavoritesCount > 0 && pageFooterModal !== "favorites"
                    ? "text-red-500 fill-red-500/20"
                    : pageFooterModal === "favorites"
                      ? "fill-red-500 text-red-500"
                      : ""
                }`}
              />
              {currentFavoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-brand text-brand-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center">
                  {currentFavoritesCount}
                </span>
              )}
            </div>
            <span className="text-[11px] font-medium">Favorites</span>
          </button>

          <button
            onClick={() => {
              setSelectedPlaylistDetailId(null);
              setPageFooterModal((prev) =>
                prev === "playlists" ? null : "playlists",
              );
            }}
            className={`flex flex-col items-center gap-1 py-1 px-4 rounded-xl transition-all ${
              pageFooterModal === "playlists"
                ? "text-brand font-bold scale-105"
                : "text-[#7b7167] hover:text-foreground active:scale-95"
            }`}
          >
            <div className="relative">
              <ListMusic className="size-5" />
              {currentPlaylistsCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-brand text-brand-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center">
                  {currentPlaylistsCount}
                </span>
              )}
            </div>
            <span className="text-[11px] font-medium">Playlist</span>
          </button>

          <button
            onClick={() => {
              setSelectedAlbumItem(null);
              setPageFooterModal((prev) =>
                prev === "albums" ? null : "albums",
              );
            }}
            className={`flex flex-col items-center gap-1 py-1 px-4 rounded-xl transition-all ${
              pageFooterModal === "albums"
                ? "text-brand font-bold scale-105"
                : "text-[#7b7167] hover:text-foreground active:scale-95"
            }`}
          >
            <div className="relative">
              <Disc className="size-5" />
              {currentAlbumsCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-brand text-brand-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center">
                  {currentAlbumsCount}
                </span>
              )}
            </div>
            <span className="text-[11px] font-medium">Albums</span>
          </button>
        </div>
      </div>

      {/* Audio Player Sheet / Modal */}
      {activeAudioQueue &&
        activeAudioQueue.length > 0 &&
        playingAudioIndex !== null && (
          <AudioPlayer
            tracks={activeAudioQueue}
            initialIndex={playingAudioIndex}
            file={activeAudioQueue[playingAudioIndex]}
            onClose={() => {
              setActiveAudioQueue(null);
              setPlayingAudioIndex(null);
            }}
            onSwitchToVideo={() => {
              setActiveAudioQueue(null);
              setPlayingAudioIndex(null);
              setPlayerMode("video");
            }}
          />
        )}

      {/* Video Player Sheet / Modal */}
      {activeVideoQueue &&
        activeVideoQueue.length > 0 &&
        playingVideoIndex !== null && (
          <VideoPlayer
            tracks={activeVideoQueue}
            initialIndex={playingVideoIndex}
            file={activeVideoQueue[playingVideoIndex]}
            onClose={() => {
              setActiveVideoQueue(null);
              setPlayingVideoIndex(null);
              onCloseVideo?.();
            }}
            onSwitchToAudio={() => {
              setActiveVideoQueue(null);
              setPlayingVideoIndex(null);
              setPlayerMode("audio");
              onCloseVideo?.();
            }}
          />
        )}
    </>
  );
}
