import { Product } from './product.model';

export const products: Product[] = []; // array de objectos que cumplen con el tipado especificado

export const createProduct = (data: Product) => {
  products.push(data);
}

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });
  return  total;
}


