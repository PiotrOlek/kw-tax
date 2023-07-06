/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import logo
import Logo from '../assets/Logo_KWTax.png';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' style={{width: '200px', height: '130px'}}/>
        </a>

        {/* button */}
        <button className='btn btn-sm'>Sprawdź naszą oferte</button>
      </div>
    </div>
  </header>;
};

export default Header;
