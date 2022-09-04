(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1'; // 281 TS ME Advierte que estoy sumando un numero con string que es también un num
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('123');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b1010; // tipo binario (inicio 0b)
  console.log('bin', bin);

  const myNumber: number = 10; // no utilizar number en mayúscula ya que significa otra cosa.

})();
