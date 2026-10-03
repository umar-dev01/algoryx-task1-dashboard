import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, TrendingUp as TrendIcon, MessageSquare } from 'lucide-react';
import { Card } from '../ui/Card';
import { formatCurrency, formatNumber } from '../../utils/formatters';

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

  const formatValue = (val) => {
    if (format === 'currency') return formatCurrency(val);
    if (format === 'percentage') return `${val}%`;
    return formatNumber(val);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="h-full"
    >
      <Card padding="md" hover className="h-full">
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
          <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-brand" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
