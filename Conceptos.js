// espression
  // es cualquier cosa que devuelve algo
  //si se puede poner dentro de un console.log es una expression si no es un statement

console.log(1+1)
console.log('Hello' + ' World')

// expresiones aritmeticas
10;
1 + 10;
2 * 16;

// expresiones de string
'hola';
'hola' + 'como va?'

//expresiones logicas
10 > 9;
11 === 2;
false;

// expresiones primarias
'hola';
23;
true;
this;//keyword this
var numero = 10;
numero;// variable numero

// expresiones de asignacion
a = 1;

//expresiones con efectos secundarios(side effects)

var contador =1;

contador++; //retorna el valor de contador e incrementa a uno
++contador;// incrementa el valor de contador y retorna el valor
contador *= 3;  //multiplica mult por tres, asigna ese valor a contador y retorna el valor


// statement
    // realiza una accion

//hace algo

 var prueba; // declaro la variable prueba
 var toni;  //declaro la variable toni

 function suma (a, b) { //declaro la funcion suma
   //bloque de codigo
 }

// condicion statements:
if (condicion) {// condicion puede ser cualquier expression
  // ejecuta este bloque si condicion es true
} else if (condicion2){
  //ejecuta este bloque si condicion no es true y condicion2 es true
} else {
  //ejecuta este bloque de codigo si condicion y condicion2 no son true
}

switch (valor) {
  case 'opcion1':
  //se ejecutara si valor es opcion1
  break; //sale del switch
  case 'opcion2':
    //se ejecutara si valor es opcion2
    break;
  case 'opcion3':
    //se ejecutara si valor es opcion3
    break;
  default.
  //se ejecutara siempre
}

// loops
while (condicion) {// condicion es una expression
  // ejecuta este codigo mientras condicion sea true
}

for (var i = 0; i < 10; i++) {
  //ejecuta este bloque de codigo 9 veces
}

// jumps
function () {
  //bloque de codigo
  return; // cuando llegue aca, sale la ejecucion de la funcion y retorna un valor
  //bloque de codigo
}

for (var i = 1; i <10; i++) {
  //ejecuta este bloque de codigo N veces;
  continue; // salta a la siguiente iteracion del bucle;
  //desde aca no se ejecuta
}

throw new Error('hubo un error, se termina la ejecucion');
