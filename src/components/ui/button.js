import React from 'react';

export const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors 
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
