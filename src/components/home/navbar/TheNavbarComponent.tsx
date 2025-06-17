import TheLeftNavBar from "./contents/TheLeftNavbar";
import TheMainNavBar from "./contents/TheMainNavBar";
import TheRightNavBar from "./contents/TheRightNavbar";

const TheNavBar = () => {
  return (
    <>
      <nav className="bg-white dark:bg-dark-second  h-14 w-full shadow flex items-center justify-between fixed top-0 z-10 border-b dark:border-dark-third px-4">
        <div className="w-full md:w-[25%]">
          <TheLeftNavBar></TheLeftNavBar>
        </div>
        <div className="md:w-[50%]">
          <TheMainNavBar></TheMainNavBar>
        </div>
        <div className="w-full md:w-[25%]">
          <TheRightNavBar></TheRightNavBar>
        </div>
      </nav>
    </>
  );
};

export default TheNavBar;
