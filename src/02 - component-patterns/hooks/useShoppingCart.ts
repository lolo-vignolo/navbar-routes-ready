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
      const productInCart: ProdcutInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + state, 0) > 0) {
        productInCart.count += state;
        console.log(productInCart);
        console.log(oldShoppingCart);

        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
