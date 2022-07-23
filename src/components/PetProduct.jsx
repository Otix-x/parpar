import Button from "./Button";
import { formatCurrency } from "../utilities/formatCurrency";

import { useShoppingCart } from "../context/ShoppingCartContext";

const PetProduct = ({ title, label, img, price, available, id }) => {
  const {
    addPetToCart,
    removePetFromCart,
    getCartItemsCount,
    isPetInCart,
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
        <p>-{label}-</p>
        <p>{formatCurrency(price)}</p>
        {available ? (
          isPetInCart(id) ? (
            <Button
              className="text-sm px-6 py-1 mt-4 text-white bg-[#e67a84]"
              onClick={() => removePetFromCart(id)}
            >
              <span className="text-xs">Remove from cart</span>
            </Button>
          ) : (
            <Button
              className="text-sm px-6 py-1 mt-4 text-white bg-[#42cf99]"
              onClick={() =>
                addPetToCart(id, price, title.concat(` ${label}`), img)
              }
            >
              Add to cart
            </Button>
          )
        ) : (
          <Button className="text-sm px-6 py-1 mt-4 text-white bg-[#968f8f]">
            Not available
          </Button>
        )}
      </div>
    </div>
  );
};

export default PetProduct;
