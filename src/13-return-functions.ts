(() => {
  const calcTotal = (prices: number[]): string => { // puedo especificar que tipo de dato retorna la función
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }

  // puedo hacer que la función no retorne nada si hacemos el (): void => (...)
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);

  }

  printTotal([1,2,1,1,1]);
  // console.log(rta);
})();
