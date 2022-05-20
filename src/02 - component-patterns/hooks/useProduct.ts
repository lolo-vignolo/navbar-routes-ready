import { useState } from 'react';

const useProduct = (inisitalState: number) => {
  const [state, setIncrease] = useState(inisitalState);

  const handleIncrease = (amount: number) => {
    setIncrease((prev) => Math.max(prev + amount, 0));
  };

  return {
    state,
    handleIncrease,
  };
};

export default useProduct;
