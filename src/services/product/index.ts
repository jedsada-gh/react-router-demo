import {
  ProductRepositoryAble,
  ProductServiceAble,
} from "../datasources/interfaces/product";

export class ProductRepository implements ProductRepositoryAble {
  private service: ProductServiceAble;
  constructor(service: ProductServiceAble) {
    this.service = service;
  }

  getProducts = () => {
    return this.service.reqGetProducts();
  };
}
