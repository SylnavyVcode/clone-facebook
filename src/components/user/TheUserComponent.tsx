import ThePostCreate from "../home/create_post/ThePostComponent";
import TheNavBar from "../home/navbar/TheNavbarComponent";


const UserComponent = () => {
  return (
    <>
      <TheNavBar></TheNavBar>
      <div className="w-full min-h-[100vh] pb-20 bg-[#F1F2F5]">
        <div className="w-full bg-white">
          <div className="max-w-[1100px] pt-[56px] mx-auto pb-1">
            <img src="https://picsum.photos/id/147/300/300" alt="alt" className="rounded-b-xl" />
            <div
              id="fb_infos_profil"
              className="flex md:flex-row flex-col items-center justify-between px-4"
            >
              <div className="flex md:flex-row flex-col gap-4 md:-mt-6 -mt-16 items-center ">
                <div className="relative">
                  <img
                    src="https://picsum.photos/id/147/300/300"
                    alt="alt"
                    className="rounded-full w-[165px] border-white border-4"
                  />
                  <button className="absolute right-0 top-[100px] bg-gray-200 hover:bg-gray-300 p-1.5 rounded-full cursor-pointer">
                    <span>icon</span>
                  </button>
                </div>
                <div className="md:mt-4 text-center md:text-left -mt-3">
                  <div className="text-[28px] font-extrabold pt-1">
                    Sylnavy Valmy
                  </div>
                  <div className="text-[17px] font-bold text-gray-600 mb-1.5 text-center md:text-left">
                    530 friends
                  </div>
                  <div className="flex md:justify-start justify-center md:-ml-1">
                    <img
                      src="https://picsum.photos/id/147/300/300"
                      alt="img"
                      className="rounded-full -ml-1 z-10 w-[40px]  h-[40px] border-white border-2"
                    />
                    <img
                      src="https://picsum.photos/id/147/300/300"
                      alt="img"
                      className="rounded-full -ml-3 z-9 w-[40px]  h-[40px] border-white border-2"
                    />
                    <img
                      src="https://picsum.photos/id/147/300/300"
                      alt="img"
                      className="rounded-full -ml-3 z-8 w-[40px]  h-[40px] border-white border-2"
                    />
                    <img
                      src="https://picsum.photos/id/147/300/300"
                      alt="img"
                      className="rounded-full -ml-3 z-7 w-[40px]  h-[40px] border-white border-2"
                    />
                    <img
                      src="https://picsum.photos/id/147/300/300"
                      alt="img"
                      className="rounded-full -ml-3 z-6 w-[40px]  h-[40px] border-white border-2"
                    />
                  </div>
                </div>
              </div>
              <a
                href="/"
                className="flex justify-center w-7/12 md:w-[160px] items-baseline md:my-0 my-4 bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer"
              >
                <button className="flex items-center px-5 py-2 font-bold">
                  <span className="-ml-2 mr-1">icon</span>Editer profile
                </button>
              </a>
            </div>
            <div className="flex  border-t h-[50px] py-[4px]">
              <button className="w-[85px]">
                <div className="flex items-center text-[15px] text-blue-500 hover:bg-[#F2F2F2] w-full font-bold rounded-lg cursor-pointer">
                  Posts
                </div>
                <div className="border-b-4 border-b-blue-400 rounded-md"></div>
              </button>
              <button className="flex items-center justify-center text-[15px]  hover:bg-[#F2F2F2] w-[85px] font-bold rounded-lg cursor-pointer mx-1 p-1">
                About
              </button>
              <button className="flex items-center justify-center text-[15px]  hover:bg-[#F2F2F2] w-[85px] font-bold rounded-lg cursor-pointer mx-1 p-1">
                Friends
              </button>
              <button className="flex items-center justify-center text-[15px]  hover:bg-[#F2F2F2] w-[85px] font-bold rounded-lg cursor-pointer mx-1 p-1">
                Videos
              </button>
              <button className="flex items-center justify-center text-[15px]  hover:bg-[#F2F2F2] w-[85px] font-bold rounded-lg cursor-pointer mx-1 p-1">
                Photos
              </button>
              <button className="flex items-center justify-center text-[15px]  hover:bg-[#F2F2F2] w-[85px] font-bold rounded-lg cursor-pointer mx-1 p-1">
                Check-ins
              </button>
            </div>
          </div>
        </div>
        <div className="flex-cols md:flex w-full justify-between h-[calc(100%-56px)] md:px-0 px-2 mx-auto">
          <div
            id="fb_section_aside_left"
            className="w-full md:w-5/12 mt-4 mr-4"
          >
            <div className="bg-white p-3 rounded-lg shadow-lg">
              <div className="font-extrabld pb-2 text-xl">Intro</div>
              <div className="pb-5">
                <button className="w-full bg-gray-200 hover:bg-gray-300 rounded-lg p-2 font-bold">
                  Add bio
                </button>
              </div>
              <div className="pb-5">
                <button className="w-full bg-gray-200 hover:bg-gray-300 rounded-lg p-2 font-bold">
                  Edit details
                </button>
              </div>
              <div className="pb-5">
                <button className="w-full bg-gray-200 hover:bg-gray-300 rounded-lg p-2 font-bold">
                  Add hobbies
                </button>
              </div>
              <div className="pb-5">
                <button className="w-full bg-gray-200 hover:bg-gray-300 rounded-lg p-2 font-bold">
                  Add feature
                </button>
              </div>
            </div>
            <div className="bg-white p-3 mt-4 rounded-lg shadow-lg">
              <div className="font-extrabld pb-2 text-xl">Photos</div>
              <div className="flex flex-wrap items-center justify-start w-full">
                <span className="w-1/3">
                  <img
                    src="https://picsum.photos/id/78/300/300"
                    alt=""
                    className="aspect-square object-cover p-1 rounded-lg cursor-pointer"
                  />
                  <img
                    src="https://picsum.photos/id/78/300/300"
                    alt=""
                    className="aspect-square object-cover p-1 rounded-lg cursor-pointer"
                  />
                  <img
                    src="https://picsum.photos/id/78/300/300"
                    alt=""
                    className="aspect-square object-cover p-1 rounded-lg cursor-pointer"
                  />
                  <img
                    src="https://picsum.photos/id/78/300/300"
                    alt=""
                    className="aspect-square object-cover p-1 rounded-lg cursor-pointer"
                  />
                  <img
                    src="https://picsum.photos/id/78/300/300"
                    alt=""
                    className="aspect-square object-cover p-1 rounded-lg cursor-pointer"
                  />
                  <img
                    src="https://picsum.photos/id/78/300/300"
                    alt=""
                    className="aspect-square object-cover p-1 rounded-lg cursor-pointer"
                  />
                  <img
                    src="https://picsum.photos/id/78/300/300"
                    alt=""
                    className="aspect-square object-cover p-1 rounded-lg cursor-pointer"
                  />
                  <img
                    src="https://picsum.photos/id/78/300/300"
                    alt=""
                    className="aspect-square object-cover p-1 rounded-lg cursor-pointer"
                  />
                </span>
              </div>
            </div>
          </div>
          <div id="fb_posts_section" className="w-full md:w-7/12 overflow-auto">
          <ThePostCreate></ThePostCreate>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserComponent;
