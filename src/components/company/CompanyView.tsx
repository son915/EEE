import React, { useState } from 'react';
import Management from './Management';
import Monitoring from './Monitoring';

const CompanyView = () => {
  const [activeTab, setActiveTab] = useState<'management' | 'monitoring'>('management');

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => setActiveTab('management')}
          className={`px-6 py-2 rounded-lg ${
            activeTab === 'management' ? 'bg-blue-600' : 'bg-gray-700'
          }`}
        >
          매니지먼트
        </button>
        <button
          onClick={() => setActiveTab('monitoring')}
          className={`px-6 py-2 rounded-lg ${
            activeTab === 'monitoring' ? 'bg-blue-600' : 'bg-gray-700'
          }`}
        >
          모니터링
        </button>
      </div>
      
      {activeTab === 'management' ? <Management /> : <Monitoring />}
    </div>
  );
};

export default CompanyView;