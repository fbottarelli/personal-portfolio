// ThemeSwitch.tsx
'use client'

import { useState } from 'react';

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  const toggle = () => {
    document.body.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggle}
      className={`flex h-5 w-5 sm:h-7 sm:w-7 items-center justify-center rounded-lg transition-all bg-orange-500 text-white uppercase px-2 py-1 ${
        darkMode ? 'dark:bg-blue-600' : ''
      } mx-10 md:my-10 md:mx-0`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={`h-5 w-5 text-gray-800 ${darkMode ? 'dark:text-yellow-100' : ''}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </button>
  );
}
