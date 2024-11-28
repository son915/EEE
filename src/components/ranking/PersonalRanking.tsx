// components/ranking/PersonalRanking.tsx
import React from 'react';

const PersonalRanking = () => {
  const traders = [
    { rank: 1, name: "John Doe", contribution: 95, trades: 150, returns: "+25.4%" },
    { rank: 2, name: "Jane Smith", contribution: 88, trades: 120, returns: "+18.7%" },
    { rank: 3, name: "Mike Johnson", contribution: 82, trades: 95, returns: "+15.2%" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">개인 순위</h2>
      {traders.map((trader) => (
        <div key={trader.rank} className="p-4 bg-gray-800 rounded">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-gray-400">#{trader.rank}</span>
              <h4 className="font-semibold">{trader.name}</h4>
            </div>
            <span className="text-green-400">{trader.returns}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2 text-sm text-gray-300">
            <div>
              <span className="text-gray-400">기여도: </span>
              {trader.contribution}
            </div>
            <div>
              <span className="text-gray-400">거래횟수: </span>
              {trader.trades}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalRanking;