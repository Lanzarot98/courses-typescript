(() => {
  let prices = [1,2,2,1,1,212]; // puedo tener de los 3 tipos
  // prices.push('asas');
  // prices.push(true); error ya que solo admite en el array números.
  prices.push(1122);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] = ['hola', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push([]);
  mixed.push({});

  let numbers = [...prices];
  numbers.map((item) => item * 2); // esto se puede ya que el array numbers es un array de numbers.

})()
