import { motion } from 'framer-motion';
import { buttonBubbleVariants } from '../../utils/motion';

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
    primary: 'bg-gradient-to-br from-[#A78BFA] to-brand hover:from-[#9F7AEA] hover:to-[#6D28D9] text-white',
    secondary: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
    ghost: 'hover:bg-brand/10 text-ink',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      variants={buttonBubbleVariants}
      whileHover={!disabled ? "hover" : undefined}
      whileTap={!disabled ? "tap" : undefined}
      style={variant === 'primary' || variant === 'danger' ? { boxShadow: 'var(--shadow-bubble)' } : undefined}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-medium
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${variant === 'primary' || variant === 'danger' ? 'hover:shadow-[--shadow-bubble-hover] active:shadow-[--shadow-bubble-press]' : ''}
        ${className}
      `}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
}
