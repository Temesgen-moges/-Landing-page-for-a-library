import React from 'react';

const Footer = () => {
  return (
    <div className='relative z-10 w-full dark:bg-black dark:border-t dark:border border-white p-2 dark:text-white duration-300'>
      <div className='absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white via-white to-transparent dark:shadow-sm  shadow-lg'></div>
      <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
        <div className='w-full md:w-1/4'>
          <h1 className='font-semibold text-xl pb-4'>Ethio Tour</h1>
          <p className='text-sm'>
          we excited to inform you that this One library website has been developed by Group-2.
          </p>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
          <nav className='flex flex-col gap-2'>
            <a className='hover:text-orange-600 transition-all cursor-pointer' href="to='home'">Home</a>
            <a className='hover:text-orange-600 transition-all cursor-pointer' href="to='dishes'">About</a>
            <a className='hover:text-orange-600 transition-all cursor-pointer' href="">category</a>
            
          </nav>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Menu</h1>
          <nav className='flex flex-col gap-2'>
            <a className='hover:text-orange-600 transition-all cursor-pointer' href="">children</a>
            <a className='hover:text-orange-600 transition-all cursor-pointer' href="">teenagers</a>
            <a className='hover:text-orange-600 transition-all cursor-pointer' href="">adalts</a>
          </nav>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
          <nav className='flex flex-col gap-2'>
            <a className='hover:text-orange-600 transition-all cursor-pointer' href="">wku</a>
            <a className='hover:text-orange-600 transition-all cursor-pointer' href="">+251985246737</a>
            <a className='hover:text-orange-600 transition-all cursor-pointer' href="">Social media</a>
          </nav>
        </div>
      </div>
      <div>
        <p className='text-center py-4'>
          @copyright developed by <span className='text-orange-600'>Group-2.</span>  All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
