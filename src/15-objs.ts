(()=> {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  // tipado especial para producto.
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  }

  const products: Product[] = []; // array de objectos que cumplen con el tipado especificado

  const addProduct = (data: Product) => {
    products.push(data);
  }
  addProduct({
    title: 'pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });
  addProduct({
    title: 'pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'XL',
  });
  products.push({
    title: 'prod3',
    createdAt: new Date(1992,1,1),
    stock: 12,
    size: 'XL',
  })
  console.log(products);

})()
