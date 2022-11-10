import React, { useState, useEffect } from 'react';
// import icons
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
// import girl image
import GirlImg from '../src/assets/img/girl.png';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');

    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
      setTheme('dark');
    } else {
      html.classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);

  // handler theme
  const handleThemeSwitch = () => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <section className='w-full h-screen bg-[#e4F5eb] flex justify-center items-center dark:bg-black'>
      {/* button */}
      <button
        onClick={handleThemeSwitch}
        className={`${
          theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
        } p-3 rounded-full text-2xl absolute right-6 top-6`}
      >
        {theme === 'dark' ? <BsFillSunFill /> : <BsMoonFill />}
      </button>
      <div className='container mx-auto flex flex-col lg:flex-row gap-x-16'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center text-center lg:items-start lg:text-left px-4 mb-6'>
          <h1 className='text-5xl lg:text-6xl text-[#242323] font-bold dark:text-white mb-10'>
            Anytime,anywhere develop your skills
          </h1>
          <p className='dark:text-white max-w-[620px] mx-auto lg:mx-0 mb-10'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            aperiam quo quae dicta obcaecati tempora reprehenderit fuga
            doloribus. Illum odio sint et possimus natus id in repellendus
            corporis sapiente molestias.
          </p>
          <button className='bg-[#45b871] h-[62px] px-10 rounded-[5px] font-semibold text-white'>
            All courses
          </button>
        </div>
        {/* image */}
        <div className='flex-1'>
          <img
            className='w-full max-w-[450px] h-full max-h-[450px] mx-auto lg:mx-0'
            src={GirlImg}
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default App;
