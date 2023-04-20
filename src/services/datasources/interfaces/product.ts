export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface ProductServiceAble {
  reqGetProducts(): Promise<IProduct[]>;
}

export interface ProductRepositoryAble {
  getProducts: () => Promise<IProduct[]>;
}
