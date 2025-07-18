// data/posts.ts (mock API)
/**
 * Created by Sylnavy V. Mabika M.
 */
export const mockPosts = [
  {
    id: "1",
    user: {
      name: "Mark Zuckerberg",
      profilePic: "https://i.pravatar.cc/150?img=3",
    },
    content: "Hello world! 👋 First post from my MetaQuest headset.",
    images: [
      "src/assets/images/post-1.jpg",
      "src/assets/images/post-1.jpg",
      "src/assets/images/post.png",
      "src/assets/images/post.png",
    ],
    videos: [],
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    user: {
      name: "Jane Doe",
      profilePic: "https://i.pravatar.cc/150?img=5",
    },
    content: "Beautiful views from our last trip 🌍✈️",
    images: ["src/assets/images/post-1.jpg"],
    videos: [],
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    user: {
      name: "Lucas Martin",
      profilePic: "https://i.pravatar.cc/150?img=7",
    },
    content: "Check this out! 🎥🔥",
    videos: ["https://www.w3schools.com/html/mov_bbb.mp4"],
    images: [],
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    user: {
      name: "Lucas Martin",
      profilePic: "https://i.pravatar.cc/150?img=7",
    },
    content: "Check this out! 🎥🔥",
    images: ["src/assets/images/post-1.jpg", "src/assets/images/post-3.jpg"],
    videos: [],
    createdAt: new Date().toISOString(),
  },
];
