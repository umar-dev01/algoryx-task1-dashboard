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
    >
      <Card padding="md" hover>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {label}
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {formatValue(value)}
            </h3>
            <div className="flex items-center gap-1">
              {isPositive ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              <span
                className={`text-sm font-medium ${
                  isPositive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {Math.abs(change)}%
              </span>
              <span className="text-sm text-gray-500">vs last month</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
