import { InitialValues } from '../components/ProductCard';

export interface Product {
  id: string;
  img?: string;
  name: string;
}

export interface ProductContextProps {
  handleIncrease: (value: number) => void;
  product: Product;
  state: number;
  initialValues?: InitialValues;
}

export interface OnChangeArgs {
  product: Product;
  state: number;
}

export interface PorductCardHandlers {
  count: number;
  isMaxCountReached?: boolean;
  maxCount?: number;
  product: Product;

  handleIncrease: (value: number) => void;
  handleReset?: () => void;
}
