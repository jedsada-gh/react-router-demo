import { IProduct, ProductServiceAble } from "../interfaces/product";

class ProductServiceMock implements ProductServiceAble {
  reqGetProducts(): Promise<IProduct[]> {
    return new Promise<IProduct[]>((resolve, _reject) => {
      resolve([
        {
          id: 1,
          name: "Product 1",
          description: "This is the description for product 1.",
          price: 9.99,
          category: "Category 1",
        },
      ]);
    });
  }
}

export default ProductServiceMock;
