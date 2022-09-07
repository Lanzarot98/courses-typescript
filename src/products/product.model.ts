// modulos para exportar

export type Sizes = 'S' | 'M' | 'L' | 'XL';

  // tipado especial para producto.
export type Product = {
  name: string,
  createdAt: Date,
  stock: number,
  size?: Sizes,
};
