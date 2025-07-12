import React from 'react';
import ErrorInput from './errorInput';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label?: string;
  errorMessage?: string;
  className?: string;
  statusLabel?: boolean;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      label,
      type = 'text',
      placeholder,
      errorMessage,
      className = '',
      statusLabel = true,
      required = false,
      ...rest
    },
    ref
  ) => {
    const baseClass =
      'block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500';

    return (
      <div className="mb-4">
        {statusLabel && (
          <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
            {label} {required && <span className="text-red-600">*</span>}
          </label>
        )}
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          ref={ref}
          required={required}
          className={`${baseClass} ${className} ${errorMessage ? 'border-red-600' : ''}`}
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage ? `${id}_error` : undefined}
          {...rest}
        />
        <ErrorInput id={id + '_error'} message={errorMessage} />
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
