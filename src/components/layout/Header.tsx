components/layout/Header.tsx

import React from 'react';
import { MenuType } from '../../types';

interface HeaderProps {
  selectedMenu: MenuType;
}

const Header: React.FC<HeaderProps> = ({ selectedMenu }) => {
  const getTitle = () => {
    switch (selectedMenu) {
      case 'dashboard':
        return '대시보드';
      case 'ranking':
        return '랭킹 보드';
      case 'mycompany':
        return '마이컴퍼니';
      case 'statistics':
        return '통계';
      case 'market':
        return '마켓';
      default:
        return '대시보드';
    }
  };

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-gray-800">
      <h2 className="text-xl font-semibold">{getTitle()}</h2>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700">
          새 거래 시작
        </button>
      </div>
    </header>
  );
};

export default Header;