import { ProductButtons, ProductImage, ProductTitle } from '../components';
import { ProductCard } from '../components/ProductCard';
import styles from '../styles/styles.module.css';
import '../styles/custom-styles.css';

import { UseShoppingCart } from '../hooks/useShoppingCart';
import { listOfProducts } from '../data/products';

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = UseShoppingCart();

  const MyListOfProducts = listOfProducts;

  return (
    <div>
      <h1>shoping store</h1>
      <hr />

      <div className={styles.shopping}>
        {MyListOfProducts.map((product) => {
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
