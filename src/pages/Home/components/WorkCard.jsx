import React from 'react';

const WorkCard = ({ title, desc, img }) => {
  return (
    <div className='flex items-center gap-6 px-4 py-6 rounded-lg text-white bg-[#E77878]'>
      <img className='w-[105px] object-cover' src={img} />
      <div>
        <h3 className='font-bold'>{title}</h3>
        <p className='text-sm mt-2'>{desc}</p>
      </div>
    </div>
  );
};

export default WorkCard;
