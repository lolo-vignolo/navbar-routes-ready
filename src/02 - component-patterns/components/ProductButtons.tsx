// interface ProductButtonPorps {
//   state: number;
//   function: (props: number) => void;
// }

import { CSSProperties, useCallback, useContext } from 'react';
import { Productcontext } from './ProductCard';
import styles from '../styles/styles.module.css';

interface ButtonProps {
  amount?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: ButtonProps) => {
  const buttonContext = useContext(Productcontext);
  const { state, handleIncrease, initialValues } = buttonContext;

  const isMaxReached = useCallback(
    () => !!initialValues?.maxCount && initialValues.maxCount === state,
    [state, initialValues?.maxCount]
  );
  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => handleIncrease(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{state}</div>
      <button
        onClick={() => handleIncrease(1)}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disable}`}
      >
        +
      </button>
    </div>
  );
};
