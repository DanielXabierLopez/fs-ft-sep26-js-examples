/* 10. Sumar todos los números de un array: Escribe una función que tome un array de números y devuelva la suma de todos sus elementos.
 */

function sumarNumerosArray(arr) {
  // arr: [1, 22, 5, 66, 7]
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
    console.log(suma);
  }
  return suma;
}
console.log("*******Ejercicio 1******");
console.log(sumarNumerosArray([1, 22, 5, 66, 7]));

/* 19. Contar palabras en una cadena: Escribe una función que cuente cuántas palabras hay en una cadena. */

// "vamos a comer paella"
// "He visto el sol"
// ""
// Devuelve: número de palabras

function cuentaPalabras(texto) {
  let suma = 1;

  if (texto.length === 0) return 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === " ") {
      suma++;
    }
  }
  return suma;
}
console.log("*******Ejercicio 2******");
console.log(cuentaPalabras("He visto el sol"));
console.log(cuentaPalabras(""));

/*

20. Comprobar si todos los elementos de un array son iguales: Dado un array, verifica si todos sus elementos son iguales o no. */
// [1,1,1,1]
// ["hola","hola","hola","hola"]
// ["patatas","pescado","naranjas"]
function verificarIguales(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
      return false;
    }
  }
  return true;
}

console.log("*******Ejercicio 3******");
console.log(verificarIguales(["hola","hola","hola","hola"]));

console.log(verificarIguales(["patatas","pescado","naranjas"]));

console.log(verificarIguales(["Hola","hola"]));
console.log(verificarIguales([1,1]));

let a = {name:"queso"}; 
let b = {name:"queso"};
// "c" es una referencia en memoria a "a"
let c = a; // {name:"queso"} 

// modificar "a"
a.name = "tortilla";
console.log(a,c);

// modificar "c"
c.name = "tarta";
console.log(a,c);

console.log(verificarIguales([a,c]));

// clona un objeto independiente
let d = structuredClone(a); 
console.log(a,d);

console.log(verificarIguales([a,d]));
