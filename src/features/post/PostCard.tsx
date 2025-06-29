type PostProps = {
  // author: User;
  author: any; // Assuming User is defined elsewhere
  content: string;
  createdAt: string;
  image?: string;
};

export const PostCard = ({ author, content, createdAt, image }: PostProps) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <div className="flex items-center gap-2 mb-2">
        {/* <Avatar src={author.avatar} /> */}
        <div>
          <h4 className="font-bold">{author.name}</h4>
          {/* <span className="text-xs text-gray-500">{formatDate(createdAt)}</span> */}
        </div>
      </div>
      <p>{content}</p>
      {image && <img src={image} className="mt-2 rounded-md" />}
      <div className="flex justify-between mt-4 text-sm text-gray-600">
        {/* <LikeButton /> */}
        <span>Commenter</span>
        <span>Partager</span>
      </div>
    </div>
  );
};
