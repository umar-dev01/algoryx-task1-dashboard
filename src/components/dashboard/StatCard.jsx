import { motion, useReducedMotion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, TrendingUp as TrendIcon, MessageSquare } from 'lucide-react';
import { Card } from '../ui/Card';
import { formatCurrency, formatNumber } from '../../utils/formatters';
import { bubbleCardVariants, bubbleHover, bubbleTap, iconFloatVariants, iconPopHover } from '../../utils/motion';

const iconMap = {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp: TrendIcon,
  MessageSquare,
};

export function StatCard({ icon, label, value, change, format, index }) {
  const Icon = iconMap[icon] || DollarSign;
  const isPositive = change > 0;
  const shouldReduceMotion = useReducedMotion();

  const formatValue = (val) => {
    if (format === 'currency') return formatCurrency(val);
    if (format === 'percentage') return `${val}%`;
    return formatNumber(val);
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={bubbleCardVariants}
      whileHover="hover"
      whileTap="tap"
      className="h-full group"
    >
      <motion.div
        variants={{ hover: bubbleHover, tap: bubbleTap }}
        style={{ boxShadow: 'var(--shadow-bubble)' }}
        className="hover:shadow-[--shadow-bubble-hover] active:shadow-[--shadow-bubble-press] transition-shadow duration-200"
      >
        <Card padding="md" className="h-full">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted mb-1">
                {label}
              </p>
              <h3 className="text-2xl font-bold text-ink mb-2">
                {formatValue(value)}
              </h3>
              <div className="flex items-center gap-1 flex-wrap">
                {isPositive ? (
                  <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-600 flex-shrink-0" />
                )}
                <span
                  className={`text-sm font-medium flex-shrink-0 ${
                    isPositive ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {Math.abs(change)}%
                </span>
                <span className="text-xs text-muted whitespace-nowrap">vs last mo</span>
              </div>
            </div>
            <motion.div
              custom={index * 0.3}
              animate={shouldReduceMotion ? {} : "float"}
              variants={iconFloatVariants}
              whileHover={iconPopHover}
              style={{ 
                boxShadow: 'var(--shadow-bubble-icon)',
                background: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)'
              }}
              className="relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
            >
              {/* Glossy highlight */}
              <div className="absolute top-1 left-2 w-6 h-4 bg-white rounded-full opacity-40 blur-sm" />
              <Icon className="w-6 h-6 text-white relative z-10" />
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
