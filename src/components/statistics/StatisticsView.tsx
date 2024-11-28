import React from 'react';
import { Activity, Users, Clock, DollarSign } from 'lucide-react';
import StatCard from './StatCard';
import Charts from './Charts';

const StatisticsView = () => {
  const stats = [
    {
      title: "총 거래 횟수",
      value: "1,234",
      icon: Activity,
      change: "+12%",
      color: "blue"
    },
    {
      title: "총 거래량",
      value: "₩123.4B",
      icon: DollarSign,
      change: "+8%",
      color: "green"
    },
    {
      title: "활성 NPC",
      value: "45",
      icon: Users,
      change: "+3",
      color: "purple"
    },
    {
      title: "대기 NPC",
      value: "12",
      icon: Clock,
      change: "-2",
      color: "orange"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-6">시간대별 거래 분포</h3>
          <Charts />
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-6">트레이더 성과 분포</h3>
          <div className="space-y-4">
            {['수익률 상위 10%', '평균 수익률', '수익률 하위 10%'].map((category, index) => (
              <div key={index} className="flex items-center">
                <div className="w-32 text-sm text-gray-400">{category}</div>
                <div className="flex-1 mx-4 h-2 bg-gray-700 rounded">
                  <div 
                    className={`h-full rounded ${
                      index === 0 ? 'bg-green-500' : 
                      index === 1 ? 'bg-blue-500' : 
                      'bg-red-500'
                    }`}
                    style={{ width: `${90 - (index * 30)}%` }}
                  />
                </div>
                <div className="w-20 text-right text-sm">
                  {`${30 - (index * 10)}%`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-6">상세 통계</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="text-gray-400 mb-4">거래 유형 분포</h4>
            {/* Add pie chart here */}
          </div>
          <div>
            <h4 className="text-gray-400 mb-4">평균 보유 시간</h4>
            {/* Add bar chart here */}
          </div>
          <div>
            <h4 className="text-gray-400 mb-4">승률 분포</h4>
            {/* Add line chart here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsView;