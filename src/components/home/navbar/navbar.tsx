import Left from "./contents/left";
import Main from "./contents/main";
import Right from "./contents/right";


const NavBar = () => {
  return (
    <>
      <nav className="bg-white dark:bg-dark-second  h-14 w-full shadow flex items-center justify-between fixed top-0 z-10 border-b dark:border-dark-third px-4">
        <div className="w-full md:w-[25%]">
          <Left></Left>
        </div>
        <div className="hidden md:w-[50%]">
          <Main></Main>
        </div>
        <div className="w-full md:w-[25%]">
          <Right></Right>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
