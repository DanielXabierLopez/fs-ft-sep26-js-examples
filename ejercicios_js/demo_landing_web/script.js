console.log("Hola mundo");

let a = 5;
let b = 10;

//alert(a+b);

function sumar(a, b) {
  return a + b;
}
console.log(sumar(2, 3)); // 5
console.log(sumar(a, b)); // 15

// 1.- Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;

// 2.- Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true;
let booleano2 = false;

console.log(booleano1);
console.log(booleano2);

// 3.- Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.14;
console.log(PI);

// 4.- Crear variable tipo const de nombre TAU declarada con valor 2 veces PI

// 8.- Crear variable incrementarDesp con valor 2 y asigna su valor con postincremento a resultadoDesp

let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
console.log(resultadoDesp); // 2
console.log(incrementarDesp); // 3

// 9.- Crear variable incrementarAntes con valor 2 y asigna su valor con preincremento a resultadoAntes
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;
console.log(incrementarAntes); // 3?
console.log(resultadoAntes); // 3?

// let a = 2;
// let b = a + 1;
// console.log(b);  // 3?
// console.log(a); //  2?

// let a = 2;
// console.log(a++); // a = a + 1  POSTincremento
// console.log(++a); // a = a + 1  PREincremento
// console.log("Valor final: "+a);

// FOR
console.log("**************ejemplo 1****************");

// N = 5, posiciones de 0...N-1 -> 0...4
const frutas = ["papaya", "mango", "pera", "naranja", "platano"];
console.log(frutas[0]); // Primer elemento
console.log(frutas[4]); // Último elemento
console.log(frutas.length); // 5
console.log(frutas.length - 1); // 5
console.log(frutas[frutas.length - 1]); // platano

console.log("*****ejemplo 2******");
for (let i = 0; i < frutas.length; i++) {
  //console.log(frutas[i]);
  // Imprime sólo las frutas de ińdice impar
  if (i % 2 !== 0) {
    console.log(frutas[i]);
  }
}

console.log("*****ejemplo 2******");
// Ejecutar el bucle a la inversa
for (let i = frutas.length - 1; i >= 0; i--) {
  //console.log(frutas[i]);
  // Imprime sólo las frutas de ińdice impar
  if (i % 2 !== 0) console.log(frutas[i]);
}

// const frutas = ["papaya","mango","pera","naranja","platano"];

console.log("*****ejemplo 3******");
// Sacar la "n"
console.log(frutas[1]);
const miFruta = frutas[1]; // "mango"
console.log(miFruta[2]); // "n"
// Forma óptima
console.log(frutas[1][2]); // "n"

console.log("*****ejemplo 4******");

let semaforo = "queso";
//let semaforo = prompt("introduce color");

if (semaforo === "verde") {
  console.log("Puedes cruzar");
} else if (semaforo === "amarillo") {
  console.log("Cruza rápido!");
} else if (semaforo === "rojo") {
  console.log("No puedes cruzar");
} else {
  // rojo
  console.error(`Color erróneo: ${semaforo}. Introduce: 
        - verde
        - amarillo
        - rojo`);
}

console.log("*****ejemplo 5******");

let opcion = "cargar";

switch (opcion) {
  case "cargar":
    console.log("Cargando partida...");

  case "jugar":
    // setTimeout(() => {
    //     console.log("Comienza la partida");
    //   }, 2000);
    console.log("Comienza la partida");
    break;

  case "guardar":
    console.log("Guardar partida");
    break;
  case "apagar":
    console.log("Apagando consola");
    break;
  default:
    console.warn("Opción errónea");
}

console.log("*****ejemplo 6******");

let year = 1986;
// 1987 -> true && false -->false
while (year <= 2026) {
  if (year === 1994 || year === 2000) {
    year++;
    continue; // continua omitiendo siguientes líneas
  }

  if (year % 2 === 0) {
    console.log(year);
  }

  if (year === 2008) {
    break; // termina el bucle
  }

  year++;
}

console.log("*****ejemplo 7******");
// Declarar la función
function sumar(a, b) {
  console.log(a + b);
  return a + b;
}

// Ejecutar la función
const resultado = sumar(3, 5);
console.log(`El resultado es: ${resultado}`);

console.log("*****ejemplo 8******");
// Devuelve la tabla de multiplicar de cualquier número
// Devuelve este array: [9,18,27,36,...90]
// 9x1, 9x2, 9x3,..., 9x10

function calculaTabla(n) {
  let tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(n * i);
  }
  console.log(tabla);
  return tabla;
}

let resultadoTabla = calculaTabla(5);
console.log(`El resultado es: ${resultadoTabla}`);

console.log("*****ejemplo 9******");
// Función que simula lanzamiento de dado 1-6
// Devuelve el número sacado aleatoriamente
function lanzarDado() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(`Has sacado un: ${lanzarDado()}`);

console.log("*****ejemplo 9******");
const sumar100 = (a) => a + 100;

