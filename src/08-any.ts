(()=> {
  let myDynamicVar: any; // cualquier cosa puede ir
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = [];
  myDynamicVar = '';


  myDynamicVar = 'Hi';
  const rta = (myDynamicVar as string).toLowerCase(); // aquí puedo hacer que sea tratado como string con as
  console.log(rta);

  myDynamicVar = 1212.1217;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);

})()
