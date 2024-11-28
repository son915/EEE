export const RARITY_COLORS = {
    legendary: {
      text: "text-yellow-400",
      bg: "bg-yellow-400",
      border: "border-yellow-400"
    },
    epic: {
      text: "text-purple-400",
      bg: "bg-purple-400",
      border: "border-purple-400"
    },
    rare: {
      text: "text-blue-400",
      bg: "bg-blue-400",
      border: "border-blue-400"
    }
  } as const;
  
  export const DEPARTMENT_COLORS = {
    long: "blue",
    short: "purple",
    scalping: "green",
    analysis: "orange"
  } as const;
  
  export const TRADE_TYPES = {
    LONG: 'long',
    SHORT: 'short',
    SCALPING: 'scalping'
  } as const;
  
  export const DEFAULT_CURRENCY_FORMAT = {
    style: 'currency',
    currency: 'KRW',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  };
  
  export const API_ENDPOINTS = {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    TRADES: '/api/trades',
    PORTFOLIO: '/api/portfolio',
    RANKINGS: '/api/rankings',
    MARKET: '/api/market',
    STATISTICS: '/api/statistics'
  } as const;
  
  export const CHART_COLORS = {
    primary: '#3B82F6',
    secondary: '#10B981',
    danger: '#EF4444',
    warning: '#F59E0B',
    grid: '#374151',
    text: '#9CA3AF'
  } as const;