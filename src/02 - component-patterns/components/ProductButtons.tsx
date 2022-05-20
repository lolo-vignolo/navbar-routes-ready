// interface ProductButtonPorps {
//   state: number;
//   function: (props: number) => void;
// }

import { useContext } from 'react';
import { Productcontext } from './ProductCard';
import styles from '../styles/styles.module.css';

export const ProductButtons = () => {
  const buttonContext = useContext(Productcontext);
  return (
    <div className={styles.buttonsContainer}>
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
