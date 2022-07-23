import { useState } from 'react';

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import PaginateButton from '../../../components/PaginateButton';
import Product from '../../../components/Product';

import products from '../../../assets/data/products';

const SelectButton = ({ text, selected, ...rest }) => {
  return (
    <button
      {...rest}
      className={`relative ${rest.className} font-bold group transition-all duration-200 hover:text-primary`}>
      {text}
      {selected && (
        <div className='absolute top-[calc(100%+2px)] left-3 right-3 h-[2px] bg-gray-600 transition-all group-hover:bg-primary' />
      )}
    </button>
  );
};

const LIMIT = 8;

const ProductList = () => {
  const [page, setPage] = useState(1);

  const disablePrev = page === 1;
  const disableNext = page * LIMIT >= products.length;

  const getProducts = () => {
    const end = page * LIMIT;
    const start = end - LIMIT;

    return products.slice(start, end);
  };

  return (
    <div className='mt-20 pb-20'>
      <h2 className='text-center font-bold text-6xl md:text-8xl'>products</h2>
      <div className='flex items-center justify-center gap-6 mt-12 text-sm'>
        <SelectButton selected text='ALL PRODUCTS' />
        <SelectButton text='PETS' />
        <SelectButton text='PETS PRODUCT' />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-10 mt-16'>
        {getProducts().map((product, index) => (
          <Product
            key={index}
            title={product.title}
            label={product.label}
            img={product.img}
          />
        ))}
      </div>

      <div className='flex-center gap-4 mt-6'>
        <PaginateButton
          disable={disablePrev}
          onSetPage={() => setPage(page - 1)}
          icon={faAngleLeft}
        />
        <PaginateButton
          disable={disableNext}
          onSetPage={() => setPage(page + 1)}
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default ProductList;
