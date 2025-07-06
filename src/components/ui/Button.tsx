/**
 * Created by Sylnavy V. Mabika M.
 */

import React from "react";
import clsx from "clsx"; // pour gérer les classes conditionnelles (optionnel mais très utile)

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  id?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  id = "",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className,
}) => {
  const baseClasses =
    "rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-100 focus:ring-blue-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  if (className) {
    return (
      <button
        id={id}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={className}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        id={id}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={clsx(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        {children}
      </button>
    );
  }
};
