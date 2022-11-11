import React, { useState, useEffect } from 'react';
// import icons
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
// import logo
import Logo from '../assets/img/logo.svg';

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
    <section className='h-screen w-screen bg-hero bg-cover bg-center bg-no-repeat'>
      <div className='container mx-auto'>
        <header>
          {/* logo */}
          <div>
            <img src={Logo} alt='' />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
