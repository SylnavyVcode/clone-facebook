// import TheFluxElements from "../flux/TheFluxComponent";

import { Button } from "../../../ui/Button";

const ThePostForm = () => {
  return (
    <>
      {/* <!-- POST FORM --> */}
      <div className="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
        <div className="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4">
          <img
            src="src/assets/images/tuat.jpg"
            alt="Profile picture"
            className="w-12 h-12 rounded-full"
          ></img>
          <div className="flex-1 bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt">
            <Button className="bg-transparent w-full">
              What's on your mind, Tuat?
            </Button>
          </div>
        </div>
        <div className="p-2 flex">
          <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
            <img
              src="src/assets/images/icons/icon-camera.png"
              alt=""
              className="w-8"
            />
            <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
              Live video
            </span>
          </div>
          <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
            <img
              src="src/assets/images/icons/icon-photos.png"
              alt=""
              className="w-10"
            />
            <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
              Photo/video
            </span>
          </div>
          <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500">
            <img
              src="src/assets/images/icons/icon-smile.png"
              alt=""
              className="w-8"
            />
            <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
              Feeling/activity
            </span>
          </div>
        </div>
      </div>
      {/* <!-- END POST FORM --> */}
    </>
  );
};

export default ThePostForm;
