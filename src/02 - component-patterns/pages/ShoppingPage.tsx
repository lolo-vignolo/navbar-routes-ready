import { ProductButtons, ProductImage, ProductTitle } from '../components';
import { ProductCard } from '../components/ProductCard';
import styles from '../styles/styles.module.css';
import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';
import { useState } from 'react';

const product_1 = {
  id: '1',
  img: './coffee-mug.png',
  name: 'Coffee Mug',
};
const product_2 = {
  id: '2',
  img: './coffee-mug2.png',
  name: 'Coffee Mug',
};

interface ProdcutInCart extends Product {
  count: number;
}

const listOFProducts: Product[] = [product_1, product_2];

const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProdcutInCart;
  }>({});

  const onProductCountChange = ({
    product,
    state,
  }: {
    product: Product;
    state: number;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (state === 0) {
        delete oldShoppingCart[product.id];
      } else {
        oldShoppingCart[product.id] = {
          ...product,
          count: state,
        };
      }

      return { ...oldShoppingCart };
    });
  };

  return (
    <div>
      <h1>shoping store</h1>
      <hr />

      <div className={styles.shopping}>
        {listOFProducts.map((product) => {
          return (
            <ProductCard
              className="bg-dark"
              product={product}
              key={product.id}
              onChange={onProductCountChange}
              value={
                shoppingCart[product.id] ? shoppingCart[product.id].count : 0
              }
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          );
        })}
      </div>

      <div className="shopping-card">
        {Object.entries(shoppingCart).map(([key, product]) => {
          return (
            <ProductCard
              className="bg-dark"
              key={key}
              onChange={onProductCountChange}
              product={product}
              style={{ width: '100px' }}
              value={product.count}
            >
              <ProductImage className="custom-image" />
              <ProductTitle
                className="text-white text-bold"
                style={{ fontSize: '14px' }}
              />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          );
        })}
      </div>
      <div>
        <code>{JSON.stringify(shoppingCart)}</code>
      </div>
    </div>
  );
};
export default ShoppingPage;
