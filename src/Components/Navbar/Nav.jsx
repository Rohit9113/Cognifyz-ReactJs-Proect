import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [logoColor, setLogoColor] = useState('text-red-500');

  const colors = [
    'text-red-500', 'text-blue-500', 'text-green-500',
    'text-yellow-500', 'text-purple-500', 'text-pink-500',
    'text-orange-500'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setLogoColor(randomColor);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-gradient-to-r from-cyan-900 via-blue-900 to-gray-800">
      <h1 className={`${logoColor} font-bold text-2xl transition-colors duration-500 animate-pulse`}>
        CognifyzTask
      </h1>
      <ul className="flex space-x-6 text-white font-semibold">
        <li className="hover:text-blue-500 transition">Home</li>
        <li className="hover:text-blue-500 transition">Contact</li>
        <li className="hover:text-blue-500 transition">About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
