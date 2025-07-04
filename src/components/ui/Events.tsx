// --- ui/Event.tsx ---
import React from "react";

type EventProps = {
  title: string;
  description: string;
  imgSource: string;
};

export const EventData: React.FC<EventProps> = ({
  title,
  description,
  imgSource,
  ...props
}) => {
  return (
    <a
      {...props}
      href="#"
      className="w-full py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
    >
      <div className="flex justify-center items-center gap-4 px-1">
        <div className="w-8 m-auto place-items-center dark:bg-dark-third dark:text-dark-txt ">
          <img src={imgSource} alt="Profile picture" className="h-7 w-7"></img>
        </div>
        <div className="w-full">
          <span>{title}</span>
          <p className="text-xs  ">{description}</p>
        </div>
      </div>
    </a>
  );
};
