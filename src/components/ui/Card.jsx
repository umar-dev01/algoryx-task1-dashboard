export function Card({ children, className = '', padding = 'md', hover = false }) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      style={{ 
        boxShadow: 'var(--shadow-bubble)',
        background: 'linear-gradient(to bottom, var(--card), color-mix(in srgb, var(--card) 95%, white))'
      }}
      className={`
        bg-card
        border border-line
        rounded-3xl
        ${hover ? 'hover:shadow-[--shadow-bubble-hover] transition-shadow duration-200' : ''}
        ${paddingClasses[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
