import React from "react";

/**
 * Created by Sylnavy V. Mabika M.
 */

interface Option {
  label: string;
  value: string | number;
}

interface InputProps {
  id: string;
  name: string;
  label: string;
  statusLabel: boolean;
  type?: string; // "text", "email", "password", "radio", "checkbox", "select", etc.
  placeholder?: string; // Pour les champs texte
  value?: string | number | boolean;
  options?: Option[]; // Pour les champs "select" ou "radio"
  checked?: boolean; // Pour les checkbox/radio
  classInput: string; // Pour les checkbox/radio
  classLabel: string; // Pour les checkbox/radio
  ref: any;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  statusLabel,
  type = "text",
  placeholder = "",
  value,
  options = [],
  checked,
  classInput,
  classLabel,
  ref,
  required = false,
}) => {
  if (type === "select") {
    return (
      <>
        {statusLabel && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}
        <select
          id={id}
          name={name}
          ref={ref}
          required={required}
          className={classInput}
        >
          <option value="">-- Select --</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </>
    );
  }

  if (type === "radio" || type === "checkbox") {
    return (
      <>
        {statusLabel && (
          <label htmlFor={id} className={classLabel}>
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          name={name}
          value={value as string}
          checked={checked}
          ref={ref}
          required={required}
          className={classInput}
        />
      </>
    );
  }

  return (
    <>
      {statusLabel && (
        <label htmlFor={id} className={classLabel}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value as string}
        ref={ref}
        required={required}
        className={classInput}
      />
    </>
  );
};

export default Input;
