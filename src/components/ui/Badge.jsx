export function Badge({ children, variant = 'info', size = 'md' }) {
  const variantClasses = {
    success: 'bg-green-100/80 text-green-800 dark:bg-green-900/60 dark:text-green-200 shadow-sm',
    warning: 'bg-yellow-100/80 text-yellow-800 dark:bg-yellow-900/60 dark:text-yellow-200 shadow-sm',
    info: 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200 shadow-sm',
    danger: 'bg-red-100/80 text-red-800 dark:bg-red-900/60 dark:text-red-200 shadow-sm',
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full font-semibold
        ${variantClasses[variant]}
        ${sizeClasses[size]}
      `}
    >
      {children}
    </span>
  );
}
