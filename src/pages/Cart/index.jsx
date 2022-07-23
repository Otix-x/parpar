import { Link } from 'react-router-dom';

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from '../../components/Container';
import MainLayout from '../../layouts/MainLayout';
import Button from '../../components/Button';

import { productCartImg, uncheckIcon } from '../../assets/images';

import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';

const Cart = () => {
  const {
    getCart,
    getCartItemsCount,
    getCartTotalPrice,
    removePetFromCart,
    removeProductFromCart,
    increaseProductInCart,
    decreaseProductInCart,
  } = useShoppingCart();

  const paddingY = 'py-3';

  return (
    <MainLayout>
      <Container className='mt-40'>
        <h2 className='text-4xl md:text-7xl font-bold text-center'>
          YOUR <span className='text-primary'>CART</span>
        </h2>

        {getCartItemsCount() === 0 ? (
          <div className='mt-20 h-40 flex flex-grow justify-center items-center font-bold text-3xl'>
            Your cart is empty
          </div>
        ) : (
          <div className='mt-10'>
            <div className='rounded-md overflow-hidden border border-gray-200'>
              <table className='w-full bg-white'>
                <thead>
                  <tr>
                    <th className='py-2 pl-4'>
                      <div className='flex items-center gap-2'>
                        <span>Items</span>
                      </div>
                    </th>
                    <th className='py-2'>Unit price</th>
                    <th className='py-2'>Quantity</th>
                    <th className='py-2'>Total price</th>
                  </tr>
                </thead>
                <tbody className='text-sm'>
                  {getCart().pets.map((pet) => (
                    <tr key={pet.petID} className='border-t border-gray-200'>
                      <td className={`pl-4 pr-3 ${paddingY}`}>
                        <div className='flex items-center gap-2'>
                          <img
                            src={pet.petImage}
                            className='w-16 cursor-pointer'
                          />
                          <p>{pet.petLabel}</p>
                        </div>
                      </td>
                      <td className={`px-2 ${paddingY}`}>
                        <p className='text-center whitespace-nowrap'>
                          {formatCurrency(pet.petPrice)}
                        </p>
                      </td>
                      <td className={paddingY}>
                        <div className='flex-center gap-3'>
                          <FontAwesomeIcon
                            className='cursor-pointer'
                            icon={faChevronLeft}
                          />
                          <span className='px-3 py-1 rounded-md bg-gray-200'>
                            1
                          </span>
                          <FontAwesomeIcon
                            className='cursor-pointer'
                            icon={faChevronRight}
                          />
                        </div>
                      </td>
                      <td className={`px-2 ${paddingY}`}>
                        <p className='text-center whitespace-nowrap'>
                          {formatCurrency(pet.petPrice)}
                        </p>
                      </td>
                      <td className={`px-2 ${paddingY}`}>
                        <Button
                          className='ml-4 text-sm px-4 py-1 text-white bg-[#e67a84]'
                          onClick={() => {
                            removePetFromCart(pet.petID);
                          }}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                  {getCart().products.map((product) => (
                    <tr
                      key={product.petID}
                      className='border-t border-gray-200'>
                      <td className={`pl-4 pr-3 ${paddingY}`}>
                        <div className='flex items-center gap-2'>
                          <img
                            src={product.productImage}
                            className='w-16 cursor-pointer'
                          />
                          <p>{product.productName}</p>
                        </div>
                      </td>
                      <td className={`px-2 ${paddingY}`}>
                        <p className='text-center whitespace-nowrap'>
                          {formatCurrency(product.productPrice)}
                        </p>
                      </td>
                      <td className={paddingY}>
                        <div className='flex-center gap-3'>
                          <FontAwesomeIcon
                            className='cursor-pointer'
                            icon={faChevronLeft}
                            onClick={() => {
                              if (product.qty !== 1)
                                decreaseProductInCart(product.productID);
                            }}
                          />
                          <span className='px-3 py-1 rounded-md bg-gray-200'>
                            {product.qty}
                          </span>
                          <FontAwesomeIcon
                            className='cursor-pointer'
                            icon={faChevronRight}
                            onClick={() => {
                              if (product.qty !== product.productStock)
                                increaseProductInCart(product.productID);
                            }}
                          />
                        </div>
                      </td>
                      <td className={`px-2 ${paddingY}`}>
                        <p className='text-center whitespace-nowrap'>
                          {formatCurrency(product.productPrice * product.qty)}
                        </p>
                      </td>
                      <td className={`px-2 ${paddingY}`}>
                        <Button
                          className='ml-4 text-sm px-4 py-1 text-white bg-[#e67a84]'
                          onClick={() => {
                            removeProductFromCart(product.productID);
                          }}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='text-end mt-10'>
              <div>
                <span>TOTAL: </span>
                <span className='font-bold text-3xl'>
                  {formatCurrency(getCartTotalPrice())}
                </span>
              </div>
              <Link to='/client'>
                <button className='rounded-md px-5 py-2 font-bold text-2xl mt-3 text-white bg-primary'>
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </MainLayout>
  );
};

export default Cart;
