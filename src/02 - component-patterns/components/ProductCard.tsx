import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { createContext, CSSProperties, ReactElement } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}
export const Productcontext = createContext({} as ProductContextProps);

const { Provider } = Productcontext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
}: ProductCardProps) => {
  const { state, handleIncrease } = useProduct(0);
  return (
    <Provider value={{ state, handleIncrease, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
