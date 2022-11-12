import React, { useState, useEffect } from 'react';
// import logo
import LogoDark from '../assets/img/logo-dark.svg';
import LogoWhite from '../assets/img/logo-white.svg';
// import icons
import { BsFillSunFill, BsMoonFill, BsCheck } from 'react-icons/bs';
// import image
import GirlImg from '../assets/img/girl.png';

const Hero = () => {
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
    <section className='min-h-[740px] w-full bg-heroLight dark:bg-heroDark bg-cover bg-center bg-no-repeat overflow-hidden'>
      <div className='container mx-auto px-4 lg:px-0'>
        {/* header */}
        <header className='py-8 flex items-center justify-between'>
          <div className='flex items-center'>
            {/* logo */}
            <a href='#' className='mr-16'>
              {theme === 'light' ? (
                <img src={LogoDark} alt='' />
              ) : (
                <img src={LogoWhite} alt='' />
              )}
            </a>
          </div>
          {/* toolbar */}
          <div className='flex gap-x-8 items-center'>
            {/* log in & btn */}
            <div className='hidden lg:flex gap-x-8'></div>
            {/* light & dark btn */}
            <button
              onClick={handleThemeSwitch}
              className='p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center'
            >
              {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
            </button>
          </div>
        </header>
        {/* text & image wrapper */}
        <div className='flex flex-col items-center lg:flex-row min-h-[740px] '>
          {/* text */}
          <div className='flex-1 flex flex-col justify-center items-start'>
            <h1 className='text-5xl text-primary font-bold mb-6 leading-[60px] dark:text-white'>
              Online Accounting <br />
              <span className='text-accent'>Fast & Uncomplicated</span>
            </h1>
            <p className='font-light text-grey mb-12 max-w-[597px] dark:text-white'>
              We specialize in small businesses. Our goal is to eliminate
              bureaucracy, creating a modern relationship between your company
              and the accountant.
            </p>
            {/* checked items */}
            <div className='flex flex-col gap-y-6 mb-12'>
              <div className='flex items-center gap-x-2'>
                <div className='bg-accent/10 text-accent w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-accent/70 dark:text-white'>
                  <BsCheck />
                </div>
                <p className='text-base font-light dark:text-white'>
                  Have your accounting 100% online.
                </p>
              </div>
              <div className='flex items-center gap-x-2'>
                <div className='bg-accent/10 text-accent w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-accent/70 dark:text-white'>
                  <BsCheck />
                </div>
                <p className='text-base font-light dark:text-white'>
                  Save with plans starting at $10/month.
                </p>
              </div>
            </div>
            {/* button */}
            <button className='btn'>Discover our plans</button>
          </div>
          {/* image */}
          <div className='self-end hidden lg:flex'>
            <img src={GirlImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
