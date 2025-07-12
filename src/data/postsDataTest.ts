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
    media: [
      {
        type: "image",
        url: "src/assets/images/post-1.jpg",
      },
      {
        type: "image",
        url: "src/assets/images/post-1.jpg",
      },
      {
        type: "image",
        url: "src/assets/images/post.png",
      },
      {
        type: "image",
        url: "src/assets/images/post.png",
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    user: {
      name: "Jane Doe",
      profilePic: "https://i.pravatar.cc/150?img=5",
    },
    content: "Beautiful views from our last trip 🌍✈️",
    media: [
      {
        type: "image",
        url: "src/assets/images/post-1.jpg",
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    user: {
      name: "Lucas Martin",
      profilePic: "https://i.pravatar.cc/150?img=7",
    },
    content: "Check this out! 🎥🔥",
    media: [
      { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    user: {
      name: "Lucas Martin",
      profilePic: "https://i.pravatar.cc/150?img=7",
    },
    content: "Check this out! 🎥🔥",
    media: [
      { type: "image", url: "src/assets/images/post-1.jpg" },
      { type: "image", url: "src/assets/images/post-3.jpg" },
    ],
    createdAt: new Date().toISOString(),
  },
];
