import React from 'react';
import { Home, LineChart, Users, Package, User, Activity } from 'lucide-react';
import { MenuType } from '../../types';
import ProfileMenu from './ProfileMenu';

interface SidebarProps {
  selectedMenu: MenuType;
  onMenuSelect: (menu: MenuType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedMenu, onMenuSelect }) => {
  const menuItems = [
    { id: 'ranking' as MenuType, icon: LineChart, label: '랭킹 보드' },
    { id: 'mycompany' as MenuType, icon: Users, label: '마이컴퍼니' },
    { id: 'statistics' as MenuType, icon: Activity, label: '통계' },
    { id: 'market' as MenuType, icon: Package, label: '마켓' }
  ];

  return (
    <div className="w-64 border-r border-gray-800 flex flex-col">
      <button 
        onClick={() => onMenuSelect('dashboard')}
        className="h-16 flex items-center px-6 border-b border-gray-800 hover:bg-gray-800"
      >
        <Home className="w-5 h-5 mr-3" />
        홈
      </button>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map(({ id, icon: Icon, label }) => (
            <li key={id}>
              <button 
                onClick={() => onMenuSelect(id)}
                className={`w-full flex items-center px-4 py-2 rounded hover:bg-gray-800 ${
                  selectedMenu === id ? 'bg-gray-800' : ''
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <ProfileMenu />
    </div>
  );
};

export default Sidebar;