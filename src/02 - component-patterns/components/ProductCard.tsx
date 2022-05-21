import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { createContext, CSSProperties, ReactElement } from 'react';
import {
  OnChangeArgs,
  Product,
  ProductContextProps,
} from '../interfaces/interfaces';

export const Productcontext = createContext({} as ProductContextProps);

const { Provider } = Productcontext;

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  className?: string;
  onChange?: (args: OnChangeArgs) => void;
  product: Product;
  style?: CSSProperties;
  value?: number;
}

export const ProductCard = ({
  children,
  className,
  onChange,
  product,
  style,
  value,
}: ProductCardProps) => {
  const { state, handleIncrease } = useProduct({ onChange, product, value });
  return (
    <Provider value={{ state, handleIncrease, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
