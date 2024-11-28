// components/statistics/StatCard.tsx
import React from 'react';
import { StatCard as StatCardType } from '../../types';

const StatCard: React.FC<StatCardType> = ({ title, value, change, icon: Icon, color }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <div className={`p-3 bg-${color}-500 bg-opacity-20 rounded-lg`}>
          <Icon className={`w-6 h-6 text-${color}-500`} />
        </div>
        <span className={`text-sm ${
          change.startsWith('+') ? 'text-green-400' : 'text-red-400'
        }`}>
          {change}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-1">{value}</h3>
      <p className="text-gray-400">{title}</p>
    </div>
  );
};

export default StatCard;
