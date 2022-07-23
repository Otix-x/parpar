import Button from './Button';

const Product = ({ title, label, img }) => {
  return (
    <div className='flex flex-col uppercase text-center cursor-pointer rounded-xl shadow-md overflow-hidden bg-[#F7ECDE]'>
      <div className='h-[255px] md:h-[325px] overflow-hidden'>
        <img
          className='w-full h-full object-cover transition-all duration-300 hover:scale-105'
          src={img}
        />
      </div>
      <div className='px-3 pt-4 pb-5'>
        <h4 className='line-clamp-2'>{title}</h4>
        <p>-{label}-</p>
        <Button className='text-sm px-6 py-1 mt-4 text-white bg-[#E67878]'>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
