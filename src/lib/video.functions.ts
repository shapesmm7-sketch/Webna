export type TrendingVideo = {
  id: string;
  title: string;
  channel: string;
  videoUrl: string;
  fallbackUrl?: string;
  thumbnailUrl: string;
  duration: string;
  durationSeconds: number;
  quality: string;
};

// Curated high-quality, openly licensed web video streams that are verified and accessible
export const TRENDING_VIDEOS: TrendingVideo[] = [
  {
    id: "flower-1",
    title: "Blooming Flower - Nature Macro Time-Lapse",
    channel: "Nature & Botanical Wonders",
    videoUrl: "/videos/flower.mp4",
    fallbackUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&auto=format&fit=crop&q=80",
    duration: "00:05",
    durationSeconds: 5,
    quality: "1080p HD",
  },
  {
    id: "bbb-2",
    title: "Big Buck Bunny - Animated Short Film",
    channel: "Blender Animation Studio",
    videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",
    fallbackUrl: "/videos/flower.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
    duration: "00:33",
    durationSeconds: 33,
    quality: "720p HD",
  },
  {
    id: "sintel-3",
    title: "Sintel - Fantasy Quest Film",
    channel: "Durian Open Movie Project",
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    fallbackUrl: "/videos/movie_300.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    duration: "00:52",
    durationSeconds: 52,
    quality: "720p HD",
  },
  {
    id: "movie-4",
    title: "Cinematic Motion Odyssey",
    channel: "World Cinema Arts",
    videoUrl: "/videos/movie_300.mp4",
    fallbackUrl: "https://media.w3.org/2010/05/video/movie_300.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    duration: "00:12",
    durationSeconds: 12,
    quality: "1080p HD",
  },
  {
    id: "bbb-webm-5",
    title: "Big Buck Bunny - WebM 480p Edition",
    channel: "Blender Foundation",
    videoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm",
    fallbackUrl: "/videos/flower.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
    duration: "09:56",
    durationSeconds: 596,
    quality: "480p WebM",
  },
  {
    id: "sintel-webm-6",
    title: "Sintel - 4K Remaster Showcase",
    channel: "Open Movie Project",
    videoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.480p.vp9.webm",
    fallbackUrl: "/videos/movie_300.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    duration: "14:48",
    durationSeconds: 888,
    quality: "480p WebM",
  },
];

export async function getTrendingVideos(): Promise<TrendingVideo[]> {
  return TRENDING_VIDEOS;
}
