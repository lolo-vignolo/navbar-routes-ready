// interface ProductButtonPorps {
//   state: number;
//   function: (props: number) => void;
// }

import { CSSProperties, useContext } from 'react';
import { Productcontext } from './ProductCard';
import styles from '../styles/styles.module.css';

interface ButtonProps {
  amount?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style, amount }: ButtonProps) => {
  const buttonContext = useContext(Productcontext);
  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button
        onClick={() => buttonContext.handleIncrease(-1)}
        className={styles.buttonMinus}
      >
        -
      </button>
      <div className={styles.countLabel}>{buttonContext.state}</div>
      <button
        onClick={() => buttonContext.handleIncrease(1)}
        className={styles.buttonAdd}
      >
        +
      </button>
    </div>
  );
};
