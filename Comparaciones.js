
1 < 1 //false
1 <= 1 // true (<= menor o igual)
1 >= 1// true (>= mayor o igual)

//doble igual
==
1 == 1//true, compara solo el valor
1 == '1'//curiosamente da true siendo uno un numero y el otro un String
          // convierte el numero en string lo compara con el String y lo compara
1 == true//true, por q cualquier numero menos 0, convertido a valor booleano es true

// Triple igual
===
1 === '1'//false, compara el valor y el tipo de datos
1 === true//false
// para no tener ningun tipo de error se recomienda usar el Triple igual

// no es igual
!==
1 !== 2//true
1 != 1//false
