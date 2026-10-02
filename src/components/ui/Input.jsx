export function Input({
  value,
  onChange,
  placeholder = '',
  icon,
  type = 'text',
  fullWidth = false,
  className = '',
}) {
  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''} ${className}`}>
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          bg-gray-50 dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          rounded-lg px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-primary
          transition-colors duration-200
          ${icon ? 'pl-10' : ''}
          ${fullWidth ? 'w-full' : ''}
        `}
      />
    </div>
  );
}
