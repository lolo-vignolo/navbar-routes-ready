import {
  ProductButtons,
  ProductCardComp,
  ProductImage,
  ProductTitle,
} from '../components';
import { ProductCard } from '../components/ProductCard';
import styles from '../styles/styles.module.css';

const product_1 = {
  id: '1',
  name: 'Coffee Mug',
  img: './coffee-mug.png',
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>shoping store</h1>
      <hr />

      <div className={styles.shopping}>
        <ProductCard product={product_1}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        {/* dos formas distintas de hacer lo mismo  */}

        <ProductCard product={product_1}>
          <ProductCardComp.Img />
          <ProductCardComp.Title />
          <ProductCardComp.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
