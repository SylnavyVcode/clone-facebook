const TheRightAside = () => {
  return (
    <>
      <div className="pt-6 min-h-screen hidden md:flex md:justify-end  md:items-end  ">
        <div className="h-full">
          <div className="flex justify-between items-center px-4 pt-4">
            <span className="font-semibold text-gray-500 text-md dark:text-dark-txt">
              Firend requests
            </span>
            <span className="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md">
              See All
            </span>
          </div>
          <div className="p-2 border-b">
            <a
              href="#"
              className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg transition-all"
            >
              <img
                src="src/assets/images/avt.jpg"
                alt="Profile picture"
                className="w-14 h-14 rounded-full"
              ></img>
              <div className="flex-1 h-full text-[14px]">
                <div className="dark:text-dark-txt">
                  <span className="font-semibold">Sakura Hinata</span>
                  <span className="float-right">6d</span>
                </div>
                <div className="lg:flex items-center justify-center gap-3 mt-2">
                  <div className="w-full lg:w-1/2 bg-blue-500 cursor-pointer py-1 mb-1 text-center font-semibold text-white rounded-lg">
                    Confirm
                  </div>
                  <div className="w-full lg:w-1/2 bg-gray-300 cursor-pointer py-1 mb-1 text-center font-semibold text-black rounded-lg">
                    Delete
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- CONTACTS --> */}
          <div className=" flex justify-between items-center px-4 pt-4 text-gray-500 dark:text-dark-txt">
            <span className="font-semibold text-md">Contacts</span>
            <div className="flex space-x-1">
              <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                <i className="bx bx-search-alt-2"></i>
              </div>
              <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                <i className="bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>
          </div>
          <ul className="h-full p-2 text-[14px]">
            <li>
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-3.jpg"
                    alt="Friends profile picture"
                    className="rounded-full w-7 h-7"
                  ></img>
                  <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
                </div>
                <div>
                  <span className="font-semibold">Chin Chin</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-2.jpg"
                    alt="Friends profile picture"
                    className="rounded-full w-7 h-7"
                  ></img>
                  <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
                </div>
                <div>
                  <span className="font-semibold">Tuat TA</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-4.jpg"
                    alt="Friends profile picture"
                    className="rounded-full w-7 h-7"
                  ></img>
                  <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
                </div>
                <div>
                  <span className="font-semibold">Valmy M.</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-5.jpg"
                    alt="Friends profile picture"
                    className="rounded-full w-7 h-7"
                  ></img>
                  <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
                </div>
                <div>
                  <span className="font-semibold">Ivan Lorem</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-6.png"
                    alt="Friends profile picture"
                    className="rounded-full w-7 h-7"
                  ></img>
                  <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
                </div>
                <div>
                  <span className="font-semibold">Shiba san</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-4.jpg"
                    alt="Friends profile picture"
                    className="rounded-full w-7 h-7"
                  ></img>
                  <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
                </div>
                <div>
                  <span className="font-semibold">Valmy M.</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-5.jpg"
                    alt="Friends profile picture"
                    className="rounded-full w-7 h-7"
                  ></img>
                  <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
                </div>
                <div>
                  <span className="font-semibold">Ivan Lorem</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-6.png"
                    alt="Friends profile picture"
                    className="rounded-full w-7 h-7"
                  ></img>
                  <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
                </div>
                <div>
                  <span className="font-semibold">Shiba san</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-4.jpg"
                    alt="Friends profile picture"
                    className="rounded-full w-7 h-7"
                  ></img>
                  <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
                </div>
                <div>
                  <span className="font-semibold">Valmy M.</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-5.jpg"
                    alt="Friends profile picture"
                    className="rounded-full w-7 h-7"
                  ></img>
                  <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
                </div>
                <div>
                  <span className="font-semibold">Ivan Lorem</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-6.png"
                    alt="Friends profile picture"
                    className="rounded-full w-7 h-7"
                  ></img>
                  <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
                </div>
                <div>
                  <span className="font-semibold">Shiba san</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-4.jpg"
                    alt="Friends profile picture"
                    className="rounded-full w-7 h-7"
                  ></img>
                  <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
                </div>
                <div>
                  <span className="font-semibold">Valmy M.</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                <div className="relative">
                  <img
                    src="src/assets/images/avt-5.jpg"
                    alt="Friends profile picture"
                    className="rounded-full w-7 h-7"
                  ></img>
                  <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-gray-500 border"></span>
                </div>
                <div>
                  <span className="font-semibold">Valmy MABIKA</span>
                </div>
              </div>
            </li>
          </ul>
          {/* <!-- END CONTACTS --> */}
        </div>
      </div>
      {/* <div id="fb_aside_section" className="pl-4 md:block hidden">
        <div className="max-w-[340px] min-w-[258px] mx-auto pt-4">
          <div className="flex item-center justify-between border-b border-b-gray-300">
            <div className="font-semibold">Contats</div>
            <div className="flex items-center">
              <div className="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
                video1
              </div>
              <div className="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
                video2
              </div>
              <div className="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
                video3
              </div>
            </div>
          </div>
          <div className="h-[calc(100vh-115px)] overflow-auto pt-2">
            <div className="flex items-center justify-start cursor-pointer py-2 rounded-md hover:bg-[#E5E6E9]">
              <img
                src=""
                alt="alt"
                className="rounded-full ml-1 min-w-[38px]"
              />
              <div className="text-[15px] text-gray-800 font-extrabold pl-3">
                Divin Mbouka
              </div>
            </div>
            <div className="flex items-center justify-start cursor-pointer py-2 rounded-md hover:bg-[#E5E6E9]">
              <img
                src=""
                alt="alt"
                className="rounded-full ml-1 min-w-[38px]"
              />
              <div className="text-[15px] text-gray-800 font-extrabold pl-3">
                Divine Serly
              </div>
            </div>
            <div className="flex items-center justify-start cursor-pointer py-2 rounded-md hover:bg-[#E5E6E9]">
              <img
                src=""
                alt="alt"
                className="rounded-full ml-1 min-w-[38px]"
              />
              <div className="text-[15px] text-gray-800 font-extrabold pl-3">
                Tony yavich
              </div>
            </div>
            <div className="flex items-center justify-start cursor-pointer py-2 rounded-md hover:bg-[#E5E6E9]">
              <img
                src=""
                alt="alt"
                className="rounded-full ml-1 min-w-[38px]"
              />
              <div className="text-[15px] text-gray-800 font-extrabold pl-3">
                Cybelle Sarah
              </div>
            </div>
            <div className="flex items-center justify-start cursor-pointer py-2 rounded-md hover:bg-[#E5E6E9]">
              <img
                src=""
                alt="alt"
                className="rounded-full ml-1 min-w-[38px]"
              />
              <div className="text-[15px] text-gray-800 font-extrabold pl-3">
                Vie-sainte Mak
              </div>
            </div>
            <div className="flex items-center justify-start cursor-pointer py-2 rounded-md hover:bg-[#E5E6E9]">
              <img
                src=""
                alt="alt"
                className="rounded-full ml-1 min-w-[38px]"
              />
              <div className="text-[15px] text-gray-800 font-extrabold pl-3">
                Surya Aniel
              </div>
            </div>
            <div className="flex items-center justify-start cursor-pointer py-2 rounded-md hover:bg-[#E5E6E9]">
              <img
                src=""
                alt="alt"
                className="rounded-full ml-1 min-w-[38px]"
              />
              <div className="text-[15px] text-gray-800 font-extrabold pl-3">
                Davy Garcia
              </div>
            </div>
            <div className="flex items-center justify-start cursor-pointer py-2 rounded-md hover:bg-[#E5E6E9]">
              <img
                src=""
                alt="alt"
                className="rounded-full ml-1 min-w-[38px]"
              />
              <div className="text-[15px] text-gray-800 font-extrabold pl-3">
                Exaucé Massengo
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default TheRightAside;
