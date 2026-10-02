export function Card({ children, className = '', padding = 'md', hover = false }) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`
        bg-background-light-card dark:bg-background-dark-card
        border border-border-light dark:border-border-dark
        rounded-2xl shadow-sm
        ${hover ? 'hover:shadow-md transition-shadow duration-200' : ''}
        ${paddingClasses[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
