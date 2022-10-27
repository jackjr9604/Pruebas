// procesan datos uno por uno, especialmente en listas
// por ejemplo sacar los animales de la listas uno por uno

let lista = ['perro', 'gato', 'gallina'];

for (let animal of lista) {
  console.log(animal);// perro
                      // gato
                      // gallina
}

// tambien puedo hacer operaciones con bastantes numeros y sumarle un numero a cada uno

let lista = [1,5,10,21];

for (var numero of lista) {
  console.log(numero + 5);
}

//BUCLE FOR
  // Dry code (Don't Repeat Yourdelf) NO TE REPITAS
(una variable que es un valor)(una condicion)  (un paso a seguir)
    (contar las repeticiones) (frenado)       (paso de incrementacion)
  for    (var i = 0;           i <= 100;            i++) {
    // Bloque de codigo
  }

// imprimir desede el numero 1 al numer 10
  for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
  // ingresar este bucle a una funcion
  function imprimeHastaN(n) {
    for (var i = 1; i <= n ; i++) {
      console.log(i);
    }
  }
  imprimeHastaN(10) // 1
                    // 2
                    // 3
                    // 4
                    // 5
                    // 6
                    // 7
                    // 8
                    // 9
                    // 10

// todo lo q se ha aprendido hasta el momento se puede colocar aqui
  //por ejemplo if para imprimir numeros pares

function pares(n) {
  for (var i = 1; i <= n ; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

pares(10)//2
        // 4
        // 6
        // 8
        // 10

// y asi mismo se puede seguir trabajando la funcion
function pares(n) {
  for (var i = 1; i <= n ; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
    if (i > 50) {
      return;
    }
  }
}
pares(100)// va a imprimir de 2 en 2 hasta llegar a 50 por que se va a cumpli la ultima
            // condicion y va a terminar la ejecucion

//se puede agregar otro bucle for dentro de laguna condicion
function pares(n) {
  for (var i = 1; i <= n ; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
    if (i > 50) {
    for (var j = 0; j < 10 ; j++) {
        console.log(j);
    }
    return;
  }
}
}
pares(51)// va a imprimir los numero de 2 en 2 hasta llegar a 50 y cuando i sea
              //mayor que n va a ejecutar la 2da condicion que es contar desde 0 hasta 10

// BUCLE ANIDADO
    //crea una matriz
      //m = filas
      //n = columnas
  function matriz(n, m) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < m; j++) {
        console.log(i + ',' + j);
      }
    }
  }
               // 1 y 2
  matriz(2, 5)  // 0,0    1
                // 0,1    2
                // 0,2    3
                // 0,3    4
                // 0,4    5
                // 1,0    1
                // 1,1    2
                // 1,2    3
                // 1,3    4
                // 1,4    5

//BUCLE while
      // mientras esta condicion sea true el codigo se va a repetir indefinidas veces
while (condicion) {
  //bloque de codigo
}

var i = 0; // se establece el valor de i
while (i < 100) {// se establece la condicion verdaderia
  console.log(i);// se da el paso a seguir si la condicion es true
  i++; // incrementar i, para que no se haga un bucle infinito( si no se coloca en este caso va a imprimir 0 infinitas veces)
}// va a imprimir los numeros de 1 al 100


// se puede tambier hacer una matriz
var i = 0;
var j = 0;
function functionName(n, m) {
  while (i < n) {
  while (j < m) {
    console.log(i, j);
    j++; //tambien se puede poner j = j + 1;
  }
  j = 0; // se debe reiniciar j a 0, por q j va a quedar en su maximo valor y si no se reinicia nunca va a volver a entrar en la funcion del bucle
  i++;//tambien se puede poner i = i + 1;
}
}
matriz(2,3) // 0 0
            // 0 1
            // 0 2
            // 1 0
            // 1 1
            // 1 2

// diferencia entre while y For
  // en for al escribir Ej:
    i < m://ya estoy escribiendo la condicion de parada de i hasta m y fin

// pero si no conozco una condicion de parada es mejor utilizar el while para que la condicion
    // siga funcionando hasta que ya no se cumpla termina la funcion pero no se sabae cuantas veces se va a repetir hasta que se termine
