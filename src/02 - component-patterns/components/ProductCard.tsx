import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { createContext, CSSProperties, ReactElement } from 'react';
import {
  OnChangeArgs,
  PorductCardHandlers,
  Product,
  ProductContextProps,
} from '../interfaces/interfaces';

export const Productcontext = createContext({} as ProductContextProps);

const { Provider } = Productcontext;

export interface ProductCardProps {
  children?: (
    args: PorductCardHandlers
  ) => JSX.Element | ReactElement | ReactElement[];
  className?: string;
  onChange?: (args: OnChangeArgs) => void;
  product: Product;
  style?: CSSProperties;
  value?: number;
  initialValues?: InitialValues;
}

export interface InitialValues {
  state?: number;
  maxCount?: number;
}

export const ProductCard = ({
  children,
  className,
  onChange,
  product,
  style,
  value,
  initialValues,
}: ProductCardProps) => {
  const { state, handleIncrease, isMaxCountReached, handleReset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });
  return (
    <Provider value={{ state, handleIncrease, product, initialValues }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children!({
          count: state,
          handleIncrease: handleIncrease,
          handleReset: handleReset,
          isMaxCountReached: isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product: product,
        })}
      </div>
    </Provider>
  );
};
