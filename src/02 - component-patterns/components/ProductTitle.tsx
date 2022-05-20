import { useContext } from 'react';
import { Productcontext } from './ProductCard';
import styles from '../styles/styles.module.css';

//ese name:string es una mini interface
export const ProductTitle = ({ name }: { name?: string }) => {
  const titleContext = useContext(Productcontext);
  const { product } = titleContext;
  return (
    <span className={styles.productDescription}>
      {name ? name : product.name}
    </span>
  );
};
