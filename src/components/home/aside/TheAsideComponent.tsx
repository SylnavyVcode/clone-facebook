const TheAside = () => {
  return (
    <>
      {/* <div className="xl:w-345px lg:block hidden">
        <div className="pt-4 max-w-[320px] pr-4">
          <a
            href="/"
            className="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] p-2 rounded-md"
          >
            <img
              src=""
              alt="alt"
              className="rounded-full ml-1 min-w-[36px] max-w-[38px]"
            />
            <div className="text-[15px] text-gray-800 font-extrabold pl-3">
              Sylnavy Valmy
            </div>
          </a>
          <button className="flex items-center justify-start h-[48px] px-2 py-1.5 hover:bg-[#E5E6E9] w-full rounded-md cursor-pointer">
            btn
            <div className="text-[15px] text-gray-800 font-extrabold pl-3">
              Friends
            </div>
          </button>
          <button className="flex items-center justify-start h-[48px] px-2 py-1.5 hover:bg-[#E5E6E9] w-full rounded-md cursor-pointer">
            btn
            <div className="text-[15px] text-gray-800 font-extrabold pl-3">
              Pages
            </div>
          </button>
          <button className="flex items-center justify-start h-[48px] px-2 py-1.5 hover:bg-[#E5E6E9] w-full rounded-md cursor-pointer">
            btn
            <div className="text-[15px] text-gray-800 font-extrabold pl-3">
              Most Recent
            </div>
          </button>
          <button className="flex items-center justify-start h-[48px] px-2 py-1.5 hover:bg-[#E5E6E9] w-full rounded-md cursor-pointer">
            btn
            <div className="text-[15px] text-gray-800 font-extrabold pl-3">
              Groups
            </div>
          </button>
          <button className="flex items-center justify-start h-[48px] px-2 py-1.5 hover:bg-[#E5E6E9] w-full rounded-md cursor-pointer">
            btn
            <div className="text-[15px] text-gray-800 font-extrabold pl-3">
              Marketplace
            </div>
          </button>
          <button className="flex items-center justify-start h-[48px] px-2 py-1.5 hover:bg-[#E5E6E9] w-full rounded-md cursor-pointer">
            btn
            <div className="text-[15px] text-gray-800 font-extrabold pl-3">
              Watch
            </div>
          </button>
          <button className="flex items-center justify-start h-[48px] px-2 py-1.5 hover:bg-[#E5E6E9] w-full rounded-md cursor-pointer">
            btn
            <div className="text-[15px] text-gray-800 font-extrabold pl-3">
              Memories
            </div>
          </button>
        </div>
      </div> */}
       <div className="pt-6 pb-12 min-h-screen hidden md:block xl:block  hover:overflow-y-scroll max-w-[280px]">
            <ul className="text-[14px] ">
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                        <img src="src/assets/images/tuat.jpg" alt="Profile picture"  className="rounded-full w-7 h-7"></img>
                        <span className="font-semibold">Tran Anh Tuat</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                        <img src="src/assets/images/friends.png" alt="Profile picture"  className="rounded-full w-7 h-7"></img>
                        <span className="font-semibold">Friends</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                        <img src="src/assets/images/page.png" alt="Profile picture"  className="rounded-full w-7 h-7"></img>
                        <span className="font-semibold">Pages</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                        <img src="src/assets/images/memory.png" alt="Profile picture"  className="rounded-full w-7 h-7"></img>
                        <span className="font-semibold">Memories</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                        <img src="src/assets/images/group.png" alt="Profile picture"  className="rounded-full w-7 h-7"></img>
                        <span className="font-semibold">Groups</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                        <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
                            <i className='bx bx-chevron-down'></i>
                        </span>
                        <span className="font-semibold">See more</span>
                    </a>
                </li>
                <li className="border-b border-gray-200 dark:border-dark-third mt-6"></li>
            </ul>
            <div className="flex justify-between items-center  h-4 group">
                <span className="font-semibold text-gray-500 text-lg dark:text-dark-txt">Your shortcuts</span>
                <span className="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md hidden group-hover:inline-block">Edit</span>
            </div>
            <ul className="text-[14px]">
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                        <img src="src/assets/images/group-img-1.jpg" alt="Profile picture"  className="rounded-full w-7 h-7"></img>
                        <span className="font-semibold">Cộng đồng Front-end(HTML/CSS/JS) Việt Nam</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                        <img src="src/assets/images/group-img-2.jpg" alt="Profile picture"  className="rounded-full w-7 h-7"></img>
                        <span className="font-semibold">CNPM08_UIT_Group học tập</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                        <img src="src/assets/images/group-img-3.jpg" alt="Profile picture"  className="rounded-full w-7 h-7"></img>
                        <span className="font-semibold">Cộng đồng UI/UX Design vietnam</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                        <img src="src/assets/images/group-img-4.jpg" alt="Profile picture"  className="rounded-full w-7 h-7"></img>
                        <span className="font-semibold">Nihon Koi</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                        <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
                            <i className='bx bx-chevron-down'></i>
                        </span>
                        <span className="font-semibold">See more</span>
                    </a>
                </li>
            </ul>
            <div className=" mt-auto p-6 text-sm text-gray-500 dark:text-dark-txt">
                <a href="#">Privacy</a>
                <span>.</span>
                <a href="#">Terms</a>
                <span>.</span>
                <a href="#">Advertising</a>
                <span>.</span>
                <a href="#">Cookies</a>
                <span>.</span>
                <a href="#">Ad choices</a>
                <span>.</span>
                <a href="#">More</a>
                <span>.</span>
                <span>Facebook © 2025</span>
            </div>
        </div>
    </>
  );
};

export default TheAside;
