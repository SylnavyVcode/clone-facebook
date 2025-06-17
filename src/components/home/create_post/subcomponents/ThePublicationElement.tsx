// import TheFluxElements from "../flux/TheFluxComponent";

const ThePosterView = () => {
  return (
    <>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            autem earum cum ullam odio, molestias maxime aperiam in id
            aspernatur vel ratione odit molestiae minus ipsa obcaecati quia!
            Doloribus, illum.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                      <span className="font-semibold cursor-pointer">Like</span>
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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                    voluptate ipsa animi corrupti unde, voluptatibus expedita
                    suscipit, itaque, laudantium accusantium aspernatur officia
                    repellendus nihil mollitia soluta distinctio praesentium
                    nulla eos?
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                      <span className="font-semibold cursor-pointer">Like</span>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            autem earum cum ullam odio, molestias maxime aperiam in id
            aspernatur vel ratione odit molestiae minus ipsa obcaecati quia!
            Doloribus, illum.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                      <span className="font-semibold cursor-pointer">Like</span>
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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                    voluptate ipsa animi corrupti unde, voluptatibus expedita
                    suscipit, itaque, laudantium accusantium aspernatur officia
                    repellendus nihil mollitia soluta distinctio praesentium
                    nulla eos?
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                      <span className="font-semibold cursor-pointer">Like</span>
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
    </>
  );
};

export default ThePosterView;
