import { Avatar } from '../ui/Avatar';
import { userData } from '../../data/user';

export function ProfileCard({ isCollapsed }) {
  return (
    <div className="p-3 border-t border-gray-200 dark:border-gray-700">
      <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
        <Avatar
          src={userData.avatar}
          name={userData.name}
          size="md"
        />
        {!isCollapsed && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
              {userData.name}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
              {userData.role}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Online
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
