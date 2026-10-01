console.log("hola mundo");

console.log("--------Ejercicio 1----------");

// Lectura
console.log(document.getElementById("titulo"));
console.log(document.getElementById("titulo").innerHTML);

console.log(document.getElementById("titulo").innerText);

// Escritura

//innerText
document.getElementById("titulo").innerText = "<span>Queso</span>";
console.log(document.getElementById("titulo").innerText);
//innerHTML
document.getElementById("titulo").innerHTML = "<span>Pan</span>";
console.log(document.getElementById("titulo").innerHTML);


console.log("--------Ejercicio 2----------");

const p = document.getElementById("parrafo").style;
p.color = "blue";
p.backgroundColor = "aquamarine";
p.fontSize = "20px";


// Ejercicios 1 y 2 con Query selector

console.log(document.querySelector("#titulo").innerHTML);
console.log(document.querySelector("article > p").innerHTML);
console.log(document.querySelector("section > :nth-child(2)").innerHTML);

//QuerySelectorAll -> crea un node list
console.log(document.querySelectorAll("p.frases"));
console.log(document.querySelectorAll("p.frases")[0]);
console.log(document.querySelectorAll("p.frases")[0].innerHTML);

const element = document.querySelectorAll("p.frases");

for (let i = 0; i < document.querySelectorAll("p.frases").length; i++) {
    console.log(element[i].innerText);

}
//Eventos en botones
console.log("--------Ejercicio 3----------");

const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
    alert("Hola!");
    //cambia el texto de un p con innertext
    document.querySelector("#cambioParrafo").innerText = "vaos al coffee".toUpperCase();

    // cambia el color de fondo del body
    document.body.style.backgroundColor = "#34ADA0";
});
const boton2 = document.getElementById("boton2");
let editado = false;

boton2.addEventListener("click", function () {
    
    if (editado == false) {
        editado = true;
        //cambia el texto de un p con innertext
        document.querySelector("#cambioParrafo").innerText = "vamos al coffee".toUpperCase();
        // cambia el color de fondo del body
        document.body.style.backgroundColor = "#34ADA0";

    } else {
        editado = false;
        document.querySelector("#cambioParrafo").innerText = "Yo voy a cambiar, lo prometo";
        document.body.style.backgroundColor = "white";
    }

});

console.log("--------Ejercicio 4----------");

//pulsando boton cambia una imagen
const boton3 = document.getElementById("cambioImagen");

function cambioImagen(){
    alert("Cambiando imagen");

    document.querySelector("#imagen").src = "https://i.pinimg.com/originals/9a/a2/11/9aa2112b7dfbb22e2e851b96745e5ed6.png";

}
boton3.addEventListener("click", cambioImagen);


console.log("--------Ejercicio 5----------");

const div1 = document.getElementById("mouse");

div1.addEventListener("mouseover", function(){
    div1.style.backgroundColor = "pink";
});
div1.addEventListener("mouseout", function(){
    div1.style.backgroundColor = "green";
});

console.log("--------Ejercicio 6----------");

const frases = document.querySelectorAll(".frases");

for (let i = 0; i < frases.length; i++) {

    frases[i].addEventListener("click", function(){
        frases[i].innerText = "Cambiado!";
    });
    
};

console.log("--------Ejercicio 7----------");

/*Objetivo: event.preventDefault.
Crea un enlace <a href="https://google.com">Ir a Google</a>.
Añade un listener que, al clickar, haga preventDefault() y muestre un mensaje “¡No puedes salir!”.
Concepto: bloquear comportamiento por defecto.*/

const mensaje = document.getElementById("msg");
const enlace = document.getElementById("enlace");

enlace.addEventListener("click", function(event){
    event.preventDefault();
    mensaje.innerText = "¡No puedes salir!";
});

console.log("--------Ejercicio 8----------");

/*Objetivo: Combinar varias cosas.

Pon un article con un h2, un p y una img.

Haz que:

Al clickar en el h2, cambie su texto a “Hechizo lanzado”.
Al clickar en el p, cambie color y fondo.
Al clickar en la img, cambie por otra.
*/

const h2 = document.querySelector("article h2");
const p2 = document.querySelector("article p");
const img = document.querySelector("article img");

h2.addEventListener("click", function(){
    h2.innerText = "Hechizo lanzado";
});

p2.addEventListener("click", function(){
    p2.style.backgroundColor = "red";
    p2.style.color = "white";
});

img.addEventListener("click", function(){
    img.src = "https://i.pinimg.com/originals/9a/a2/11/9aa2112b7dfbb22e2e851b96745e5ed6.png";
});

console.log("--------Ejercicio Bonus----------");
/*Objetivo: Coger el valor del input y ponerlo en pantalla

Pon un input con un botón con la palabra "agregar".

Haz que:

Se pueda escribir en el input, cambie el placeholder "Escribe algo" por lo que escribas.
Al clickar en el botón, coja el valor del input y lo agregue en una lista. */

const input = document.getElementById("input");
input.addEventListener("click", function(){
    input.placeholder = "";
});
input.addEventListener("blur", function(){
    input.placeholder = "Escribe algo...";
});

const boton4 = document.getElementById("buttonList");
const lista = document.getElementById("listado");
boton4.addEventListener("click", function(){
    lista.innerHTML += ("<li>"+input.value+"</li>");
    
});