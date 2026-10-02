import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/Card';
import { chartData } from '../../data/chartData';
import { useTheme } from '../../hooks/useTheme';

export function RevenueChart() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Card>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Revenue Trend
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={isDark ? '#374151' : '#E5E7EB'}
            opacity={0.3}
          />
          <XAxis
            dataKey="month"
            stroke={isDark ? '#9CA3AF' : '#6B7280'}
            style={{ fontSize: '14px' }}
          />
          <YAxis
            stroke={isDark ? '#9CA3AF' : '#6B7280'}
            style={{ fontSize: '14px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#151522' : '#F5F0FF',
              border: `1px solid ${isDark ? 'rgba(124, 58, 237, 0.2)' : '#E9D5FF'}`,
              borderRadius: '8px',
            }}
            labelStyle={{ color: isDark ? '#F3F4F6' : '#111827' }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={isDark ? '#A78BFA' : '#7C3AED'}
            strokeWidth={2}
            dot={{ fill: isDark ? '#A78BFA' : '#7C3AED', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
