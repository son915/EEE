import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DashboardView from './components/dashboard/DashboardView';
import RankingView from './components/ranking/RankingView';
import CompanyView from './components/company/CompanyView';
import StatisticsView from './components/statistics/StatisticsView';
import MarketView from './components/market/MarketView';
import { MenuType } from './types';

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuType>('dashboard');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'dashboard':
        return <DashboardView />;
      case 'ranking':
        return <RankingView />;
      case 'mycompany':
        return <CompanyView />;
      case 'statistics':
        return <StatisticsView />;
      case 'market':
        return <MarketView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />
      <div className="flex-1 overflow-auto">
        <Header selectedMenu={selectedMenu} />
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;