const HomeComponent = () => {
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
      <div className="fixed w-full h-[100%] bg-[#F1F2F5]">
        <div className="grid grid-rows-3 grid-flow-col w-full mx-auto max-w-[1600px] mt-[56px] h-[calc(100%-56px)] px-4">
          <div className="xl:w-345px lg:block hidden">
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
          </div>
          <div
            id="fb_posts_section"
            className="row-span-6 max-w-[600px] lg:mx-0 mx-auto overflow-auto"
          >
            <section id="fb_create_box">
              <div className="w-full bg-white rounded-lg px-3 mt-4 shadow-md">
                <div className="flex items-center py-3 border-b">
                  <a href="" className="mr-2">
                    <img
                      src="#"
                      alt="alt"
                      className="rounded-full ml-1 min-w-[36px] max-w-[36px]"
                    />
                  </a>
                  <div className="flex items-center justify-start bg-[#EFF2F5] p-2 rounded-full cursor-pointer">
                    <div className="text-left pl-2">placeholder</div>
                  </div>
                </div>
                <div className="flex items-center py-3 border-b">
                  <button className="flex items-center justify-start p-1 mx-1 hover:bg-[#F2F2F2] w-full rounded-lg cursor-pointer">
                    V0{" "}
                    <div className=" text-[#6F7275] font-bold">Live vidéo</div>
                  </button>
                  <button className="flex items-center justify-start p-1 mx-1 hover:bg-[#F2F2F2] w-full rounded-lg cursor-pointer">
                    v1{" "}
                    <div className=" text-[#6F7275] font-bold">photo/vidéo</div>
                  </button>
                  <button className="flex items-center justify-start p-1 mx-1 hover:bg-[#F2F2F2] w-full rounded-lg cursor-pointer">
                    v2{" "}
                    <div className=" text-[#6F7275] font-bold">
                      Feeling/activity
                    </div>
                  </button>
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-gray-300 focus-indigo-500 focus:ring-inset"
                />
              </div>
              <div
                id="fb_posts_elements"
                className="bg-white rounded-lg my-4 shadow-md"
              >
                <div className="flex items-center p-3">
                  <button className="mr-2">
                    <img
                      className="rounded-full min-w-[42px] maw-h-[42px]"
                      src=""
                      alt="alt"
                    />
                  </button>
                  <div className="flex items-center justify-between p-2  w-full rounded-full">
                    <div className="">
                      <div className="text-[15px]  font-extrabold ">
                        Sylnavy Valmy
                      </div>
                      <div className="text-xs flex items-center text-gray-600 ">
                        14h icon
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button className="rounded-full p-1.5 cursor-pointer hover:bg-[#F2F2F2]">
                        icon
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-5 pb-2 text-[17px] font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  optio nihil id earum suscipit accusantium deleniti facilis eum
                  culpa saepe possimus laudantium soluta maiores impedit quis
                  placeat ducimus voluptates praesentium ad, voluptatibus
                  veritatis?
                  <img
                    src="https://picsum.photos/id/189/800/800"
                    alt="alt"
                    className="mx-auto cursor-pointer"
                  />
                </div>
                <div id="fb_likes_elements" className="px-5">
                  <div className="flex items-center justify-between py-3 border-b">
                    icon
                    <div className="text-sm text-gray-600 font-semibold">
                      10 comments
                    </div>
                  </div>
                </div>
                <div id="fb_comments" className="px-3">
                  <div
                    id="fb_create_comments"
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center w-full">
                      <a href="/" className="mr-2">
                        <img
                          src="https://picsum.photos/id/189/800/800"
                          alt="alt"
                          className="rounded-full ml-1 min-w-[36px] max-h-[36px]"
                        />
                      </a>
                      <div className="flex items-center p-2 justify-center bg-[#EFF2F5] rounded-full w-full">
                        <input
                          type="text"
                          className="w-full mx-1 border-none p-0 text-sm  bg-[#EFF2F5] placeholder-[#64676B] ring-0 focus:ring-0 outline-none"
                          placeholder="white a public comment..."
                        />
                        <button
                          type="button"
                          className="flex items-center text-sm pl-2 pr-3.5 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold"
                        >
                          icon Send
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    id="fb_comments"
                    className="max-h-[120px] overflow-auto pb-2 px-4"
                  >
                    <div className="flex items-center justify-between pb-2">
                      <div className="flex items-center w-full mb-1">
                        <a href="/" className="mr-2">
                          <img
                            src="https://picsum.photos/id/189/800/800"
                            alt="alt"
                            className="rounded-full ml-1 min-w-[36px] max-h-[36px]"
                          />
                        </a>
                        <div className="flex items-center w-full">
                          <div className="flex items-center text-xs p-2 justify-center bg-[#EFF2F5] rounded-lg w-full">
                            This is a comment
                          </div>
                          <button className="rounded-full p-1.5 ml-2 cursor-pointer hover:bg-[#F2F2F2]">
                            del
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="fb_posts_elements"
                className="bg-white rounded-lg my-4 shadow-md"
              >
                <div className="flex items-center p-3">
                  <button className="mr-2">
                    <img
                      className="rounded-full min-w-[42px] maw-h-[42px]"
                      src=""
                      alt="alt"
                    />
                  </button>
                  <div className="flex items-center justify-between p-2  w-full rounded-full">
                    <div className="">
                      <div className="text-[15px]  font-extrabold ">
                        Sylnavy Valmy
                      </div>
                      <div className="text-xs flex items-center text-gray-600 ">
                        14h icon
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button className="rounded-full p-1.5 cursor-pointer hover:bg-[#F2F2F2]">
                        icon
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-5 pb-2 text-[17px] font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  optio nihil id earum suscipit accusantium deleniti facilis eum
                  culpa saepe possimus laudantium soluta maiores impedit quis
                  placeat ducimus voluptates praesentium ad, voluptatibus
                  veritatis?
                  <img
                    src="https://picsum.photos/id/189/800/800"
                    alt="alt"
                    className="mx-auto cursor-pointer"
                  />
                </div>
                <div id="fb_likes_elements" className="px-5">
                  <div className="flex items-center justify-between py-3 border-b">
                    icon
                    <div className="text-sm text-gray-600 font-semibold">
                      10 comments
                    </div>
                  </div>
                </div>
                <div id="fb_comments" className="px-3">
                  <div
                    id="fb_create_comments"
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center w-full">
                      <a href="/" className="mr-2">
                        <img
                          src="https://picsum.photos/id/189/800/800"
                          alt="alt"
                          className="rounded-full ml-1 min-w-[36px] max-h-[36px]"
                        />
                      </a>
                      <div className="flex items-center p-2 justify-center bg-[#EFF2F5] rounded-full w-full">
                        <input
                          type="text"
                          className="w-full mx-1 border-none p-0 text-sm  bg-[#EFF2F5] placeholder-[#64676B] ring-0 focus:ring-0 outline-none"
                          placeholder="white a public comment..."
                        />
                        <button
                          type="button"
                          className="flex items-center text-sm pl-2 pr-3.5 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold"
                        >
                          icon Send
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    id="fb_comments"
                    className="max-h-[120px] overflow-auto pb-2 px-4"
                  >
                    <div className="flex items-center justify-between pb-2">
                      <div className="flex items-center w-full mb-1">
                        <a href="/" className="mr-2">
                          <img
                            src="https://picsum.photos/id/189/800/800"
                            alt="alt"
                            className="rounded-full ml-1 min-w-[36px] max-h-[36px]"
                          />
                        </a>
                        <div className="flex items-center w-full">
                          <div className="flex items-center text-xs p-2 justify-center bg-[#EFF2F5] rounded-lg w-full">
                            This is a comment
                          </div>
                          <button className="rounded-full p-1.5 ml-2 cursor-pointer hover:bg-[#F2F2F2]">
                            del
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="fb_posts_elements"
                className="bg-white rounded-lg my-4 shadow-md"
              >
                <div className="flex items-center p-3">
                  <button className="mr-2">
                    <img
                      className="rounded-full min-w-[42px] maw-h-[42px]"
                      src=""
                      alt="alt"
                    />
                  </button>
                  <div className="flex items-center justify-between p-2  w-full rounded-full">
                    <div className="">
                      <div className="text-[15px]  font-extrabold ">
                        Sylnavy Valmy
                      </div>
                      <div className="text-xs flex items-center text-gray-600 ">
                        14h icon
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button className="rounded-full p-1.5 cursor-pointer hover:bg-[#F2F2F2]">
                        icon
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-5 pb-2 text-[17px] font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  optio nihil id earum suscipit accusantium deleniti facilis eum
                  culpa saepe possimus laudantium soluta maiores impedit quis
                  placeat ducimus voluptates praesentium ad, voluptatibus
                  veritatis?
                  <img
                    src="https://picsum.photos/id/189/800/800"
                    alt="alt"
                    className="mx-auto cursor-pointer"
                  />
                </div>
                <div id="fb_likes_elements" className="px-5">
                  <div className="flex items-center justify-between py-3 border-b">
                    icon
                    <div className="text-sm text-gray-600 font-semibold">
                      10 comments
                    </div>
                  </div>
                </div>
                <div id="fb_comments" className="px-3">
                  <div
                    id="fb_create_comments"
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center w-full">
                      <a href="/" className="mr-2">
                        <img
                          src="https://picsum.photos/id/189/800/800"
                          alt="alt"
                          className="rounded-full ml-1 min-w-[36px] max-h-[36px]"
                        />
                      </a>
                      <div className="flex items-center p-2 justify-center bg-[#EFF2F5] rounded-full w-full">
                        <input
                          type="text"
                          className="w-full mx-1 border-none p-0 text-sm  bg-[#EFF2F5] placeholder-[#64676B] ring-0 focus:ring-0 outline-none"
                          placeholder="white a public comment..."
                        />
                        <button
                          type="button"
                          className="flex items-center text-sm pl-2 pr-3.5 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold"
                        >
                          icon Send
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    id="fb_comments"
                    className="max-h-[120px] overflow-auto pb-2 px-4"
                  >
                    <div className="flex items-center justify-between pb-2">
                      <div className="flex items-center w-full mb-1">
                        <a href="/" className="mr-2">
                          <img
                            src="https://picsum.photos/id/189/800/800"
                            alt="alt"
                            className="rounded-full ml-1 min-w-[36px] max-h-[36px]"
                          />
                        </a>
                        <div className="flex items-center w-full">
                          <div className="flex items-center text-xs p-2 justify-center bg-[#EFF2F5] rounded-lg w-full">
                            This is a comment
                          </div>
                          <button className="rounded-full p-1.5 ml-2 cursor-pointer hover:bg-[#F2F2F2]">
                            del
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div id="fb_aside_section" className="pl-4 md:block hidden">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
