import { useEffect, useMemo } from "react";
import { ProductRepository } from "../services/product";
import { ProductService } from "../services/datasources/remotes/product";
import ProductServiceMock from "../services/datasources/mocks/proudct";
import { ProductRepositoryAble } from "../services/datasources/interfaces/product";

export const HomePage = () => {
  const productRepo: ProductRepositoryAble = useMemo(() => {
    return new ProductRepository(new ProductService());
  }, []);

  useEffect(() => {
    productRepo
      .getProducts()
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <>Hello 20Scoops CNX!</>;
};
