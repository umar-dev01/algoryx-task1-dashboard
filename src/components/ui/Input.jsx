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
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
          {icon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        style={{ boxShadow: 'inset 0 2px 4px rgba(124,58,237,0.08)' }}
        className={`
          bg-input
          border border-line
          text-ink
          placeholder:text-muted
          rounded-full px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-brand
          transition-all duration-200
          ${icon ? 'pl-11' : ''}
          ${fullWidth ? 'w-full' : ''}
        `}
      />
    </div>
  );
}
