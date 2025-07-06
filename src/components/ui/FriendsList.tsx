// components/FriendList.tsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

import { ListsFriends } from "../../data/listFriends";

// type Friend = {
//   id: number;
//   name: string;
//   avatarUrl: string;
//   online: boolean;
// };

const FriendList: React.FC = () => {
  //   const [friends, setFriends] = useState<Friend[]>([]);

  //   useEffect(() => {
  //     axios.get("http://localhost:3000/friends").then((res) => {
  //       setFriends(res.data);
  //     });
  //   }, []);

  return (
    <ul className="h-full p-2 text-[14px]">
      {ListsFriends.map((friend) => (
        <li key={friend.id}>
          <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
            <div className="relative">
              <img
                src={friend.avatarUrl}
                alt={`${friend.name} profile`}
                className="rounded-full w-7 h-7 object-cover"
              />
              {friend.online && (
                <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
              )}
            </div>
            <div>
              <span className="font-semibold">{friend.name}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
