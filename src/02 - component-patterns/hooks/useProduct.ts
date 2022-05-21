import { useEffect, useRef, useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface PropsUseProduct {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

const useProduct = ({ onChange, product, value = 0 }: PropsUseProduct) => {
  const [state, setIncrease] = useState(value);

  const isOnchange = useRef(!!onChange);

  const handleIncrease = (value: number) => {
    if (isOnchange.current) {
      return onChange!({
        product,
        state: value,
      });
    }

    const newAmout = Math.max(state + value, 0);
    setIncrease(newAmout);

    onChange && onChange({ state: newAmout, product });
  };
  useEffect(() => {
    setIncrease(value);
  }, [value]);

  return {
    state,
    handleIncrease,
  };
};

export default useProduct;
