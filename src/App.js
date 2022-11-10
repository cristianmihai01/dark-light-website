import React, { useState, useEffect } from 'react';

const App = () => {
  const [theme, setTheme] = useState(null);
  // useEffect(() => {
  //   if (window.matchMedia('{prefers-color-scheme: dark}').matches) {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // }, []);

  useEffect(() => {
    const html = document.querySelector('html');
    theme === 'dark'
      ? html.classList.add('dark')
      : html.classList.remove('dark');
  }, [theme]);

  const themeSwitchHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='h-screen bg-white flex justify-center items-center dark:bg-black'>
      <button
        onClick={themeSwitchHandler}
        className='bg-green-200 p-4 rounded-3xl'
      >
        Dark Mode
      </button>
    </div>
  );
};

export default App;
