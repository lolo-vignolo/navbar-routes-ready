import { ProductButtons, ProductImage, ProductTitle } from '../components';
import { ProductCard } from '../components/ProductCard';
import styles from '../styles/styles.module.css';

import '../styles/custom-styles.css';

import { listOfProducts } from '../data/products';

const ShoppingPage = () => {
  const MyProdcut = listOfProducts[0];

  return (
    <div>
      <h1>shoping store</h1>
      <hr />
      <ProductCard
        className="bg-dark"
        product={MyProdcut}
        key={MyProdcut.id}
        initialValues={{ state: 5, maxCount: 10 }}
      >
        {/* esta arrowFunction es el children que tengo en el ProductCard, o sea cualquier argumento que envío alla, lo recibo aca. */}
        {({
          handleReset,
          count,
          handleIncrease,
          isMaxCountReached,
          maxCount,
          product,
        }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
            <div className={styles.fotter}>
              <button className={styles.reset} onClick={handleReset}>
                Reset
              </button>
              {!isMaxCountReached ? (
                <button onClick={() => handleIncrease(2)}> +2</button>
              ) : null}

              <button onClick={() => handleIncrease(-2)}> -2 </button>
              <h2> {count}</h2>
            </div>
          </>
        )}
      </ProductCard>
    </div>
  );
};
export default ShoppingPage;
