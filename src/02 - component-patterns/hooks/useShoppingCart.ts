import { useState } from 'react';

import { Product } from '../interfaces/interfaces';
export interface ProdcutInCart extends Product {
  count: number;
}

export const UseShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProdcutInCart;
  }>({});

  const onProductCountChange = ({
    product,
    state,
  }: {
    product: Product;
    state: number;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (state === 0) {
        const { [product.id]: removed, ...newShoppingCart } = oldShoppingCart;
        return newShoppingCart;
      }

      const newShoppingCart = { ...oldShoppingCart };
      newShoppingCart[product.id] = { ...product, count: state };
      return newShoppingCart;
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
