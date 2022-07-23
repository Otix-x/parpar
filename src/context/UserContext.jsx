import { useLocalStorage } from "../hooks/useLocalStorage";

import { createContext, useContext, useState } from "react";

const UserContext = createContext({});

/*

addPetToCart(id) => void
  removePetFromCart(id) => void

cartItems = {
  pets = [{
    petID, petPrice, petLabel, petImage 
  }],
  products = [{
    productID, productName, productPrice, productQty, productImage, productStock
  }]
}
*/

export function useUser() {
  return useContext(ShoppingCartContext);
}

export function UserProvider() {
  const [userInfo, setUserInfo] = useLocalStorage("user-info", {
    username: "",
  });
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", {
    pets: [],
    products: [],
  });

  function getProductQuantity(productID) {
    return cartItems.products.find((e) => e.productID === productID).qty;
  }

  function isProductInCart(productID) {
    if (cartItems.products.some((e) => e.productID === productID)) {
      return true;
    }
    return false;
  }

  function clearShoppingCart() {
    setCartItems({
      pets: [],
      products: [],
    });
  }

  function addProductToCart(
    productID,
    productName,
    productPrice,
    productImage,
    productStock
  ) {
    setCartItems((oldCartItems) => {
      return {
        ...oldCartItems,
        products: [
          ...oldCartItems.products,
          {
            productID: productID,
            qty: 1,
            productName: productName,
            productPrice: productPrice,
            productImage: productImage,
            productStock: productStock,
          },
        ],
      };
    });
  }

  function decreaseProductInCart(productID) {
    setCartItems((oldCartItems) => {
      let product = oldCartItems.products.find(
        (e) => e.productID === productID
      );
      let oldQty = product.qty;

      let newProducts = [
        ...oldCartItems.products.filter((e) => e.productID !== productID),
        { ...product, qty: oldQty - 1 },
      ];

      return {
        ...oldCartItems,
        products: newProducts,
      };
    });
  }

  function increaseProductInCart(productID) {
    setCartItems((oldCartItems) => {
      let product = oldCartItems.products.find(
        (e) => e.productID === productID
      );
      let oldQty = product.qty;

      let newProducts = [
        ...oldCartItems.products.filter((e) => e.productID !== productID),
        { ...product, qty: oldQty + 1 },
      ];

      return {
        ...oldCartItems,
        products: newProducts,
      };
    });
  }

  function removeProductFromCart(productID) {
    setCartItems((oldCartItems) => {
      return {
        ...oldCartItems,
        products: oldCartItems.products.filter(
          (p) => p.productID !== productID
        ),
      };
    });
  }

  function getCart() {
    return cartItems;
  }

  function isPetInCart(petID) {
    if (cartItems.pets.some((e) => e.petID === petID)) {
      return true;
    }
    return false;
  }

  function getCartItemsCount() {
    return cartItems.pets.length + cartItems.products.length;
  }

  function addPetToCart(petID, petPrice, petLabel, petImage) {
    setCartItems((prevCartItems) => {
      return {
        ...prevCartItems,
        pets: [
          ...prevCartItems.pets,
          {
            petID: petID,
            petPrice: petPrice,
            petLabel: petLabel,
            petImage: petImage,
          },
        ],
      };
    });
  }

  function removePetFromCart(petID) {
    setCartItems((prevCartItems) => {
      return {
        ...prevCartItems,
        pets: prevCartItems.pets.filter((p) => p.petID !== petID),
      };
    });
  }

  function getCartTotalPrice() {
    let ret = 0;

    cartItems.pets.forEach((pet) => (ret = ret + pet.petPrice));
    cartItems.products.forEach(
      (product) => (ret = ret + product.productPrice * product.qty)
    );

    return ret;
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        addPetToCart,
        getCartItemsCount,
        getCartTotalPrice,
        removePetFromCart,
        isPetInCart,
        getCart,
        clearShoppingCart,
        isProductInCart,
        addProductToCart,
        removeProductFromCart,
        increaseProductInCart,
        getProductQuantity,
        decreaseProductInCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
