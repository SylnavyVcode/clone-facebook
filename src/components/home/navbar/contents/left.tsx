interface LeftProps {
  userReceive: any;
}
const Left = ({userReceive}:LeftProps) => {
  console.log("userReceive dans Left =====>>>", userReceive);
  
  return (
    <>
      <section id="TheLeftNavBar" className="w-full">
        <div className="flex items-center justify-start w-full py-2">
          <a href="#" className="mr-2  ">
            <img
              src="src/assets/images/fb-logo.png"
              alt="Facebook logo"
              className="w-[40px]"
            ></img>
          </a>
          <div className="flex items-center justify-between space-x-1">
            <div className="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-10 h-10 sm:w-11 sm:h-11 lg:h-10 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search Facebook"
                className="outline-none bg-transparent hidden xl:inline-block"
              ></input>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Left;
