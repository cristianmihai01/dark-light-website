import React, { useState, useEffect } from 'react';
// import icons
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // check local storage
    if (localStorage.getItem('theme') === null) {
      // add to local storage
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    // select html element
    const html = document.querySelector('html');
    // check local storage
    if (localStorage.getItem('theme') === 'dark') {
      // add class
      html.classList.add('dark');
      // set theme state
      setTheme('dark');
    } else {
      // remove class
      html.classList.remove('dark');
      // set theme state
      setTheme('light');
    }
  }, [theme]);

  // handler
  const handleThemeSwitch = () => {
    // check local storage
    if (localStorage.getItem('theme') === 'light') {
      // set theme state
      setTheme('dark');
      // set local storage
      localStorage.setItem('theme', 'dark');
    } else {
      // set theme state
      setTheme('light');
      // set local storage
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className='h-screen bg-white flex justify-center items-center dark:bg-black'>
      <button
        onClick={handleThemeSwitch}
        className={`${
          theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
        } p-3 rounded-full text-2xl`}
      >
        {theme === 'dark' ? <BsFillSunFill /> : <BsMoonFill />}
      </button>
    </div>
  );
};

export default App;
