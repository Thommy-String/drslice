// src/components/Button.jsx
import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl cursor-pointer';
  
  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    secondary: 'bg-green-100 text-green-800 hover:bg-green-200 focus:ring-green-500',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500',
    ghost: 'text-green-600 hover:bg-green-50 focus:ring-green-500',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
