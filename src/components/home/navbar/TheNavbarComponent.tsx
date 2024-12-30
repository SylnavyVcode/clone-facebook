const TheNavBar = () => {
  return (
    <>
      <div
        id="fb_main_nav"
        className="fixed z-50 w-full flex items-center justify-between h-[56px] bg-white shadow-xl border-b"
      >
        <div
          id="fb_nav_left"
          className="flex items-center justify-start w-[260px]"
        >
          <a href="#" className="pl-3 min-w-[55px]">
            FB
          </a>

          <div className="flex items-center justify-center bg-[#EFF2F5] p-1 rounded-full ml-2">
            <span className="p-1 w-[22px] bg-[#64676B]">R</span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Facebook"
              className="lg:block hidden border-none p-0 bg-[#EFF2F5] placeholder-[#64676B] ring-0 focus:ring-0 outline-none"
            />
          </div>
        </div>
        <div
          id="fb_nav_center"
          className="hidden lg:flex items-center justify-center ml-5 w-8/12 max-w-[600px]"
        >
          <a href="#" className="w-full">
            <div className="flex items-center justify-center h-[48px] p-1 hover:bg-[#F2F2F2] w-full rounded-lg cursor-pointer">
              <div>
                <span className="mx-auto p-1 w-[27px] bg-[#1A73E3]">R</span>
                <span className="mx-auto p-1 w-[27px] bg-[#64676B]">R</span>
              </div>
            </div>
            <div className="border-b-4 border-b-blue-400 rounded-md"></div>
          </a>
          <button className="flex items-center justify-center h-[48px] p-1 hover:bg-[#F2F2F2] w-full rounded-lg cursor-pointer">
            Btn
          </button>
          <button className="flex items-center justify-center h-[48px] p-1 hover:bg-[#F2F2F2] w-full rounded-lg cursor-pointer">
            Btn
          </button>
          <button className="flex items-center justify-center h-[48px] p-1 hover:bg-[#F2F2F2] w-full rounded-lg cursor-pointer">
            <span className="rounded-full border-[2px] border-[#64676B] p-1">
              Btn
            </span>
          </button>
          <button className="flex items-center justify-center h-[48px] p-1 hover:bg-[#F2F2F2] w-full rounded-lg cursor-pointer">
            btn
          </button>
        </div>
        <div className="flex items-center justify-end w-2/12 mr-4">
          <button className="rounded-full bg-[#E3E6EA] p-2 hover:bg-gray-300 mx-1 cursor-pointer">
            Nav
          </button>
          <button className="rounded-full bg-[#E3E6EA] p-2 hover:bg-gray-300 mx-1 cursor-pointer">
            Mess
          </button>
          <button className="rounded-full bg-[#E3E6EA] p-2 hover:bg-gray-300 mx-1 cursor-pointer">
            Not
          </button>
          <div className="flex items-center justify-center relative">
            <button className="rounded-full bg-[#E3E6EA] p-2 hover:bg-gray-300 mx-1 cursor-pointer">
              <img
                src=""
                alt=""
                className="rounded-full ml-1 min-w-[40px] cursor-pointer"
              />
            </button>
            <div className="absolute bg-white shadow-xl top-10 right-0 w-[330px] rounded-lg p-1 border mt-1">
              profil
              <a href="#">
                <div className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-lg">
                  <img
                    className="rounded-full ml-1 min-w-[40px] cursor-pointer"
                    src=""
                    alt="image"
                  />
                  <span>Sylnavy Valmy DEV</span>
                </div>
              </a>
              <a href="" className="w-full">
                <div className="flex items-center gap-3 hover:bg-gray-200 py-2.5 rounded-lg  cursor-pointer">
                  LG <span>Logout</span>
                </div>
              </a>
              <div className="text-xs font-semibold p-2 pt-3 border-t mt-1">
                privacy - Terms - Advertising - Ad Choices - Cookies - Meta 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheNavBar;
