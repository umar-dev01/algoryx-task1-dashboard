import { motion } from 'framer-motion';
import { StatCard } from '../components/dashboard/StatCard';
import { OrdersTable } from '../components/dashboard/OrdersTable';
import { RevenueChart } from '../components/dashboard/RevenueChart';
import { statsData } from '../data/stats';

export function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-ink mb-2">
          Dashboard
        </h1>
        <p className="text-muted">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {statsData.map((stat, index) => (
          <StatCard key={stat.id} {...stat} index={index} />
        ))}
      </div>

      <RevenueChart />

      <OrdersTable />
    </motion.div>
  );
}
