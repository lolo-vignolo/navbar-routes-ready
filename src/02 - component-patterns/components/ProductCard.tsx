import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { createContext } from 'react';
import {
  ProductContextProps,
  ProductCardProps,
} from '../interfaces/interfaces';

export const Productcontext = createContext({} as ProductContextProps);

const { Provider } = Productcontext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { state, handleIncrease } = useProduct(0);
  return (
    <Provider value={{ state, handleIncrease, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
