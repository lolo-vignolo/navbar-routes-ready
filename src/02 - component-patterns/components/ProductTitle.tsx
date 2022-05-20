import { CSSProperties, useContext } from 'react';
import { Productcontext } from './ProductCard';
import styles from '../styles/styles.module.css';

interface TextTitleProps {
  name?: string;
  className?: string;
  style?: CSSProperties;
}
//ese name:string es una mini interface
export const ProductTitle = ({ name, className, style }: TextTitleProps) => {
  const titleContext = useContext(Productcontext);
  const { product } = titleContext;
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {name ? name : product.name}
    </span>
  );
};
