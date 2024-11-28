// components/market/MarketFilters.tsx
import React from 'react';
import { Search } from 'lucide-react';

interface MarketFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedFilter: string;
  onFilterChange: (value: string) => void;
}

const MarketFilters: React.FC<MarketFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedFilter,
  onFilterChange
}) => {
  return (
    <div className="flex space-x-4 mb-6">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
        <input
          type="text"
          placeholder="NPC 검색..."
          className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <select
        className="px-4 py-2 bg-gray-800 rounded-lg"
        value={selectedFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="all">모든 등급</option>
        <option value="legendary">Legendary</option>
        <option value="epic">Epic</option>
        <option value="rare">Rare</option>
      </select>
    </div>
  );
};

export default MarketFilters;