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
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
          {icon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          bg-gray-50 dark:bg-gray-800
          border border-gray-200 dark:border-gray-700
          text-gray-900 dark:text-gray-100
          placeholder:text-gray-500 dark:placeholder:text-gray-400
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
