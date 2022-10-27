//son datos que son forzados a booleanos

// cualquier numero excepto el 0 es true para JS
  if (10 o 0) {// si la condicion es 0 da false si es cualquier otro numero da true
    console.log("este codigo se ejecuta si es true");
  }else {
    console.log("este codigo se ejecuta si es false");
  }

  // cualquier String es verdadera, menos la String '' que no tiene nada que es false
if ("hola") { //es true
    console.log("este codigo se ejecuta si es true");
}else {
  console.log("este codigo se ejecuta si es false");
}

// datos forzados a true
  true
  1
  " "// cualquier String a partir de un espacio
  [] //array
  {} //objeto
  function (){}

// datos forzados a false
  false
  0
  undefined
  null
  ""//una cadena vacia

// ! Negacion
  !true//false
  !!true//true
  !(1 > 2)// 1 es mayor que 2, eso es true pero esta negado(!) osea que daria false
  !1 //es false, por q todo los numeros son true
  !!1 //daria el verdadero valor booleano del numero
  !!null //false
  !!undefined // false
  !![] //true

  function prueba (){

  }
prueba//undefined
!!prueba//true
!prueba//false
