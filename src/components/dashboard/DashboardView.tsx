import React from 'react';
import PortfolioCard from './PortfolioCard';
import TeamCard from './TeamCard';
import AIAnalysisCard from './AIAnalysisCard';

const DashboardView = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PortfolioCard />
        <TeamCard />
        <AIAnalysisCard />
      </div>

      {/* Recent Activities */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">최근 활동</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span>BTC/USDT 롱 포지션 오픈</span>
              </div>
              <span className="text-sm text-gray-400">5분 전</span>
            </div>
          ))}
        </div>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">시장 동향</h3>
          {/* Add market trend chart here */}
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">팀 성과 분석</h3>
          {/* Add team performance chart here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;