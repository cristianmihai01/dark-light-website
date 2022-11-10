import React, { useState, useEffect } from 'react';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
      setTheme('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  // useEffect(() => {
  //   if (window.matchMedia('{prefers-color-scheme: dark}').matches) {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // }, []);

  // useEffect(() => {
  //   const html = document.querySelector('html');
  //   if (localStorage.getItem('theme') === 'dark') {
  //     html.classList.add('dark');
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     html.classList.remove('dark');
  //     localStorage.setItem('theme', 'light');
  //   }
  // }, [theme]);

  // const themeSwitchHandler = () => {
  //   setTheme(
  //     localStorage.getItem('theme') === 'dark'
  //       ? localStorage.setItem('theme', 'light')
  //       : localStorage.setItem('theme', 'dark')
  //   );
  // };

  return (
    <div className='h-screen bg-white flex justify-center items-center dark:bg-black'>
      <button
        onClick={handleThemeSwitch}
        className='bg-green-200 p-4 rounded-full text-2xl transition-all'
      >
        {theme === 'dark' ? <BsFillSunFill /> : <BsMoonFill />}
      </button>
    </div>
  );
};

export default App;
