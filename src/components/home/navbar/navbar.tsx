// import { useEffect, useState } from "react";
import Left from "./contents/left";
import Main from "./contents/main";
import Right from "./contents/right";
interface NavBarProps {
  data: any;
}
const NavBar = ({ data }: NavBarProps) => {
  return (
    <>
      <nav className="bg-white dark:bg-dark-second  h-14 w-full shadow flex items-center justify-between fixed top-0 z-10 border-b dark:border-dark-third px-4">
        <div className="w-full md:w-[25%]">
          <Left userReceive={data}></Left>
        </div>
        <div className="hidden md:w-[50%]">
          <Main userReceive={data}></Main>
        </div>
        <div className="w-full md:w-[25%]">
          <Right userReceive={data}></Right>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
