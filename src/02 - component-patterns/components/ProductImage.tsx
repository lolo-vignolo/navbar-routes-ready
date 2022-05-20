import { useContext } from 'react';
import noImage from '../assets/noImage.jpg';
import styles from '../styles/styles.module.css';
import { Productcontext } from './ProductCard';

export const ProductImage = ({ img = '' }) => {
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
    <img className={styles.productImg} src={imgToShow} alt="Product img" />
  );
};
