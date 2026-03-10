// src/components/Button.jsx
import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group';
  
  const variants = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-600/30 shadow-lg shadow-emerald-600/10 focus:ring-emerald-500 border border-emerald-500/20 relative overflow-hidden',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/30 shadow-lg shadow-slate-900/10 focus:ring-slate-950',
    outline: 'border-2 border-slate-200 text-slate-900 hover:border-emerald-600 hover:text-emerald-600 hover:bg-emerald-50/50 focus:ring-emerald-500 bg-white/50 backdrop-blur-sm shadow-sm',
    ghost: 'text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-500',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2.5',
    lg: 'px-8 py-4 text-lg sm:text-xl gap-3',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && <span className="flex-shrink-0 transition-transform group-hover:scale-110 duration-300">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (props.href) {
    return (
      <a className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
