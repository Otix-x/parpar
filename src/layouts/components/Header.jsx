import { Link } from 'react-router-dom';

import { bagIcon, logo, searchIcon, shopping } from '../../assets/images';

import Container from '../../components/Container';

import { useShoppingCart } from '../../context/ShoppingCartContext';

const Header = () => {
  const { getCartItemsCount } = useShoppingCart();

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-[#F7ECDE]'>
      <Container className='flex flex-wrap gap-4 items-center py-2'>
        <Link to='/' className='flex items-center mr-6 cursor-pointer select-none'>
          <img src={logo} className='pt-2 w-14 md:w-auto' />
          <span className='text-xl md:text-4xl text-primary'>parpar___</span>
        </Link>
        <ul className='hidden md:flex gap-10'>
          <Link to='/' className='transition cursor-pointer hover:text-primary'>
            HOME
          </Link>
          <Link to='/puppies' className='transition cursor-pointer hover:text-primary'>
            PUPPIES
          </Link>
          <Link to='/kitties' className='transition cursor-pointer hover:text-primary'>
            KITTIES
          </Link>
          <Link to='/products' className='transition cursor-pointer hover:text-primary'>
            PRODUCTS
          </Link>
          <li className='transition cursor-pointer hover:text-primary'>ABOUT US</li>
          <li className='transition cursor-pointer hover:text-primary'>CONTACT</li>
        </ul>
        <div className='flex gap-6 ml-auto'>
          <Link to='/cart' className='relative'>
            <img className='w-6 h-6 hover:fill-white' src={shopping} />
            {getCartItemsCount() !== 0 && (
              <div className='absolute -top-2 left-[calc(100%-10px)] font-bold text-xs rounded-full text-white px-2 py-0.5 bg-red-400 flex items-center justify-center font-mono'>
                {getCartItemsCount()}
              </div>
            )}
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
