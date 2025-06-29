// --- ui/Button.tsx ---
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

import clsx from 'clsx';

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        'rounded-md px-4 py-2 font-medium transition duration-150',
        {
          'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
          'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </button>
  );
};