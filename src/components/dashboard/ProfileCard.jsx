import { motion } from 'framer-motion';
import { Avatar } from '../ui/Avatar';
import { userData } from '../../data/user';

export function ProfileCard({ isCollapsed }) {
  return (
    <motion.div 
      style={{ boxShadow: 'var(--shadow-bubble)' }}
      className="m-3 p-3 border border-line rounded-3xl bg-card"
    >
      <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
        <div style={{ boxShadow: 'var(--shadow-bubble-icon)' }} className="rounded-full">
          <Avatar
            src={userData.avatar}
            name={userData.name}
            size="md"
          />
        </div>
        {!isCollapsed && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-ink truncate">
              {userData.name}
            </p>
            <p className="text-xs text-muted truncate">
              {userData.role}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
              />
              <span className="text-xs text-muted">
                Online
              </span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
