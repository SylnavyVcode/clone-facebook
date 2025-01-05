/**
 * Created by Sylnavy V. Mabika M.
 */
import React from "react";

interface Option {
  label: string;
  value: string | number;
}

interface InputProps {
  id: string;
  name: string;
  selectMessage?: string;
  options?: Option[];
  errorMessage?: string; 
  className?: string; 
}

const InputSelect = React.forwardRef<
  HTMLInputElement | HTMLSelectElement,
  InputProps
>(
  (
    {
      id = "input",
      name,
      options,
      errorMessage,
      className = "",
      selectMessage = "",
      ...rest
    },
    ref
  ) => {
    return (
      <>
          <select
            id={id}
            name={name}
            ref={ref as React.Ref<HTMLSelectElement>}
            className={`${
              errorMessage ? `${className} border-red-600` : `${className}`
            }`}
            {...rest}
          >
            {selectMessage && (<option value="">{selectMessage}</option>)}
            {options && options.map((option: Option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
     
      </>
    );
  }
);

export default InputSelect;
