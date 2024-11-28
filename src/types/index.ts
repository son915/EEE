export type MenuType = 'dashboard' | 'ranking' | 'mycompany' | 'statistics' | 'market';

export interface NFTCard {
  id: number;
  name: string;
  role: string;
  level: number;
  price: string;
  stats: {
    success_rate: string;
    trades: number;
    experience: string;
  };
  rarity: 'legendary' | 'epic' | 'rare';
}

export interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: React.ComponentType;
  color: string;
}