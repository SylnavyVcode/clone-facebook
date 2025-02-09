/**
 * Created by Sylnavy V. Mabika M.
 */
import React from "react";
import Loader from "./TheLoader";

interface ButtonProps {
  id: string;
  title:string;
  load?:boolean;
  type: "button" | "reset" | "submit" | undefined;
  className: string;
}

const ButtonElement = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ id="", type="submit", className, title, load }) => {
    return (
      <>
        {/* <div className="pt-2 my-2 flex justify-center"> */}
        <div className=" flex justify-center">
          <button
            id={id}
            type={type}
            className={className + " flex justify-center items-center gap-x-2"} 
          >
            {title}
            {load && <Loader></Loader>}
          </button>
        </div>
      </>
    );
  }
);

export default ButtonElement;
