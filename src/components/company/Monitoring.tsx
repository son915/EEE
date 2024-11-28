import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Monitoring = () => {
  const pnlData = [
    { time: '09:00', value: 1000000 },
    { time: '10:00', value: 1200000 },
    { time: '11:00', value: 1150000 },
    { time: '12:00', value: 1300000 },
    { time: '13:00', value: 1250000 }
  ];

  const activeTrades = [
    { pair: 'BTC/USDT', entry: 45000, current: 46000, pnl: '+2.22%' },
    { pair: 'ETH/USDT', entry: 3000, current: 3100, pnl: '+3.33%' },
    { pair: 'SOL/USDT', entry: 100, current: 98, pnl: '-2.00%' }
  ];

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Overall PnL Chart */}
      <div className="col-span-8 bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-6">종합 PnL 현황</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={pnlData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                formatter={(value: number) => [`₩${value.toLocaleString()}`, 'PnL']}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#10B981" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-700 p-4 rounded">
            <div className="text-gray-400 mb-1">일일 PnL</div>
            <div className="text-2xl text-green-400">+₩1,234,567</div>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <div className="text-gray-400 mb-1">주간 PnL</div>
            <div className="text-2xl text-green-400">+₩5,234,567</div>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <div className="text-gray-400 mb-1">월간 PnL</div>
            <div className="text-2xl text-green-400">+₩15,234,567</div>
          </div>
        </div>
      </div>

      {/* Active Trades */}
      <div className="col-span-4 bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-6">진행중인 거래</h3>
        <div className="space-y-4">
          {activeTrades.map((trade, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{trade.pair}</span>
                <span className={trade.pnl.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                  {trade.pnl}
                </span>
              </div>
              <div className="text-sm text-gray-400">
                진입가: ${trade.entry.toLocaleString()} | 현재가: ${trade.current.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monitoring;