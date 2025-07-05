/**
 * Created by Sylnavy V. Mabika M.
 */
import React from "react";
import ErrorInput from "./errorInput";

interface Option {
  label: string;
  value: string | number;
}

interface InputProps {
  name: string;
  options?: Option[];
  errorMessage?: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

const InputRadio = React.forwardRef<
  HTMLInputElement | HTMLSelectElement,
  InputProps
>(({ name, options, errorMessage, className = "", ...rest }, ref) => {
  return (
    <>
      <div className=" w-full font-medium text-gray-900 bg-white flex justify-center items-center gap-2">
        {options &&
          options.map((option: Option) => (
            <div
              key={option.value}
              className={`${
                errorMessage
                  ? `w-full transition duration-300 border  
                   outline-none hover:border-blue-500 
                   focus:border-blue-600 rounded py-1 border-red-600`
                  : `w-full transition duration-300 border border-gray-300 
                   outline-none hover:border-blue-500 
                   focus:border-blue-600 rounded py-1`
              }`}
            >
              <div className="flex text-sm items-center justify-between px-1">
                <label
                  key={option.value}
                  htmlFor={`select-${option.value}`}
                  className="w-full py-1 ms-2 text-gray-700 dark:text-gray-300"
                >
                  <span>{option.label}</span>
                </label>
                <input
                  type="radio"
                  id={`select-${option.value}`}
                  className={className}
                  name={name}
                  ref={ref as React.Ref<HTMLInputElement>}
                  value={option.value}
                  {...rest}
                />
              </div>
            </div>
          ))}
      </div>
       <ErrorInput id={name  + "_error"} message={errorMessage}></ErrorInput>
    </>
  );
});

export default InputRadio;
