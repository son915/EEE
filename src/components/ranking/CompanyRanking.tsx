// components/ranking/CompanyRanking.tsx
import React from 'react';
import { Trophy } from 'lucide-react';

const CompanyRanking = () => {
  const companies = [
    { rank: 1, name: "Alpha Capital", marketCap: "₩15.2B", change: "+5.2%" },
    { rank: 2, name: "Beta Investments", marketCap: "₩12.8B", change: "-1.8%" },
    { rank: 3, name: "Gamma Trading", marketCap: "₩10.5B", change: "+2.3%" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">시가총액 순위</h2>
      {companies.map((company) => (
        <div key={company.rank} className="flex items-center justify-between p-4 bg-gray-800 rounded">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-400">#{company.rank}</span>
            <div>
              <h4 className="font-semibold">{company.name}</h4>
              <span className="text-gray-400">시가총액: {company.marketCap}</span>
            </div>
          </div>
          <span className={company.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
            {company.change}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CompanyRanking;

