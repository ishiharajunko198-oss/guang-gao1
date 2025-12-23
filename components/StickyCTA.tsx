import React from 'react';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-50">
      <a 
        href="#register" 
        className="block w-full bg-jp-cta hover:bg-jp-ctaHover text-white text-center font-bold py-3 rounded-lg shadow text-lg animate-pulse"
      >
        無料で7日間試してみる
      </a>
    </div>
  );
};

export default StickyCTA;