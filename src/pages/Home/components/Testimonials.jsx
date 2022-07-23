import {
  client1Img,
  client2Img,
  client3Img,
  feetImg,
  lineImg,
} from '../../../assets/images';

const Testimonials = () => {
  return (
    <div>
      <h2 className='relative text-center font-bold text-4xl md:text-7xl'>
        look through <br /> our clients{' '}
        <span className='text-primary'>testimonials</span>
        <img src={feetImg} className='absolute right-0 top-0 z-[-1]' />
        <img
          className='hidden lg:block absolute top-[124px] right-[310px] z-[-1]'
          src={lineImg}
        />
      </h2>
      <div className='flex flex-col gap-20 mt-20'>
        <div className='relative flex items-center gap-6 p-6 md:w-2/4 rounded-lg shadow-primary bg-soft'>
          <img src={client1Img} />
          <div>
            <h3 className='font-bold'>Hudson Hintze</h3>
            <p>
              Friendly and prices are cheaper than big box stores for the same
              products. Other higher quality products are also available.
            </p>
          </div>
          <img
            src={feetImg}
            className='absolute left-16 top-[calc(100%+40px)] w-48 rotate-6 z-[-1]'
          />
        </div>
        <div className='flex items-center gap-6 p-6 md:w-2/4 ml-auto rounded-lg shadow-primary bg-soft'>
          <img src={client2Img} />
          <div>
            <h3 className='font-bold'>Maria</h3>
            <p>
              Lower prices on just about everything my local pet shop sells. I
              now buy all my dog treats and toys online. Shipping is cheap and
              they have a friendly staff when you call in
            </p>
          </div>
        </div>
        <div className='relative flex items-center gap-6 p-6 md:w-2/4 rounded-lg shadow-primary bg-soft'>
          <img src={client3Img} />
          <div>
            <h3 className='font-bold'>Bale</h3>
            <p>
              Excellent service with owners and staff who are prepared to “go
              the extra mile”. Dougall loves his new food and delicious treats.
              Would highly recommend you.
            </p>
          </div>
          <img
            src={feetImg}
            className='hidden lg:block absolute top-6 left-[calc(100%+120px)] w-64 -rotate-45 z-[-1]'
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
