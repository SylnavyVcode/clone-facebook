// --- ui/Event.tsx ---
import React from "react";

type EventProps = {
  title: string;
  className: string;
  image?: string;
  addDirection?: boolean;
};
export const EventProfil: React.FC<EventProps> = ({
  title,
  className,
  image,
  addDirection,
  ...props
}) => {
  return (
    <>
      <a {...props} href="#" className={className}>
        <div className="flex justify-center items-center gap-4 px-1">
          <div className="m-auto place-items-center bg-gray-700 dark:bg-dark-third dark:text-dark-txt rounded-full p-2 cursor-pointer">
            <img src={image} alt="Profile picture" className="h-6 w-6"></img>
          </div>
          <span>{title}</span>
        </div>
        {addDirection && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
      </a>
    </>
  );
};
