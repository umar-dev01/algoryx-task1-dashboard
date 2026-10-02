import { getInitials } from '../../utils/helpers';

export function Avatar({ src, alt, name, size = 'md' }) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt || name}
        className={`${sizeClasses[size]} rounded-full object-cover`}
      />
    );
  }

  return (
    <div
      className={`
        ${sizeClasses[size]}
        rounded-full
        bg-primary text-white
        flex items-center justify-center
        font-semibold
      `}
    >
      {getInitials(name)}
    </div>
  );
}
