export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  ariaLabel,
  disabled = false,
  className = '',
}) {
  const variantClasses = {
    primary: 'bg-brand hover:bg-brand/90 text-white',
    secondary: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
    ghost: 'hover:bg-brand/10 text-ink',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-lg font-medium
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
