import {
  ProductButtons,
  ProductCardComp,
  ProductImage,
  ProductTitle,
} from '../components';
import { ProductCard } from '../components/ProductCard';
import styles from '../styles/styles.module.css';
import '../styles/custom-styles.css';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

const product_1 = {
  id: '1',
  img: './coffee-mug.png',
  name: 'Coffee Mug',
};
const product_2 = {
  id: '1',
  img: './logoGame.png',
  name: 'Coffee Mug',
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>shoping store</h1>
      <hr />

      <div className={styles.shopping}>
        <ProductCard className="bg-dark" product={product_1}>
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        {/* dos formas distintas de hacer lo mismo  */}

        <ProductCard className="bg-dark" product={product_1}>
          <ProductCardComp.Img className="custom-image" />
          <ProductCardComp.Title className="text-white text-bold" />
          <ProductCardComp.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          style={{ backgroundColor: '#33a5ff' }}
          className="bg-dark"
          product={product_2}
        >
          <ProductCardComp.Img
            style={{
              width: 'calc(100% - 20px)',
              padding: '10px',
              borderRadius: '20px',
            }}
          />
          <ProductCardComp.Title
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <ProductCardComp.Buttons
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
