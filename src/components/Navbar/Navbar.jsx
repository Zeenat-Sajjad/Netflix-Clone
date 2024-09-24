import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import logo from '../../assets/netflix_react_assets/assets/logo.png';
import search_icon from '../../assets/netflix_react_assets/assets/search_icon.svg';
import bell_icon from '../../assets/netflix_react_assets/assets/bell_icon.svg';
import profile_img from '../../assets/netflix_react_assets/assets/profile_img.png';
import caret_icon from '../../assets/netflix_react_assets/assets/caret_icon.svg';
import './Navbar.css';
import { logout } from '../../firebase';

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add('nav-dark');
        } else {
          navRef.current.classList.remove('nav-dark');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className='w-full px-6 py-5 flex fixed justify-between font-poppins text-sm text-gray-300 bg-black z-10'>
      <div className="flex items-center gap-10">
        <img className='w-[90px] ml-[90px] mr-[20px]' src={logo} alt="Netflix Logo" />
        <ul className='flex list-none gap-[20px]'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>TV Shows</li>
          <li className='cursor-pointer'>Movies</li>
          <li className='cursor-pointer'>New & Popular</li>
          <li className='cursor-pointer'>My List</li>
          <li className='cursor-pointer'>Browse by Languages</li>
          <li></li><Link to="/favorites" className='text-white'>Favorites
</Link><li/>
        </ul>
      </div>
      <div className="flex gap-[20px] items-center mr-[40px]">
        <img src={search_icon} alt="Search" className='w-[20px] cursor-pointer' />
        <p>Children</p>
        <img src={bell_icon} alt="Notifications" className='w-[20px] cursor-pointer' />
        <div className='relative flex items-center gap-[15px] cursor-pointer group'>
          <img src={profile_img} alt="Profile" className='rounded w-[35px]' />
          <img src={caret_icon} alt="Caret" className='w-[15px]' />
          <div className='absolute top-[100%] right-0 w-max bg-[#191919] py-4.5 px-5.5 underline rounded-[2px] text-[13px] hidden group-hover:block'>
            <p onClick={logout} className='cursor-pointer'>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


