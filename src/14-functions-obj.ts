(()=> {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  // login('luis@gmail.com', '123123');
  login({
    email: 'luis@gmail.com',
    password: 123123,
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  }) => {
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
  console.log(products);
})()
