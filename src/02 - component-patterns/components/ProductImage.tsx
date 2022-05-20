import { CSSProperties, useContext } from 'react';
import noImage from '../assets/noImage.jpg';
import styles from '../styles/styles.module.css';
import { Productcontext } from './ProductCard';

interface ImageProps {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: ImageProps) => {
  const imagCOntext = useContext(Productcontext);
  const { product } = imagCOntext;

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      alt="Product img"
    />
  );
};
