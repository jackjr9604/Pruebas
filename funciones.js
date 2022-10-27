// una funcion  sirve para ingresar datos procesarlos y sacar la informacion de una forma diferente
// es una lista de instrucciones para hacer lo q se quiera

function nombreDeLaFuncion(argumento1, argumento2){
  //codigo de la funcion

  return; // si la funcion no tiene retorno o finaliza asi, retorna undefined
}

                  // numeros - strings - booleanos
nombreDeLaFuncion(1, 0.1, -1, 'hola', true, false );//invocar la funcion

              // nada - indefinido
nombreDeLaFuncion(null, undefined );//invocar la funcion



// como sumar dos argumentos
function sumar(a, b) {
  return a + b;
}

console.log(sumar(3,4)); //7

// asi se puede multiplicar, sumar, funciones mas complejas como remover un usuario de una lista

function removerusuario(lista, usuario) {
  return lista.filter(item => item !== usuario);
}

console.log(removerusuario(['juan', 'jose', 'ricardo'], 'jose'));// ['juan', 'ricardo']

// o dibujar un circulo en la pagina web

function dibujarCirculo(x,y,radio) {
  var c = document.getElementById("#canvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(x, y, radio, 0, 2 * Match.PI);
  ctx.Stroke();
}

console.log(dibujarCirculo(0,0,10));
