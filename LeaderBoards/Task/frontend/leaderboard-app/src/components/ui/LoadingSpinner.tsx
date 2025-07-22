import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${className}`}>
      <div className={`${sizes[size]} border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin`} />
    </div>
  );
};

export default LoadingSpinner;