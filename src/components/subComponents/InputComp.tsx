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
  label?: string;
  type?: "text" | "email" | "password" | "radio" | "checkbox" | "select";
  placeholder?: string;
  options?: any[]; // Utilisé pour "select" et "radio"
  errorMessage?: string; // Affiche les erreurs
  className?: string; // Styles personnalisés
  statusLabel?: boolean;
  required?: boolean;
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
      label,
      type = "text",
      placeholder,
      options = [],
      statusLabel = false,
      errorMessage,
      className = "",
      required = false,
      ...rest
    },
    ref
  ) => {
    return (
      <>
        {(type == "text" || type == "email" || type == "password") && (
          <div>
            {statusLabel && (
              <label htmlFor={id} className="text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
              </label>
            )}

            <input
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              ref={ref as React.Ref<HTMLInputElement>}
              className={`border rounded-md p-2 ${className}`}
              {...rest}
            />
          </div>
        )}
        {type === "select" && (
          <select
            id={id}
            name={name}
            ref={ref as React.Ref<HTMLSelectElement>}
            className={className}
            {...rest}
          >
            <option value="">-- Sélectionner --</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}

        {type === "radio" && (
          <div className=" w-full text-sm font-medium text-gray-900 bg-white   flex justify-center items-center py-2  gap-4">
            {type === "radio" &&
              options.map((option) => (
                <div
                  key={option.value}
                  className="w-full transition duration-300 border border-gray-300 
                   outline-none hover:border-blue-500 
                   focus:border-blue-600 rounded  py-1"
                >
                  <div className="flex items-center px-2">
                    <label
                      key={option.value}
                      className="w-full py-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      <span>{option.label}</span>
                    </label>
                    <input
                      type="radio"
                      id={`select-${option.value}`}
                      className={className}
                      name={name}
                      value={option.value}
                      ref={ref as React.Ref<HTMLInputElement>}
                      {...rest}
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
      </>
    );
  }
);

Input.displayName = "Input";
export default Input;
