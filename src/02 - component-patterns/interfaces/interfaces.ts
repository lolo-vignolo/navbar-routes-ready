import { ReactElement } from 'react';

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  name: string;
  img?: string;
}

export interface ProductContextProps {
  state: number;
  handleIncrease: (value: number) => void;
  product: Product;
}
