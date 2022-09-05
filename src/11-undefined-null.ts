(()=>{
  // let myNumber: number;
  let myName: string;
  let myNull: null = null; // queda tipo any si no especificamos
  let myUndefined: undefined = undefined; // queda tipo any si no especificamos

  let myNumber: number | null = null; //
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'how';

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  // otra forma con menos lineas:
  function hiV2(name: string | null) {
    let hello = 'Hola ';
    // si no se puede aplicar el lowerCase a name, entonces se aplica el 'nobody'
    hello += name?.toLowerCase() || 'nobody'; // para no tener que hacer el if coloca el signo de pregunta
    console.log(hello);
  }

  hi('Luis');
  hi(null);

  hiV2('Luis');
  hiV2(null);
})();
