/**
 * Created by Sylnavy V. Mabika M.
 */
import React from "react";

interface ButtonProps {
  id: string;
  title:string;
  type: "button" | "reset" | "submit" | undefined;
  className: string;
}

const ButtonElement = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ id="", type="submit", className, title }) => {
    return (
      <>
        <div className="pt-2 my-2 flex justify-center">
          <button
            id={id}
            type={type}
            className={className}
          >
            {title}
          </button>
        </div>
      </>
    );
  }
);

export default ButtonElement;
