/**
 * Created by Sylnavy V. Mabika M.
 */
import React from "react";

// type Media = {
//   type: "image";
//   url: string;
// };

type Props = {
  media: any[];
};

const ThePostImages: React.FC<Props> = ({ media }) => {
  if (media.length === 0) return null;

  if (media.length === 1) {
    return (
      <img src={media[0]} alt="" className="w-full h-[300px] object-cover" />
    );
  }
  if (media.length === 2) {
    return (
      <div className="w-full grid grid-cols-2  gap-1  h-[300px]">
        {media.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
            className="object-cover h-full w-full"
          />
        ))}
      </div>
    );
  }

  if (media.length <= 4) {
    return (
      <div className="w-full h-[500px]">
        <div className="w-full h-full grid  grid-cols-2  gap-1 ">
          <img
            src={media[0]}
            alt=""
            className={
              "col-span-1 object-cover  h-full w-full row-span-" +
              (media.length - 1)
            }
          />
          <div
            className={
              "w-full h-full gap-1 grid grid-rows-" + (media.length - 1)
            }
          >
            {media.slice(1, media.length).map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                className="object-cover h-full w-full"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Plus de 4 images
  const imagesToShow = media.slice(0, 5);
  const remaining = media.length - 5;

  return (
    <div className="mt-2 grid grid-cols-2 gap-1">
      {imagesToShow.map((item, index) => {
        const isLast = index === 4;
        return (
          <div key={index} className="relative">
            <img src={item} alt="" className="w-full h-48 object-cover" />
            {isLast && remaining > 0 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded">
                <span className="text-white text-xl font-bold">
                  +{remaining}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ThePostImages;
