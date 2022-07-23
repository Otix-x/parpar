import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "./Button";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const ProductCard = ({ title, forPet, quantity, img, price, id }) => {
  const {
    addProductToCart,
    removeProductFromCart,
    isProductInCart,
    increaseProductInCart,
    decreaseProductInCart,
    getProductQuantity,

    getCartItemsCount,
    getCart,
  } = useShoppingCart();

  return (
    <div className="flex flex-col uppercase text-center cursor-pointer rounded-xl shadow-md overflow-hidden bg-[#F7ECDE]">
      <div className="h-[255px] md:h-[325px] overflow-hidden">
        <img
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
          src={img}
        />
      </div>
      <div className="px-3 pt-4 pb-5">
        <h4 className="line-clamp-2">{title}</h4>
        <p className="text-sm">for: {forPet}</p>
        {quantity !== 0 && <p className="text-sm">in stock: {quantity}</p>}
        <p className="mb-2">{formatCurrency(price)}</p>
        {quantity !== 0 ? (
          isProductInCart(id) ? (
            <div>
              <FontAwesomeIcon
                className="mr-4 cursor-pointer"
                icon={faChevronLeft}
                onClick={() => {
                  if (getProductQuantity(id) !== 1) decreaseProductInCart(id);
                }}
              />
              <span className="px-3 py-0.25 rounded-md bg-gray-200">
                {getProductQuantity(id)}
              </span>
              <FontAwesomeIcon
                className="ml-4 cursor-pointer"
                icon={faChevronRight}
                onClick={() => {
                  if (getProductQuantity(id) !== quantity) {
                    increaseProductInCart(id);
                  }
                }}
              />
              <Button
                className="text-sm px-6 py-1 mt-2 text-white bg-[#e67a84]"
                onClick={() => removeProductFromCart(id)}
              >
                <span className="text-sm">Remove from cart</span>
              </Button>
            </div>
          ) : (
            <Button
              className="text-sm px-6 py-1 mt-4 text-white bg-[#42cf99]"
              onClick={() => addProductToCart(id, title, price, img, quantity)}
            >
              Add to cart
            </Button>
          )
        ) : (
          <Button className="text-sm px-6 py-1 mt-4 text-white bg-[#968f8f]">
            Out of stock
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
