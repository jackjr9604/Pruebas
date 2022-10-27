// variables
//almacenar el valor de algo para usar mas tarde
// iniciamos con var un espacio y el nombre de la variable
var nombre
// ademas de declarar una variable, pdemos asignarle un valor con el signo =

  //NOTA las palabras claves o keyeords son palabras especiales que utiliza el lenguaje para indicar algo.

  //tre formas de declarar una variables, var palabra clave para variable, let y const

  var nombre = 'Andres';
  let apellido = 'Vargas';
  const comidafavorita = 'pollo';

//console.log
   //permite imprimir en la consola todo lo que se ponga

// strings
    //bloques de texto siemre entre comillas
    var nombre = 'Andres';

  // Numbers
  var positivo = 27

//boolean
  //provienen de la logica de boole,escencialmente significa que tiene dos opciones, activar o desactivar, verdadero o falso
  var soyelmejor = true;
  //los valores posibles en JS es true o false

// Operadores
  // + - * / (los operadores son funciones)
  var a = 2 + 3; //5

// Orden de Presedencia
    //si se tiene mas de un operador el interprete va a llamara al operador de mayor Presedencia y luego va a seguir con los demas

//Asociatividad de operadores
  // es el orden en el que se ejecutan los operadores cuando tienen la misma presedencia(izquierda a derecha o alcontrario)


//Presedencia
  console.log(3+4*5);
  // va a ejecutar primero la multiplicacion y luego la suma
    console.log(3 + 20);
      console.log(23);

//Asociatividad
  // = tiene una asociatividad de Right to left
var a = 1, b = 2, C =3; = cada variable toma su valor
// se resuelve de derecha a izquierda
a = b = c;// primero se realiza b = c y luego a = b

console.log(a, b , c);
  console.log(3 3 3);

//Math
  //+ - * / =
  1+1=2
  2*2=4

%
21 % 5 =1

//Objetos Globales y metodos
  Math.pow
// pow en math es para devlover el numero elevado a un exponente
math.pow(2,2) = 4;
math.pow(3,3) = 27;

math.round// redondea elnumero entero mas cercano
math.round(6.5) = 7;

match.floor//siempre redondea un numero entero mas cercano hacia abajo
match.floor(6.999) = 6;

math.ceil//redondea el numero mas cercano hacia arriba
math.ceil(6.0001) = 7;

el tipo de datos " String" tiene un metodo incorporado llamado .length
  //devolvera la cantidad de caracteres utilizados en esa cadena
 var nombrePerro = 'Nena';
 console.log(nombrePerro.length);
  console.log(4);

//funciones
  //son tipos particulares de objetos, llamados callable objects
    function mi funcion(){}
    var otra funcion = function () {};
    var yOtra = () => {};

//Anatomia de una funcion
    //comienza con la palabra clave function, despues el nombre de la funcion,
    //un parentesis abrierto y uno cerrao y corchetes ahi ira el codigo a ejecutar

    function logHola() {
        console.log('hola!');// hola!
    }

    logHola();// una funcion siempre necesita parenbtesis para ejecutarse

  //Argumentos
    function logHola(nombre) {
        console.log('hola,  ' + nombre);// hola, Martin
    }

    logHola('Martin');// si se agrega una variable a los parentesis cuando se declare la funcion, se puede usar esa variable dentre de la funcion

//Declaracion "return" y Scope

function sumarDosNumeros(a, b){
  var suma = a + b;// suma de dos numeros
  return suma;
}

sumarDosNumeros(1, 5); //6
sumarDosNumeros(2, 2); //4

  Function dividirDosNumeros(a, b) {
    var producto = a/ b;
    return producto;
  }

  dividirDosNumeros(6,3); //2
  console.log(producto); //undefined

  // si se intenta imprimir console.log algo que se declara dentro de la funcion, devolvera undefined por que se tiene accesoa el fuera de la funcion
  // Esto se llama Scope("alcance"). la unica forma de acceder de algo dentro de la funcion es devolverlo

  Function restarDosNuemros(a, b) {
    var diferencia = a - b;
    return diferencia;
  }

var diferenciaDeResta = restarDosNuemros(10, 9);
console.log(diferenciaDeResta);// 1
console.log(diferencia);//undefined, Podemos ver que la diferencia de establece dentro de una funcion. La variable dentro de la funcion solo pertenece dentro de la funciones

//Control de flujo y operadores de comparacion

function puedeManejar(edad){
  if (edad > 18) {
    return false;
  }

 return false;

}

puedeManejar(22);//true

// se toma el numero(edad) y se verifica si la declaracion es true (22>18) y la funsion se detendra si no es asi y devolvera false

  //Operadores de comparacion
    // <, >, <=, >=, ===(igualdad estricta), ==(comopara los dos elementos si son iguales). comparan y evaluan dos elementos y devuelven verdadero o falso
