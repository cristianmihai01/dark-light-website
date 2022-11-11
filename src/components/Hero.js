import React, { useState, useEffect } from 'react';
// import logo
import Logo from '../assets/img/logo.svg';
// import icons
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
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
    <section className='min-h-[740px] w-screen bg-hero bg-cover bg-center bg-no-repeat overflow-hidden'>
      <div className='container mx-auto'>
        <header className='bg-amber-200'>
          {/* logo */}
          <div>
            <img src={Logo} alt='' />
          </div>
        </header>
        {/* text & image wrapper */}
        <div className='flex flex-col items-center lg:flex-row min-h-[740px]'>
          {/* text */}
          <div className='flex-1'>
            <h1 className='text-5xl text-primary font-bold'>
              Online Accounting <br />{' '}
              <span className='text-accent'>Fast & Uncomplicated</span>
            </h1>
            <p>
              We specialize in small businesses. Our goal is to eliminate
              bureaucracy, creating a modern relationship between your company
              and the accountant.
            </p>
          </div>
          {/* image */}
          <div className='self-end'>
            <img src={GirlImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
