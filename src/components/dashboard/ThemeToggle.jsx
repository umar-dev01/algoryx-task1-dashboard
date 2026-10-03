import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { buttonBubbleVariants } from '../../utils/motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      variants={buttonBubbleVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{ boxShadow: 'var(--shadow-bubble)' }}
      className="p-2.5 rounded-full hover:bg-brand/10 transition-colors hover:shadow-[--shadow-bubble-hover] active:shadow-[--shadow-bubble-press]"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-muted" />
      ) : (
        <Moon className="w-5 h-5 text-muted" />
      )}
    </motion.button>
  );
}
