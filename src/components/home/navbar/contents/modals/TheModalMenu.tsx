const TheModalMenuComponent = () => {
  return (
    <>
      <div className="px-4 py-2 text-white w-full">
        <h2 className="my-1 font-semibold text-2xl">Menu</h2>
        <div className="w-full dark:bg-gray-800 rounded-lg  dark:border-gray-700 ">
          <div className="px-4 py-3 w-full">
            <div className="w-full flex items-center space-x-1 bg-gray-700 dark:bg-dark-third rounded-full">
              <div className="relative  dark:bg-dark-third px-2 py-2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
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
              </div>
              <input
                type="text"
                placeholder="Search Facebook"
                className="outline-none bg-transparent inline-block"
              ></input>
            </div>
            <h3>Social</h3>
            <ul
              className="w-full mt-2 pb-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformationButton"
            >
              <li>
                <a
                  href="#"
                  className="w-full  py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
                >
                  <div className="flex justify-center items-center gap-4 px-1">
                    <div className="w-8 m-auto place-items-center dark:bg-dark-third dark:text-dark-txt ">
                      <img
                        src="src/assets/images/icons/icons_menu/calendar.png"
                        alt="Profile picture"
                        className=" h-7 w-7"
                      ></img>
                    </div>
                    <div className="w-full">
                      <span>Events</span>
                      <p className="text-xs  ">
                        Organize or find events and other things to do online
                        and nearby.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-full  py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
                >
                  <div className="flex justify-center items-center gap-4 px-1">
                    <div className="w-8 m-auto place-items-center dark:bg-dark-third dark:text-dark-txt ">
                      <img
                        src="src/assets/images/icons/icons_menu/friend.png"
                        alt="Profile picture"
                        className=" h-7 w-7"
                      ></img>
                    </div>
                    <div className="w-full">
                      <span>Friends</span>
                      <p className="text-xs  ">
                        Search for friends or people you may know.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-full py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
                >
                  <div className="flex justify-center items-center gap-4 px-1">
                    <div className="w-8 m-auto place-items-center dark:bg-dark-third dark:text-dark-txt ">
                      <img
                        src="src/assets/images/icons/icons_menu/groups.png"
                        alt="Profile picture"
                        className=" h-7 w-7"
                      ></img>
                    </div>
                    <div className="w-full">
                      <span>Groups</span>
                      <p className="text-xs  ">
                        Connect with people who share your interests.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-full py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
                >
                  <div className="flex justify-center items-center gap-4 px-1">
                    <div className="w-8 m-auto place-items-center dark:bg-dark-third dark:text-dark-txt ">
                      <img
                        src="src/assets/images/icons/icons_menu/news-feed.png"
                        alt="Profile picture"
                        className=" h-7 w-7"
                      ></img>
                    </div>
                    <div className="w-full">
                      <span>News Feed</span>
                      <p className="text-xs  ">
                        See relevant posts from people and Pages you follow.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-full py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
                >
                  <div className="flex justify-center items-center gap-4 px-1">
                    <div className="w-8 m-auto place-items-center dark:bg-dark-third dark:text-dark-txt ">
                      <img
                        src="src/assets/images/icons/icons_menu/feed.png"
                        alt="Profile picture"
                        className=" h-7 w-7"
                      ></img>
                    </div>
                    <div className="w-full">
                      <span>Feeds</span>
                      <p className="text-xs  ">
                        See the most recent posts from your friends, groups,
                        Pages and more.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-full py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
                >
                  <div className="flex justify-center items-center gap-4 px-1">
                    <div className="w-8 m-auto place-items-center dark:bg-dark-third dark:text-dark-txt ">
                      <img
                        src="src/assets/images/icons/icons_menu/facebook-page.png"
                        alt="Profile picture"
                        className=" h-7 w-7"
                      ></img>
                    </div>
                    <div className="w-full">
                      <span>Pages</span>
                      <p className="text-xs  ">
                        Discover and connect with businesses on Facebook.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <div className="border-b border-gray-400  my-2"></div>
            <h3>Shopping</h3>
            <ul
              className="w-full mt-2 pb-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformationButton"
            >
              <li>
                <a
                  href="#"
                  className="w-full  py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
                >
                  <div className="flex justify-center items-center gap-4 px-1">
                    <div className="w-8 m-auto place-items-center dark:bg-dark-third dark:text-dark-txt ">
                      <img
                        src="src/assets/images/icons/icons_menu/calendar.png"
                        alt="Profile picture"
                        className=" h-7 w-7"
                      ></img>
                    </div>
                    <div className="w-full">
                      <span>Events</span>
                      <p className="text-xs  ">
                        Organize or find events and other things to do online
                        and nearby.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-full  py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
                >
                  <div className="flex justify-center items-center gap-4 px-1">
                    <div className="w-8 m-auto place-items-center dark:bg-dark-third dark:text-dark-txt ">
                      <img
                        src="src/assets/images/icons/icons_menu/friend.png"
                        alt="Profile picture"
                        className=" h-7 w-7"
                      ></img>
                    </div>
                    <div className="w-full">
                      <span>Friends</span>
                      <p className="text-xs  ">
                        Search for friends or people you may know.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-full py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
                >
                  <div className="flex justify-center items-center gap-4 px-1">
                    <div className="w-8 m-auto place-items-center dark:bg-dark-third dark:text-dark-txt ">
                      <img
                        src="src/assets/images/icons/icons_menu/groups.png"
                        alt="Profile picture"
                        className=" h-7 w-7"
                      ></img>
                    </div>
                    <div className="w-full">
                      <span>Groups</span>
                      <p className="text-xs  ">
                        Connect with people who share your interests.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <div className="border-b border-gray-400  my-2"></div>
          </div>
        </div>

        <ul
          className="w-full py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformationButton"
        >
          <li>
            <a
              href="#"
              className="w-full  py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
            >
              <div className="flex justify-center items-center gap-4 px-1">
                <div className="m-auto place-items-center bg-gray-700 dark:bg-dark-third dark:text-dark-txt rounded-full p-2 cursor-pointer">
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
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
                <span> Settigs & privacy</span>
              </div>

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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-full  py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
            >
              <div className="flex justify-center items-center gap-4 px-1">
                <div className="m-auto place-items-center bg-gray-700 dark:bg-dark-third dark:text-dark-txt rounded-full p-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <span>Help & support</span>
              </div>

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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-full py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
            >
              <div className="flex justify-center items-center gap-4 px-1">
                <div className="m-auto place-items-center bg-gray-700 dark:bg-dark-third dark:text-dark-txt rounded-full p-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <span>Display & accessibility</span>
              </div>
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-full py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
            >
              <div className="flex justify-center items-center gap-4 px-1">
                <div className="m-auto place-items-center bg-gray-700 dark:bg-dark-third dark:text-dark-txt rounded-full p-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <span>
                  Give feedback <br /> CTRL B
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-full  py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
            >
              <div className="flex justify-center items-center gap-4 px-1">
                <div className="m-auto place-items-center bg-gray-700 dark:bg-dark-third dark:text-dark-txt rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                  </svg>
                </div>

                <span>Log Out</span>
              </div>
            </a>
          </li>
        </ul>
        <div className="mt-4 py-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 Valmy MABIKA. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default TheModalMenuComponent;
