import React from 'react';

const PortfolioCard = () => {
  return (
    <div className="p-6 rounded-lg bg-gray-800">
      <h3 className="text-lg font-semibold mb-4">실시간 포트폴리오</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>총 자산</span>
          <span className="font-mono">₩100,000,000</span>
        </div>
        <div className="flex justify-between">
          <span>수익률</span>
          <span className="font-mono text-green-400">+15.4%</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;