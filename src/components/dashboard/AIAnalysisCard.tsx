import React from 'react';

const AIAnalysisCard = () => {
  return (
    <div className="p-6 rounded-lg bg-gray-800">
      <h3 className="text-lg font-semibold mb-4">AI 분석</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>추천 전략</span>
          <span className="text-blue-400">롱 포지션</span>
        </div>
        <div className="flex justify-between">
          <span>시장 상태</span>
          <span className="text-green-400">안정적</span>
        </div>
      </div>
    </div>
  );
};

export default AIAnalysisCard;