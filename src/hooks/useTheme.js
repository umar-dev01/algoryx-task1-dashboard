import { useState, useEffect } from 'react';

/**
 * Manages theme state with localStorage persistence
 * @returns {Object} { theme, toggleTheme, setTheme }
 */
export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    // Check localStorage, fallback to system preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    // Apply theme to document root
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme, setTheme: setThemeState };
}
