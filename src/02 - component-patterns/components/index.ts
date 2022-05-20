import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductButtons } from '../components/ProductButtons';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';

//dos formas distintas de hacer lo mismo

export { ProductButtons } from '../components/ProductButtons';
export { ProductImage } from '../components/ProductImage';
export { ProductTitle } from '../components/ProductTitle';

export const ProductCardComp = Object.assign(ProductCardHOC, {
  Buttons: ProductButtons,
  Img: ProductImage,
  Title: ProductTitle,
});
