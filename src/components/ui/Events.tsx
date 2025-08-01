// --- ui/Event.tsx ---
import React from "react";

type EventProps = {
  title: string;
  description: string;
  image: string;
  className: string;
};

export const EventLink: React.FC<EventProps> = ({
  title,
  description,
  image,
  className,
  ...props
}) => {
  return (
    <a {...props} href="#" className={className}>
      <div className="flex justify-center items-center gap-4 px-1">
        <div className="w-8 m-auto place-items-center dark:bg-dark-third dark:text-dark-txt ">
          <img src={image} alt="Profile picture" className="h-7 w-7"></img>
        </div>
        <div className="w-full">
          <span className="font-semibold">{title}</span>
          <p className="text-xs  ">{description}</p>
        </div>
      </div>
    </a>
  );
};
