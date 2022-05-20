export interface Product {
  id: string;
  img?: string;
  name: string;
}

export interface ProductContextProps {
  handleIncrease: (value: number) => void;
  product: Product;
  state: number;
}
