export interface IProduct {
  // Interface for product response
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface ProductServiceAble {
  // Interface for product service

  reqGetProducts(): Promise<IProduct[]>;
}

export interface ProductRepositoryAble {
  // interface for product repository
  getProducts: () => Promise<IProduct[]>;
}
