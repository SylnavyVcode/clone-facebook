/**
 * Created by Sylnavy V. Mabika M.
 */
import React from "react";

interface InputProps {
  id: string;
  name: string;
  label?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  errorMessage?: string; // Affiche les erreurs
  className?: string; // Styles personnalisés
  statusLabel?: boolean;
  required?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any; // Pour prendre en charge les props supplémentaires (ex: {...register()})
}

const Input = React.forwardRef<
  HTMLInputElement | HTMLSelectElement,
  InputProps
>(
  (
    {
      id = "input",
      name,
      type = "text",
      placeholder,
      errorMessage,
      className = "",
      ...rest
    },
    ref
  ) => {
    return (
      <>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          ref={ref as React.Ref<HTMLInputElement>}
          className={`${
            errorMessage ? `${className} border-red-600` : `${className}`
          }`}
          {...rest}
        />
      </>
    );
  }
);

Input.displayName = "Input";
export default Input;
