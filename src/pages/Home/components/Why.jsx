import React from 'react';
import { cartIcon, heartIcon, thumbIcon } from '../../../assets/images';

const Why = () => {
  return (
    <div className='mt-60'>
      <h2 className='text-center font-bold text-7xl'>
        <span className='text-primary'>pick</span> us!
      </h2>
      <div className='flex flex-wrap justify-evenly gap-10 mt-20'>
        <div className='flex flex-col md:w-[266px] items-center rounded-lg px-4 py-10 bg-soft'>
          <img src={heartIcon} />
          <p className='mt-6 text-2xl text-center line-clamp-3'>
            Value and appreciate every client
          </p>
        </div>
        <div className='flex flex-col md:w-[266px] items-center rounded-lg px-4 py-10 bg-soft'>
          <img src={thumbIcon} />
          <p className='mt-6 text-2xl text-center line-clamp-3'>
            Deliver only high-quality goods
          </p>
        </div>
        <div className='flex flex-col md:w-[266px] items-center rounded-lg px-4 py-10 bg-soft'>
          <img src={cartIcon} />
          <p className='mt-6 text-2xl text-center line-clamp-3'>
            Provide best shopping condition
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
