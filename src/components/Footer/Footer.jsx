import React from 'react'
import youtube_icon from '../../assets/netflix_react_assets/assets/youtube_icon.png'
import twitter_icon from '../../assets/netflix_react_assets/assets/twitter_icon.png'
import instagram_icon from '../../assets/netflix_react_assets/assets/instagram_icon.png'
import facebook_icon from '../../assets/netflix_react_assets/assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='py-[30px] px-[4%] max-w-[1000px] my-0 mx-auto '>
      <div className='flex gap-[20px] my-[40px] mx-0'>
        <img className='w[30px] cursor-pointer' src={facebook_icon} alt="" />
        <img className='w[30px] cursor-pointer' src={youtube_icon} alt="" />
        <img className='w[30px] cursor-pointer' src={instagram_icon} alt="" />
        <img className='w[30px] cursor-pointer' src={twitter_icon} alt="" />
      </div>
      <ul className='grid grid-cols-4 gap-[15px] mb-[30px] list-none'>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cooking Prefrences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='text-gray-400 text-[14px]'>©2002-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
