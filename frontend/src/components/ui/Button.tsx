import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyle = "px-6 py-2 rounded-md font-semibold transition-all duration-200 disabled:opacity-50";
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-900",
    secondary: "bg-secondary text-white hover:bg-blue-600",
    accent: "bg-accent text-primary hover:bg-yellow-400",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}