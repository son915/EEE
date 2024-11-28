// components/market/NFTCard.tsx
import React from 'react';
import { Star } from 'lucide-react';
import { NFTCard as NFTCardType } from '../../types';

const NFTCard: React.FC<{ data: NFTCardType }> = ({ data }) => {
  const rarityColors = {
    legendary: "text-yellow-400",
    epic: "text-purple-400",
    rare: "text-blue-400"
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold">{data.name}</h3>
          <p className="text-gray-400">{data.role}</p>
        </div>
        <div className={`${rarityColors[data.rarity]} flex items-center`}>
          <Star className="w-4 h-4 mr-1" />
          <span className="text-sm">Lv.{data.level}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-700 p-3 rounded">
          <div className="text-sm text-gray-400">승률</div>
          <div className="text-lg">{data.stats.success_rate}</div>
        </div>
        <div className="bg-gray-700 p-3 rounded">
          <div className="text-sm text-gray-400">거래 수</div>
          <div className="text-lg">{data.stats.trades}</div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
        <div className="text-xl font-semibold">{data.price}</div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
          구매하기
        </button>
      </div>
    </div>
  );
};

export default NFTCard;