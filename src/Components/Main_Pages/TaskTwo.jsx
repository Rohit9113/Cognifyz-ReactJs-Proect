import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TaskTwo = ({ setBgColor }) => {
  const [localBgColor, setLocalBgColor] = useState('');
  const [fontColor, setFontColor] = useState('#000000');
  const [fontSize, setFontSize] = useState('1.5rem');
  const [fontStyle, setFontStyle] = useState('normal');

  const fontColors = ['#dc2626', '#16a34a', '#2563eb', '#d97706', '#9333ea'];
  const fontSizes = ['1rem', '1.25rem', '1.5rem', '2rem', '2.5rem'];
  const fontStyles = ['normal', 'italic'];

  const changeLocalBackground = () => {
    const colors = ['#fcd34d', '#6ee7b7', '#93c5fd', '#fca5a5', '#ddd6fe'];
    const random = colors[Math.floor(Math.random() * colors.length)];
    setLocalBgColor(random);
    setFontColor(fontColors[Math.floor(Math.random() * fontColors.length)]);
    setFontSize(fontSizes[Math.floor(Math.random() * fontSizes.length)]);
    setFontStyle(fontStyles[Math.floor(Math.random() * fontStyles.length)]);
  };

  const changeGlobalBackground = () => {
    const colors = ['#fde68a', '#a5f3fc', '#c4b5fd', '#fecaca', '#bbf7d0'];
    const random = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(random);
    setFontColor(fontColors[Math.floor(Math.random() * fontColors.length)]);
    setFontSize(fontSizes[Math.floor(Math.random() * fontSizes.length)]);
    setFontStyle(fontStyles[Math.floor(Math.random() * fontStyles.length)]);
  };

  return (
    <div
      style={{ backgroundColor: localBgColor }}
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 sm:px-6 transition-all duration-500"
    >
      <motion.h1
        animate={{ scale: [1, 1.05, 1], rotate: [0, 3, -3, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          color: fontColor,
          fontSize: fontSize,
          fontStyle: fontStyle,
        }}
        className="font-bold mb-6 text-center max-w-xl leading-tight"
      >
        Change font color, size, and background color.
      </motion.h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={changeLocalBackground}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105 animate-bounce text-sm sm:text-base"
        >
          Change Local Background & Font
        </button>

        <button
          onClick={changeGlobalBackground}
          className="bg-emerald-500 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105 animate-bounce text-sm sm:text-base"
        >
          Change Global Background
        </button>
      </div>
    </div>
  );
};

export default TaskTwo;
