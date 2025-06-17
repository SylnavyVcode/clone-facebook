const TheStory = () => {
  return (
    <>
      <div className="relative flex space-x-2 pt-4  text-sm ">
        <div className="w-1/4 lg:w-1/6 h-44 rounded-xlshadow overflow-hidden flex flex-col group cursor-pointer">
          <div className="h-2/3 overflow-hidden">
            <img
              src="src/assets/images/profile.jpg"
              alt="picture"
              className="group-hover:transform group-hover:scale-110 transition-all duration-700"
            ></img>
          </div>
          <div className="h-1/3 relative flex items-end justify-center pb-2 text-center leading-none dark:bg-dark-second dark:text-dark-txt">
            <span className="font-semibold">
              Create a <span> Story</span>
            </span>
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white grid place-items-center text-2xl border-4 border-white dark:border-dark-second absolute -top-5 left-1/2 transform -translate-x-1/2">
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="w-1/4 lg:w-1/6 h-44 rounded-xl overflow-hidden">
          <div className="relative h-full group cursor-pointer">
            <img
              src="src/assets/images/story.jpg"
              alt="Story images"
              className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full"
            ></img>
            <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
            <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
              Your story
            </span>
            <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
              <img src="src/assets/images/tuat.jpg" alt="Profile picture"></img>
            </div>
          </div>
        </div>
        <div className="w-1/4 lg:w-1/6 h-44 rounded-xl overflow-hidden">
          <div className="relative h-full group cursor-pointer">
            <img
              src="src/assets/images/story-1.jpg"
              alt="Story images"
              className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full"
            ></img>
            <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
            <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
              Lorem
            </span>
            <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
              <img
                src="src/assets/images/avt-7.jpg"
                alt="Profile picture"
              ></img>
            </div>
          </div>
        </div>
        <div className="w-1/4 lg:w-1/6 h-44 rounded-xl overflow-hidden">
          <div className="relative h-full group cursor-pointer">
            <img
              src="src/assets/images/story-2.jpg"
              alt="Story images"
              className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full"
            ></img>
            <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
            <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
              Valmy M.
            </span>
            <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
              <img
                src="src/assets/images/avt-6.png"
                alt="Profile picture"
              ></img>
            </div>
          </div>
        </div>
        <div className="hidden lg:inline-block w-1/4 lg:w-1/6 h-44 rounded-xl overflow-hidden">
          <div className="relative h-full group cursor-pointer">
            <img
              src="src/assets/images/story-3.jpg"
              alt="Story images"
              className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full"
            ></img>
            <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
            <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
              Valmy M.
            </span>
            <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
              <img
                src="src/assets/images/avt-6.png"
                alt="Profile picture"
              ></img>
            </div>
          </div>
        </div>
        <div className="hidden lg:inline-block w-1/4 lg:w-1/6 h-44 rounded-xl overflow-hidden">
          <div className="relative h-full group cursor-pointer">
            <img
              src="src/assets/images/story-4.jpg"
              alt="Story images"
              className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full"
            ></img>
            <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
            <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
              Valmy MABIKA
            </span>
            <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
              <img
                src="src/assets/images/avt-5.jpg"
                alt="Profile picture"
              ></img>
            </div>
          </div>
        </div>
        <div className="w-12 h-12 rounded-full  lg:grid place-items-center text-2xl bg-white absolute -right-6 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow text-gray-500 dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
          <i className="bx bx-right-arrow-alt"></i>
        </div>
      </div>
    </>
  );
};

export default TheStory;
