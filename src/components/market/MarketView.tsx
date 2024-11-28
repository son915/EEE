import React, { useState } from 'react';
import NFTCard from './NFTCard';
import MarketFilters from './MarketFilters';

const MarketView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const npcCards = [
    {
      id: 1,
      name: "Elite Trader Alpha",
      role: "롱 포지션 전문가",
      level: 5,
      price: "2.5 ETH",
      stats: {
        success_rate: "78%",
        trades: 1234,
        experience: "3년"
      },
      rarity: "legendary" as const
    },
    {
      id: 2,
      name: "Short Master Beta",
      role: "숏 포지션 전문가",
      level: 4,
      price: "1.8 ETH",
      stats: {
        success_rate: "75%",
        trades: 987,
        experience: "2년"
      },
      rarity: "epic" as const
    },
    {
      id: 3,
      name: "Scalping Expert",
      role: "스캘핑 전문가",
      level: 3,
      price: "1.2 ETH",
      stats: {
        success_rate: "82%",
        trades: 2345,
        experience: "1년"
      },
      rarity: "rare" as const
    }
  ];

  // Filter NPCs based on search term and selected filter
  const filteredNPCs = npcCards.filter(npc => {
    const matchesSearch = npc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         npc.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || npc.rarity === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-gray-400 mb-2">총 거래량</h4>
          <div className="text-2xl font-semibold">₩123.4B</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-gray-400 mb-2">등록된 NPC</h4>
          <div className="text-2xl font-semibold">89개</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-gray-400 mb-2">플로어 가격</h4>
          <div className="text-2xl font-semibold">0.5 ETH</div>
        </div>
      </div>

      {/* Filters */}
      <MarketFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      {/* NPC Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNPCs.map(npc => (
          <NFTCard key={npc.id} data={npc} />
        ))}
      </div>

      {/* Market Activity */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">최근 거래 내역</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span>Elite Trader Alpha #{index}</span>
              </div>
              <div className="text-right">
                <div>2.5 ETH</div>
                <div className="text-sm text-gray-400">5분 전</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketView;