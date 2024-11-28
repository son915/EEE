import React, { useState } from 'react';
import { User, Settings } from 'lucide-react';

const ProfileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="border-t border-gray-800">
      <div className="relative">
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-800"
        >
          <div className="flex items-center">
            <User className="w-5 h-5 mr-3" />
            <span>프로파일</span>
          </div>
          <Settings className="w-4 h-4" />
        </button>

        {showMenu && (
          <div className="absolute bottom-full left-0 w-full bg-gray-800 border border-gray-700 rounded-t-lg shadow-lg">
            <div className="p-4 space-y-2">
              <div className="px-3 py-2 hover:bg-gray-700 rounded cursor-pointer">
                계정 설정
              </div>
              <div className="px-3 py-2 hover:bg-gray-700 rounded cursor-pointer">
                알림 설정
              </div>
              <div className="px-3 py-2 hover:bg-gray-700 rounded cursor-pointer border-t border-gray-700">
                로그아웃
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileMenu;