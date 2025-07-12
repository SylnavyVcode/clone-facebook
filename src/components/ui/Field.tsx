// components/ui/Field.tsx
import React from "react";
import ErrorInput from "./errorInput";
import type { UseFormRegisterReturn } from "react-hook-form";

type FieldType =
  | "text"
  | "email"
  | "password"
  | "radio"
  | "checkbox"
  | "select";

interface Option {
  value: string;
  label: string;
}

interface FieldProps {
  id: string;
  name: string;
  label?: string;
  type?: FieldType;
  placeholder?: string;
  options?: Option[];
  errorMessage?: string;
  className?: string;
  statusLabel?: boolean;
  required?: boolean;
  size?: "sm" | "md" | "lg";
  register?: UseFormRegisterReturn;
  disabled?: boolean;
}

const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  (
    {
      id,
      name,
      label,
      type = "text",
      placeholder,
      options = [],
      errorMessage,
      className = "",
      statusLabel = true,
      required = false,
      size = "md",
      register,
      disabled = false,
    },
    ref
  ) => {
    const isSelect = type === "select";
    const isRadio = type === "radio";
    const isCheckbox = type === "checkbox";

    const sizeClass =
      size === "sm"
        ? "text-sm px-2 py-1"
        : size === "lg"
        ? "text-lg px-4 py-3"
        : "text-base px-3 py-2";

    const baseClass = `block w-full rounded-md border ${
      errorMessage ? "border-red-600" : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-blue-500 ${sizeClass}`;

    return (
      <div className="mb-4">
        {/* Label sauf pour radio/checkbox groupés */}
        {statusLabel && label && !isRadio && !isCheckbox && (
          <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
            {label} {required && <span className="text-red-600">*</span>}
          </label>
        )}

        {/* Select */}
        {isSelect && (
          <select
            id={id}
            name={name}
            required={required}
            className={`${baseClass} ${className}`}
            disabled={disabled}
            {...register}
          >
            <option value="">-- Sélectionnez --</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}

        {/* Radio / Checkbox */}
        {(isRadio || isCheckbox) && options.length > 0 && (
          <fieldset>
            {statusLabel && label && (
              <legend className="mb-1 font-medium text-gray-700">
                {label} {required && <span className="text-red-600">*</span>}
              </legend>
            )}
            <div className="space-y-2">
              {options.map((opt) => (
                <label
                  key={opt.value}
                  className="inline-flex items-center space-x-2"
                >
                  <input
                    type={type}
                    name={name}
                    value={opt.value}
                    className={errorMessage ? "border-red-600" : ""}
                    disabled={disabled}
                    {...register}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {/* Input classique */}
        {!isSelect && !isRadio && !isCheckbox && (
          <input
            id={id}
            name={name || register?.name}
            type={type}
            placeholder={placeholder}
            required={required}
            className={`${baseClass} ${className}`}
            disabled={disabled}
            {...register}
            ref={ref}
          />
        )}

        {/* Message d'erreur */}
        {errorMessage && (
          <ErrorInput id={`${id}_error`} message={errorMessage} />
        )}
      </div>
    );
  }
);

Field.displayName = "Field";
// export default Field;
export { Field };
