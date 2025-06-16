// import TheFluxElements from "../flux/TheFluxComponent";

const ThePostCreate = () => {
  return (
    <>
      <div className=" pt-12 lg:pt-8 px-16 h-screen overflow-y-auto">
        {/* <!-- STORY --> */}
        <div className="relative flex space-x-2 pt-4">
          <div className="w-1/4 lg:w-1/6 h-44 rounded-xl shadow overflow-hidden flex flex-col group cursor-pointer">
            <div className="h-3/5 overflow-hidden">
              <img
                src="src/assets/images/profile.jpg"
                alt="picture"
                className="group-hover:transform group-hover:scale-110 transition-all duration-700"
              ></img>
            </div>
            <div className="flex-1 relative flex items-end justify-center pb-2 text-center leading-none dark:bg-dark-second dark:text-dark-txt">
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
                <img
                  src="src/assets/images/tuat.jpg"
                  alt="Profile picture"
                ></img>
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
        {/* <!-- END STORY --> */}

        {/* <!-- POST FORM --> */}
        <div className="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
          <div className="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4">
            <img
              src="src/assets/images/tuat.jpg"
              alt="Profile picture"
              className="w-10 h-10 rounded-full"
            ></img>
            <div className="flex-1 bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt">
              <span>What's on your mind, Tuat?</span>
            </div>
          </div>
          <div className="p-2 flex">
            <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
              <i className="bx bxs-video-plus"></i>
              <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
                Live video
              </span>
            </div>
            <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
              <i className="bx bx-images"></i>
              <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
                Live video
              </span>
            </div>
            <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500">
              <i className="bx bx-smile"></i>
              <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
                Live video
              </span>
            </div>
          </div>
        </div>
        {/* <!-- END POST FORM --> */}

        {/* <!-- ROOM --> */}
        <div className="p-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second overflow-hidden">
          <div className="flex space-x-4 relative">
            <div className="w-1/2 lg:w-3/12 flex space-x-2 items-center justify-center border-2 border-blue-200 dark:border-blue-700 rounded-full cursor-pointer">
              <i className="bx bxs-video-plus text-2xl text-purple-500"></i>
              <span className="text-sm font-semibold text-blue-500">
                Create Room
              </span>
            </div>
            <div className="relative cursor-pointer">
              <img
                src="src/assets/images/avt-3.jpg"
                alt="Profile picture"
                className="rounded-full"
              ></img>
              <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div className="relative cursor-pointer">
              <img
                src="src/assets/images/avt-4.jpg"
                alt="Profile picture"
                className="rounded-full"
              ></img>
              <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div className="relative cursor-pointer">
              <img
                src="src/assets/images/avt-5.jpg"
                alt="Profile picture"
                className="rounded-full"
              ></img>
              <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div className="relative cursor-pointer">
              <img
                src="src/assets/images/avt-2.jpg"
                alt="Profile picture"
                className="rounded-full"
              ></img>
              <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div className="relative cursor-pointer hidden sm:inline">
              <img
                src="src/assets/images/avt-3.jpg"
                alt="Profile picture"
                className="rounded-full"
              ></img>
              <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div className="relative cursor-pointer hidden sm:inline">
              <img
                src="src/assets/images/avt-4.jpg"
                alt="Profile picture"
                className="rounded-full"
              ></img>
              <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div className="relative cursor-pointer hidden sm:inline">
              <img
                src="src/assets/images/avt-5.jpg"
                alt="Profile picture"
                className="rounded-full"
              ></img>
              <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div className="relative cursor-pointer hidden sm:inline">
              <img
                src="src/assets/images/avt-7.jpg"
                alt="Profile picture"
                className="rounded-full"
              ></img>
              <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div className="relative cursor-pointer hidden sm:inline">
              <img
                src="src/assets/images/avt-3.jpg"
                alt="Profile picture"
                className="rounded-full"
              ></img>
              <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div className="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl text-gray-500 bg-white absolute right-0 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
              <i className="bx bxs-chevron-right"></i>
            </div>
          </div>
        </div>
        {/* <!-- END ROOM --> */}

        {/* <!-- LIST POST --> */}

        <div>
          {/* <!-- POST --> */}
          <div className="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">
            {/* <!-- POST AUTHOR --> */}
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex space-x-2 items-center">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-2.jpg"
                    alt="Profile picture"
                    className="w-10 h-10 rounded-full"
                  ></img>
                  <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                </div>
                <div>
                  <div className="font-semibold">Valmy M.</div>
                  <span className="text-sm text-gray-500">38m</span>
                </div>
              </div>
              <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer">
                <i className="bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>
            {/* <!-- END POST AUTHOR --> */}

            {/* <!-- POST CONTENT --> */}
            <div className="text-justify px-4 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, autem earum cum ullam odio, molestias maxime aperiam
              in id aspernatur vel ratione odit molestiae minus ipsa obcaecati
              quia! Doloribus, illum.
            </div>
            {/* <!-- END POST CONTENT --> */}

            {/* <!-- POST IMAGE --> */}
            <div className="py-2">
              <img src="src/assets/images/post.png" alt="Post image"></img>
            </div>
            {/* <!-- END POST IMAGE --> */}

            {/* <!-- POST REACT --> */}
            <div className="px-4 py-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-row-reverse items-center">
                  <span className="ml-2 text-gray-500 dark:text-dark-txt">
                    999
                  </span>
                  <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-800">
                    <i className="bx bxs-angry"></i>
                  </span>
                  <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-500">
                    <i className="bx bxs-heart-circle"></i>
                  </span>
                  <span className="rounded-full grid place-items-center text-2xl -ml-1 text-yellow-500">
                    <i className="bx bx-happy-alt"></i>
                  </span>
                </div>
                <div className="text-gray-500 dark:text-dark-txt">
                  <span>90 comments</span>
                  <span>66 Shares</span>
                </div>
              </div>
            </div>
            {/* <!-- END POST REACT --> */}

            {/* <!-- POST ACTION --> */}
            <div className="py-2 px-4">
              <div className="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1">
                <div className="flex space-x-2">
                  <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                    <i className="bx bx-like"></i>
                    <span className="text-sm font-semibold">Like</span>
                  </div>
                  <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                    <i className="bx bx-comment"></i>
                    <span className="text-sm font-semibold">Comment</span>
                  </div>
                  <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                    <i className="bx bx-share bx-flip-horizontal"></i>
                    <span className="text-sm font-semibold">Share</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END POST ACTION --> */}

            {/* <!-- LIST COMMENT --> */}
            <div className="py-2 px-4">
              {/* <!-- COMMENT --> */}
              <div className="flex space-x-2">
                <img
                  src="src/assets/images/avt-5.jpg"
                  alt="Profile picture"
                  className="w-9 h-9 rounded-full"
                ></img>
                <div>
                  <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                    <span className="font-semibold block">Valmy M.</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                  <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                    <span className="font-semibold cursor-pointer">Like</span>
                    <span>.</span>
                    <span className="font-semibold cursor-pointer">Reply</span>
                    <span>.</span>
                    10m
                  </div>
                  {/* <!-- COMMENT --> */}
                  <div className="flex space-x-2">
                    <img
                      src="src/assets/images/avt-7.jpg"
                      alt="Profile picture"
                      className="w-9 h-9 rounded-full"
                    ></img>
                    <div>
                      <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                        <span className="font-semibold block">Valmy M.</span>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </span>
                      </div>
                      <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                        <span className="font-semibold cursor-pointer">
                          Like
                        </span>
                        <span>.</span>
                        <span className="font-semibold cursor-pointer">
                          Reply
                        </span>
                        <span>.</span>
                        10m
                      </div>
                    </div>
                  </div>
                  {/* <!-- END COMMENT --> */}
                </div>
              </div>
              {/* <!-- END COMMENT --> */}
              {/* <!-- COMMENT --> */}
              <div className="flex space-x-2">
                <img
                  src="src/assets/images/avt-5.jpg"
                  alt="Profile picture"
                  className="w-9 h-9 rounded-full"
                ></img>
                <div>
                  <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                    <span className="font-semibold block">Valmy M.</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      In voluptate ipsa animi corrupti unde, voluptatibus
                      expedita suscipit, itaque, laudantium accusantium
                      aspernatur officia repellendus nihil mollitia soluta
                      distinctio praesentium nulla eos?
                    </span>
                  </div>
                  <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                    <span className="font-semibold cursor-pointer">Like</span>
                    <span>.</span>
                    <span className="font-semibold cursor-pointer">Reply</span>
                    <span>.</span>
                    10m
                  </div>
                  {/* <!-- COMMENT --> */}
                  <div className="flex space-x-2">
                    <img
                      src="src/assets/images/avt-7.jpg"
                      alt="Profile picture"
                      className="w-9 h-9 rounded-full"
                    ></img>
                    <div>
                      <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                        <span className="font-semibold block">Valmy M.</span>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </span>
                      </div>
                      <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                        <span className="font-semibold cursor-pointer">
                          Like
                        </span>
                        <span>.</span>
                        <span className="font-semibold cursor-pointer">
                          Reply
                        </span>
                        <span>.</span>
                        10m
                      </div>
                    </div>
                  </div>
                  {/* <!-- END COMMENT --> */}
                </div>
              </div>
              {/* <!-- END COMMENT --> */}
            </div>
            {/* <!-- END LIST COMMENT --> */}

            {/* <!-- COMMENT FORM --> */}
            <div className="py-2 px-4">
              <div className="flex space-x-2">
                <img
                  src="src/assets/images/tuat.jpg"
                  alt="Profile picture"
                  className="w-9 h-9 rounded-full"
                ></img>
                <div className="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    className="outline-none bg-transparent flex-1"
                  ></input>
                  <div className="flex space-x-0 items-center justify-center">
                    <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                      <i className="bx bx-smile"></i>
                    </span>
                    <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                      <i className="bx bx-camera"></i>
                    </span>
                    <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                      <i className="bx bxs-file-gif"></i>
                    </span>
                    <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                      <i className="bx bx-happy-heart-eyes"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END COMMENT FORM --> */}
          </div>
          {/* <!-- END POST --> */}

          {/* <!-- POST --> */}
          <div className="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">
            {/* <!-- POST AUTHOR --> */}
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex space-x-2 items-center">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-2.jpg"
                    alt="Profile picture"
                    className="w-10 h-10 rounded-full"
                  ></img>
                  <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                </div>
                <div>
                  <div className="font-semibold">Valmy M.</div>
                  <span className="text-sm text-gray-500">38m</span>
                </div>
              </div>
              <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer">
                <i className="bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>
            {/* <!-- END POST AUTHOR --> */}

            {/* <!-- POST CONTENT --> */}
            <div className="text-justify px-4 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, autem earum cum ullam odio, molestias maxime aperiam
              in id aspernatur vel ratione odit molestiae minus ipsa obcaecati
              quia! Doloribus, illum.
            </div>
            {/* <!-- END POST CONTENT --> */}

            {/* <!-- POST IMAGE --> */}
            <div className="py-2">
              <div className="grid grid-cols-2 gap-1">
                <img
                  src="src/assets/images/post-2 (1).jpg"
                  alt="Post image"
                ></img>
                <img
                  src="src/assets/images/post-2 (2).jpg"
                  alt="Post image"
                ></img>
                <img
                  src="src/assets/images/post-2 (3).jpg"
                  alt="Post image"
                ></img>
                <img
                  src="src/assets/images/post-2 (4).jpg"
                  alt="Post image"
                ></img>
              </div>
            </div>
            {/* <!-- END POST IMAGE --> */}

            {/* <!-- POST REACT --> */}
            <div className="px-4 py-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-row-reverse items-center">
                  <span className="ml-2 text-gray-500 dark:text-dark-txt">
                    999
                  </span>
                  <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-800">
                    <i className="bx bxs-angry"></i>
                  </span>
                  <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-500">
                    <i className="bx bxs-heart-circle"></i>
                  </span>
                  <span className="rounded-full grid place-items-center text-2xl -ml-1 text-yellow-500">
                    <i className="bx bx-happy-alt"></i>
                  </span>
                </div>
                <div className="text-gray-500 dark:text-dark-txt">
                  <span>90 comments</span>
                  <span>66 Shares</span>
                </div>
              </div>
            </div>
            {/* <!-- END POST REACT --> */}

            {/* <!-- POST ACTION --> */}
            <div className="py-2 px-4">
              <div className="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1">
                <div className="flex space-x-2">
                  <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                    <i className="bx bx-like"></i>
                    <span className="text-sm font-semibold">Like</span>
                  </div>
                  <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                    <i className="bx bx-comment"></i>
                    <span className="text-sm font-semibold">Comment</span>
                  </div>
                  <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                    <i className="bx bx-share bx-flip-horizontal"></i>
                    <span className="text-sm font-semibold">Share</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END POST ACTION --> */}

            {/* <!-- LIST COMMENT --> */}
            <div className="py-2 px-4">
              {/* <!-- COMMENT --> */}
              <div className="flex space-x-2">
                <img
                  src="src/assets/images/avt-5.jpg"
                  alt="Profile picture"
                  className="w-9 h-9 rounded-full"
                ></img>
                <div>
                  <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                    <span className="font-semibold block">Valmy M.</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                  <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                    <span className="font-semibold cursor-pointer">Like</span>
                    <span>.</span>
                    <span className="font-semibold cursor-pointer">Reply</span>
                    <span>.</span>
                    10m
                  </div>
                  {/* <!-- COMMENT --> */}
                  <div className="flex space-x-2">
                    <img
                      src="src/assets/images/avt-7.jpg"
                      alt="Profile picture"
                      className="w-9 h-9 rounded-full"
                    ></img>
                    <div>
                      <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                        <span className="font-semibold block">Valmy M.</span>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </span>
                      </div>
                      <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                        <span className="font-semibold cursor-pointer">
                          Like
                        </span>
                        <span>.</span>
                        <span className="font-semibold cursor-pointer">
                          Reply
                        </span>
                        <span>.</span>
                        10m
                      </div>
                    </div>
                  </div>
                  {/* <!-- END COMMENT --> */}
                </div>
              </div>
              {/* <!-- END COMMENT -->/ */}
              {/* <!-- COMMENT --> */}
              <div className="flex space-x-2">
                <img
                  src="src/assets/images/avt-5.jpg"
                  alt="Profile picture"
                  className="w-9 h-9 rounded-full"
                ></img>
                <div>
                  <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                    <span className="font-semibold block">Valmy M.</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      In voluptate ipsa animi corrupti unde, voluptatibus
                      expedita suscipit, itaque, laudantium accusantium
                      aspernatur officia repellendus nihil mollitia soluta
                      distinctio praesentium nulla eos?
                    </span>
                  </div>
                  <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                    <span className="font-semibold cursor-pointer">Like</span>
                    <span>.</span>
                    <span className="font-semibold cursor-pointer">Reply</span>
                    <span>.</span>
                    10m
                  </div>
                  {/* <!-- COMMENT --> */}
                  <div className="flex space-x-2">
                    <img
                      src="src/assets/images/avt-7.jpg"
                      alt="Profile picture"
                      className="w-9 h-9 rounded-full"
                    ></img>
                    <div>
                      <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                        <span className="font-semibold block">Valmy M.</span>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </span>
                      </div>
                      <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                        <span className="font-semibold cursor-pointer">
                          Like
                        </span>
                        <span>.</span>
                        <span className="font-semibold cursor-pointer">
                          Reply
                        </span>
                        <span>.</span>
                        10m
                      </div>
                    </div>
                  </div>
                  {/* <!-- END COMMENT --> */}
                </div>
              </div>
              {/* <!-- END COMMENT --> */}
            </div>
            {/* <!-- END LIST COMMENT --> */}

            {/* <!-- COMMENT FORM --> */}
            <div className="py-2 px-4">
              <div className="flex space-x-2">
                <img
                  src="src/assets/images/tuat.jpg"
                  alt="Profile picture"
                  className="w-9 h-9 rounded-full"
                ></img>
                <div className="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    className="outline-none bg-transparent flex-1"
                  ></input>
                  <div className="flex space-x-0 items-center justify-center">
                    <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                      <i className="bx bx-smile"></i>
                    </span>
                    <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                      <i className="bx bx-camera"></i>
                    </span>
                    <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                      <i className="bx bxs-file-gif"></i>
                    </span>
                    <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                      <i className="bx bx-happy-heart-eyes"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END COMMENT FORM --> */}
          </div>
          {/* <!-- END POST --> */}
        </div>

        {/* <!-- END LIST POST --> */}
      </div>
      {/* <section id="fb_create_box">
        <div className="w-full bg-white rounded-lg px-3 mt-4 shadow-md">
          <div className="flex items-center py-3 border-b w-full">
            <a href="" className="mr-2">
              <img
                src="https://picsum.photos/id/147/300/300"
                alt="alt"
                className="rounded-full ml-1 min-w-[36px] max-w-[36px]"
              />
            </a>
            <div className="flex items-center justify-start bg-[#EFF2F5] p-2 rounded-full cursor-pointer w-full">
              <div className="text-left pl-2">placeholder</div>
            </div>
          </div>
          <div className="flex items-center py-3 border-b">
            <button className="flex items-center justify-start p-1 mx-1 hover:bg-[#F2F2F2] w-full rounded-lg cursor-pointer">
              V0 <div className=" text-[#6F7275] font-bold">Live vidéo</div>
            </button>
            <button className="flex items-center justify-start p-1 mx-1 hover:bg-[#F2F2F2] w-full rounded-lg cursor-pointer">
              v1 <div className=" text-[#6F7275] font-bold">photo/vidéo</div>
            </button>
            <button className="flex items-center justify-start p-1 mx-1 hover:bg-[#F2F2F2] w-full rounded-lg cursor-pointer">
              v2{" "}
              <div className=" text-[#6F7275] font-bold">Feeling/activity</div>
            </button>
          </div>
          <input
            type="text"
            name=""
            id=""
            className="border-gray-300 focus-indigo-500 focus:ring-inset"
          />
        </div>
        <TheFluxElements></TheFluxElements>
      </section> */}
    </>
  );
};

export default ThePostCreate;
