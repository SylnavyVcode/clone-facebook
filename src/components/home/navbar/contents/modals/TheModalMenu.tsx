import { MenuLeftData } from "../../../../../data/modal_menu_left";
import { MenuRightData } from "../../../../../data/modal_menu_right";
import { EventLink } from "../../../../ui/Events";
import { EventProfil } from "../../../../ui/EventsProfil";

const TheModalMenuComponent = () => {
  return (
    <>
      <div className="px-4 py-2 text-white w-full ">
        <h2 className="my-1 px-2 font-semibold text-2xl">Menu</h2>
        <div className="flex justify-center items-start gap-4 w-full ">
          <div className="px-2 py-3 w-[60%] dark:bg-gray-800 rounded-lg dark:border-gray-700">
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
            <h3 className="font-bold mt-2">Social</h3>
            <ul
              className="w-full pb-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformationButton"
            >
              {/* {MenuLeftData} */}
              {MenuLeftData.social.map((value) => (
                <li>
                  <EventLink
                    title={value.title}
                    image={value.image}
                    description={value.description}
                    className="w-full py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
                  ></EventLink>
                </li>
              ))}
            </ul>
            <div className="border-b border-gray-400  my-2"></div>
            <h3 className="font-bold">Shopping</h3>
            <ul
              className="w-full pb-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformationButton"
            >
              {MenuLeftData.shopping.map((value) => (
                <li>
                  <EventLink
                    title={value.title}
                    image={value.image}
                    description={value.description}
                    className="w-full py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
                  ></EventLink>
                </li>
              ))}
            </ul>
            <div className="border-b border-gray-400  my-2"></div>
            <h3 className="font-bold">Gaming</h3>
            <ul
              className="w-full pb-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformationButton"
            >
              {MenuLeftData.gaming.map((value) => (
                <li>
                  <EventLink
                    title={value.title}
                    image={value.image}
                    description={value.description}
                    className="w-full py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
                  ></EventLink>
                </li>
              ))}
            </ul>
            <div className="border-b border-gray-400  my-2"></div>
            <h3>Personnal</h3>
            <ul
              className="w-full pb-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformationButton"
            >
              {MenuLeftData.personnal.map((value) => (
                <li>
                  <EventLink
                    title={value.title}
                    image={value.image}
                    description={value.description}
                    className="w-full py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
                  ></EventLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-[35%] dark:bg-gray-800 rounded-lg dark:border-gray-700 h-[400px]">
            <ul
              className="w-full p-2 text-sm text-gray-700 dark:text-gray-200 absolute  h-full"
              aria-labelledby="dropdownInformationButton"
            >
              {MenuRightData.map((value) => (
                <li>
                  <EventProfil
                    title={value.title}
                    image={value.icon}
                    className="w-full py-1 hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between rounded-md"
                  ></EventProfil>
                </li>
              ))}
            </ul>
          </div>
        </div>

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
