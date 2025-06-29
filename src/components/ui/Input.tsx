
// --- ui/Input.tsx ---
import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type?: string;
};

export const Input: React.FC<InputProps> = ({ label, type = 'text', ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-gray-600">{label}</label>}
      <input
        type={type}
        className="border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
};