function sumar20(a) {
  return a + 20;
}

const sumarDosNumeros = (a, b) => {
  const suma = a + b;
  const total = 100 + suma;
  return total;
};

// Ejecutar la función
console.log(sumar100(33));
console.log(sumarDosNumeros(3, 2));

// Escriba una función que pida un año y que escriba si es bisiesto o no. Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de 100 no lo son, aunque los múltiplos de 400 sí.
//Debe devolver true si es bisiesto

// 1992, 2024, 2028, 400, 4 -> Bisiesto
// 1999, 100, 2001 -> No Bisiesto

// 4 --> true && (false || true) -> true
// 400 --> true && (true || false) -> true
// 100 --> true && (false || false) -> false
// 1993 --> false && (false || true) -> false

function calculaBisiesto(year) {
  if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
    console.log(`Este año es bisiesto: ${year}`);
    return true;
  } else return false;
}

console.log(calculaBisiesto(4));
console.log(calculaBisiesto(400));
console.log(calculaBisiesto(100));
console.log(calculaBisiesto(1993));

// Imprimir por prompt
//console.log(calculaBisiesto(prompt("introduce año")));

// Crea una función que solicite un número N. Debe guardar en un array el cuadrado de cada número. No se guardarán en el array los números pares.
// Ejemplo:Para N=8 --> [1,9,25,49]
// Devolver el array final

function crearCuadradosImpares(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) arr.push(i ** 2);
  }
  return arr;
}

console.log(crearCuadradosImpares(4));
console.log(crearCuadradosImpares(5));

const cuadrados = crearCuadradosImpares(4); // []
console.log(`El primer valor es:${cuadrados[0]}`);

console.log("*****ejemplo 10******");

// n -> número a buscar. Ej: 3, 5, 77, 7
// arr -> array de números en el que busco. Ej: [1,4,3,2,3,5,66,77]
// Devuelve la primera posición del número buscado o -1 si no lo encuentra
// indexOf() --> no lo usamos
function buscaNumero(n, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (n === arr[i]) {
      return i;
    }
  }
  return -1;
}

let data = [1, 4, 3, 2, 3, 5, 66, 77];
console.log(buscaNumero(999, data));

console.log("*****ejemplo 10******");

const user = {
  nombre: "Pepe",
  apellidos: "Perez",
  edad: 40,
  "comida-favorita": "pizza",
  saludar: function () {
    return `Hola, soy ${this.nombre} ${this.apellidos}`;
  },
};
console.log(user["nombre"]);
console.log(user.nombre);

console.log(user["comida-favorita"]);
//console.log(user.comida-favorita); // No se puede

console.log(user.saludar());
user.apellidos = "Quijano";
console.log(user);
console.log(user.saludar());

const usuarios = [
  {
    nombre: "Pepe",
    apellidos: "Perez",
    edad: 40,
  },
  {
    nombre: "Ana",
    apellidos: "Alvarez",
    edad: 41,
  },
  {
    nombre: "Luis",
    apellidos: "Rodriguez",
    edad: 42,
  },
];

console.log(usuarios[1]["nombre"]);
console.log(usuarios[1].edad);

usuarios[2]["apellidos"] = "Suarez";
console.log(usuarios[2]);

console.log("*****ejemplo 11******");
// Calcula promedio edad de usuarios
// promedio: suma edades/length
let suma = 0;
for (let i = 0; i < usuarios.length; i++) {
  suma += usuarios[i].edad;
}
console.log(suma / usuarios.length);

// Dado el array de usuarios, crea una función que devuelve un string con todos los nombres separados por comas de aquellos que tengan menos de 42 años

/* const usuarios = [
    {
      nombre: "Pepe",
      apellidos: "Perez",
      edad: 40,
    },
    {
      nombre: "Ana",
      apellidos: "Alvarez",
      edad: 41,
    },
    {
      nombre: "Luis",
      apellidos: "Rodriguez",
      edad: 42,
    },
  ]; */

/* function devolverNombres(lista_usuarios) {
  let nombres = ""; // "Ana, Luis, Pepe"

  for (let i = 0; i < lista_usuarios.length; i++) {
    if (lista_usuarios[i].edad < 42) {
      nombres += lista_usuarios[i].nombre+", "; //"Pepe, Ana, "
    }
  }

let resultado = "";
// recorrer el string y crear otro string sin ", "
for (let i = 0; i < nombres.length-2; i++) {
    resultado += nombres[i];
}

  return resultado;
} */


function devolverNombres(lista_usuarios) {
    let nombres = ""; // "Ana, Luis, Pepe"
  
    for (let i = 0; i < lista_usuarios.length; i++) {
      if (lista_usuarios[i].edad < 42) {
        nombres += lista_usuarios[i].nombre+", "; //"Pepe, Ana, "
      }
    }
  
  return nombres.slice(0,nombres.length-2);
  }

console.log(devolverNombres(usuarios));
