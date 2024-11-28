import React from 'react';

const departments = [
  { title: "롱 포지션 부서", color: "blue" },
  { title: "숏 포지션 부서", color: "purple" },
  { title: "스캘핑 부서", color: "green" },
  { title: "분석 부서", color: "orange" }
];

const Management = () => {
  return (
    <div className="grid grid-cols-12 gap-6 h-[calc(100vh-12rem)]">
      {/* Company/Team Selection */}
      <div className="col-span-3 bg-gray-800 rounded-lg p-4 space-y-4">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">회사 선택</h3>
          <select className="w-full bg-gray-700 rounded px-3 py-2">
            <option>Alpha Trading Co.</option>
            <option>Beta Securities</option>
          </select>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">팀원 선택</h3>
          <div className="space-y-2">
            {['Alice', 'Bob', 'Charlie', 'David'].map(name => (
              <div key={name} className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-3" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Department Working Logs */}
      <div className="col-span-9 grid grid-cols-2 gap-4">
        {departments.map(dept => (
          <div key={dept.title} className="bg-gray-800 rounded-lg p-4">
            <h3 className={`text-lg font-semibold mb-4 text-${dept.color}-400`}>{dept.title}</h3>
            <div className="space-y-2 h-[calc(100%-3rem)] overflow-auto">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-700 p-3 rounded text-sm">
                  <div className="flex justify-between text-gray-400 text-xs mb-1">
                    <span>User_{i + 1}</span>
                    <span>12:0{i}</span>
                  </div>
                  <div>새로운 거래 포지션 오픈 BTC/USDT</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;