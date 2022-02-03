import React from 'react';
import logo from '../images/logo.png';

export default function TitleBar() {
  return (
    <div className='h-14 mb-9 rounded-t-xl bg-[#F55A5A] flex justify-center items-center'>
      <img className='h-6 mr-2' src={logo} alt='logo' />
      <h1 className='text-white text-sm font-normal'>my travel journal.</h1>
    </div>
  );
}
