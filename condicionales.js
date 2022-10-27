// Permiten daar un flijo en el procesamiento de datos

// como si esta persona es un usuario esta autorizado y no lo es no tiene acceso
if (esUsuario) {
  autorizar();
}else {
  noAutorizar();
}

// o hacer comparaciones como si este color es azul voy a dibujar un circulo
// si es blanco dibujo un cuadrado y si no es ninguno de estos colores se dibuja un triangulo

if (color === 'azul') {
  dubujarCirculo();
} else if (color === 'blanco') {
  dibujarCuadrado();
} else {
  dibujarTriangulo
}
