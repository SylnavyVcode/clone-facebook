import TheModalMenuComponent from "./modals/TheModalMenu";
import TheModalProfilComponent from "./modals/TheModalProfil";

const Right = () => {
  const handleClickProfil = () => {
    const dropdownMenu = document.getElementById("dropdownMenu");
    const dropdownProfil = document.getElementById("dropdownInformation");
    if (dropdownProfil) {
      dropdownProfil.classList.toggle("hidden");
    }
    if (dropdownMenu && !dropdownMenu.classList.contains("hidden")) {
      dropdownMenu.classList.add("hidden");
    }
  };
  const handleClickMenu = () => {
    const dropdownMenu = document.getElementById("dropdownMenu");
    const dropdownProfil = document.getElementById("dropdownInformation");
    if (dropdownMenu) {
      dropdownMenu.classList.toggle("hidden");
    }
    if (dropdownProfil && !dropdownProfil.classList.contains("hidden")) {
      dropdownProfil.classList.add("hidden");
    }
  };
  return (
    <>
      <section id="TheRightNavBar" className="w-full">
        <ul className="w-full flex mx-4 md:items-center justify-end">
          <li className="flex justify-end relative">
            <button
              type="button"
              id="dropdownMenuButton"
              onClick={handleClickMenu}
              data-dropdown-toggle="dropdownInformation"
              className="m-auto place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-2 cursor-pointer hover:bg-gray-300 relative"
            >
              <svg
                viewBox="0 0 24 24"
                width="25"
                height="25"
                fill="currentColor"
                aria-hidden="true"
                className="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
              >
                <path d="M18.5 1A1.5 1.5 0 0 0 17 2.5v3A1.5 1.5 0 0 0 18.5 7h3A1.5 1.5 0 0 0 23 5.5v-3A1.5 1.5 0 0 0 21.5 1h-3zm0 8a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 21.5 9h-3zm-16 8A1.5 1.5 0 0 0 1 18.5v3A1.5 1.5 0 0 0 2.5 23h3A1.5 1.5 0 0 0 7 21.5v-3A1.5 1.5 0 0 0 5.5 17h-3zm8 0A1.5 1.5 0 0 0 9 18.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm8 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm-16-8A1.5 1.5 0 0 0 1 10.5v3A1.5 1.5 0 0 0 2.5 15h3A1.5 1.5 0 0 0 7 13.5v-3A1.5 1.5 0 0 0 5.5 9h-3zm0-8A1.5 1.5 0 0 0 1 2.5v3A1.5 1.5 0 0 0 2.5 7h3A1.5 1.5 0 0 0 7 5.5v-3A1.5 1.5 0 0 0 5.5 1h-3zm8 0A1.5 1.5 0 0 0 9 2.5v3A1.5 1.5 0 0 0 10.5 7h3A1.5 1.5 0 0 0 15 5.5v-3A1.5 1.5 0 0 0 13.5 1h-3zm0 8A1.5 1.5 0 0 0 9 10.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 13.5 9h-3z"></path>
              </svg>
            </button>

            <div
              id="dropdownMenu"
              className="absolute hidden right-[-142px] top-12 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm  dark:bg-gray-900 dark:divide-gray-800 w-[570px] h-[600px] overflow-y-auto"
            >
              <TheModalMenuComponent></TheModalMenuComponent>
            </div>
          </li>
          <li className="m-auto place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-2 cursor-pointer hover:bg-gray-300 relative">
            <svg
              viewBox="0 0 12 12"
              width="25"
              height="25"
              fill="currentColor"
              aria-hidden="true"
              className="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
            >
              <g stroke="none" stroke-width="1" fill-rule="evenodd">
                <path
                  d="m106.868 921.248-1.892 2.925a.32.32 0 0 1-.443.094l-1.753-1.134a.2.2 0 0 0-.222.003l-1.976 1.363c-.288.199-.64-.143-.45-.437l1.892-2.925a.32.32 0 0 1 .443-.095l1.753 1.134a.2.2 0 0 0 .222-.003l1.976-1.363c.288-.198.64.144.45.438m-3.368-4.251c-3.323 0-5.83 2.432-5.83 5.658 0 1.642.652 3.128 1.834 4.186a.331.331 0 0 1 .111.234l.03 1.01a.583.583 0 0 0 .82.519l1.13-.5a.32.32 0 0 1 .22-.015c.541.148 1.108.223 1.685.223 3.323 0 5.83-2.432 5.83-5.657 0-3.226-2.507-5.658-5.83-5.658"
                  transform="translate(-450 -1073.5) translate(352.5 156.845)"
                ></path>
              </g>
            </svg>
          </li>
          <li className="m-auto place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-2 cursor-pointer hover:bg-gray-300 relative">
            <svg
              viewBox="0 0 24 24"
              width="25"
              height="25"
              fill="currentColor"
              aria-hidden="true"
              className="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
            >
              <path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path>
            </svg>
            <span className="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
              9+
            </span>
          </li>
          <li className="h-full flex mx-1 p-1 relative">
            <button
              type="button"
              id="dropdownInformationButton"
              onClick={handleClickProfil}
              data-dropdown-toggle="dropdownInformation"
              className="m-auto rounded-full hover:bg-gray-200 dark:hover:bg-dark-third relative"
            >
              <img
                src="src/assets/images/tuat.jpg"
                alt="Profile picture"
                className="rounded-full h-10 w-10"
              ></img>
              <div className="m-auto absolute bottom-0 right-0 p-1 rounded-full bg-gray-300 border-white dark:border-dark-third">
                <svg
                  className="w-2.5 h-2.5 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </div>
            </button>
            <div
              id="dropdownInformation"
              className="absolute hidden right-2 top-12 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm  dark:bg-gray-900 dark:divide-gray-800 w-[370px]"
            >
              <TheModalProfilComponent></TheModalProfilComponent>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Right;
