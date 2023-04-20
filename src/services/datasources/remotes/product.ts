import RemoteA from "../../remote.a";
import { IProduct, ProductServiceAble } from "../interfaces/product";

export class ProductService extends RemoteA implements ProductServiceAble {
  reqGetProducts(): Promise<IProduct[]> {
    return new Promise((resolve, reject) => {
      this.getInstance()
        .get<IProduct[]>("/products")
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
}
