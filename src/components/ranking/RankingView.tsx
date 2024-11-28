import React, { useState } from 'react';
import CompanyRanking from './CompanyRanking';
import PersonalRanking from './PersonalRanking';

const RankingView = () => {
  const [activeTab, setActiveTab] = useState<'company' | 'personal'>('company');

  return (
    <div className="space-y-6">
      {/* Tab Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => setActiveTab('company')}
          className={`px-6 py-3 rounded-lg ${
            activeTab === 'company' ? 'bg-blue-600' : 'bg-gray-700'
          }`}
        >
          회사 랭크
        </button>
        <button
          onClick={() => setActiveTab('personal')}
          className={`px-6 py-3 rounded-lg ${
            activeTab === 'personal' ? 'bg-blue-600' : 'bg-gray-700'
          }`}
        >
          개인 랭크
        </button>
      </div>

      {/* Rankings Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-gray-400 mb-2">총 거래량</h4>
          <div className="text-2xl font-semibold">₩123.4B</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-gray-400 mb-2">참여 회사</h4>
          <div className="text-2xl font-semibold">127개</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-gray-400 mb-2">활성 트레이더</h4>
          <div className="text-2xl font-semibold">1,234명</div>
        </div>
      </div>

      {/* Ranking Content */}
      <div className="bg-gray-800 rounded-lg p-6">
        {activeTab === 'company' ? <CompanyRanking /> : <PersonalRanking />}
      </div>
    </div>
  );
};

export default RankingView;