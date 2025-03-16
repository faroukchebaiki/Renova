
import React from 'react';
import Link from 'next/link';

const SlidingCard: React.FC = () => {
  return (
    <div className="group fixed z-50 bottom-4 left-0 transform -translate-x-1/2 hover:translate-x-0 transition-transform duration-300">
      <div className="bg-white p-4 rounded-r-lg shadow-lg">
        <p className="text-sm text-gray-700">
          This site is coded by Farouk Chebaiki. Visit my portfolio at{' '}
          <Link href="https://farouk.uk">
            <span className="text-blue-500 hover:underline">farouk.uk</span>
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default SlidingCard;
