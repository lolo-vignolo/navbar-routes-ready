import { useState } from 'react';
import { InitialValues } from '../components/ProductCard';
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface PropsUseProduct {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: PropsUseProduct) => {
  const [state, setIncrease] = useState(initialValues?.state || value);

  const handleIncrease = (increase: number) => {
    let newAmout = Math.max(state + increase, 0);

    initialValues?.maxCount &&
      (newAmout = Math.min(newAmout, initialValues.maxCount));

    setIncrease(newAmout);

    onChange && onChange({ state: newAmout, product });
  };

  const handleReset = () => {
    setIncrease(initialValues?.state || 0);

    onChange && onChange({ state: 0, product });
  };

  // useEffect(() => {
  //   setIncrease(initialValues?.state || value);
  // }, [initialValues?.state, value]);

  return {
    state,
    handleIncrease,
    isMaxCountReached:
      !!initialValues?.maxCount && state === initialValues.maxCount,

    maxCount: initialValues?.maxCount,
    handleReset,
  };
};

export default useProduct;
