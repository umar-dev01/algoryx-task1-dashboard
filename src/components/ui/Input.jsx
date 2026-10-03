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
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
          {icon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          bg-input
          border border-line
          text-ink
          placeholder:text-muted
          rounded-lg px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-brand
          transition-colors duration-200
          ${icon ? 'pl-10' : ''}
          ${fullWidth ? 'w-full' : ''}
        `}
      />
    </div>
  );
}
