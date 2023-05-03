import React from 'react';
import Img from '../Image/Image';
import github from '../../Img/GitHub.png';
import linkedin from '../../Img/linkedin.png';
import email from '../../Img/Email.png';

function Header() {
  return (
    <div>
      <div className='flex  justify-around p-2 sm:p-5 h-16 sm:h-24 min-h-0 bg-neutral-900'>
        <div className='flex m-2 justify-center items-center w-full sm:w-auto hover:bg-black-700'>
          <Img className='p-1 h-6 sm:h-10' src={github} />
          <a className='text-orange-600 text-base sm:text-3xl ease-in-out bg-green hover:text-white' href='https://github.com/LucasmSantoss'>
            Git Hub
          </a>
        </div>
        <div className='flex m-2 justify-center items-center w-full sm:w-auto hover:bg-black-700'>
          <Img className='p-1 h-6 sm:h-10' src={linkedin} />
          <a className='text-orange-600 text-base sm:text-3xl ease-in-out bg-green hover:text-white' href='https://www.linkedin.com/in/lucas-santos-b133001b9/'>
            LinkedIn
          </a>
        </div>
        <div className='flex m-2 justify-center items-center w-full sm:w-auto hover:bg-black-700'>
          <Img className='p-1 h-6 sm:h-10' src={email} />
          <a className='text-orange-600 text-base sm:text-3xl ease-in-out bg-green hover:text-white' href='mailto:lucasmsantoss95@hotmail.com'>
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
