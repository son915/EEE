// components/dashboard/TeamCard.tsx
import React from 'react';

const TeamCard = () => {
  return (
    <div className="p-6 rounded-lg bg-gray-800">
      <h3 className="text-lg font-semibold mb-4">팀 성과</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>팀 순위</span>
          <span>#12</span>
        </div>
        <div className="flex justify-between">
          <span>활성 트레이더</span>
          <span>5명</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;