console.log("--EXERCISE 3: ARRAYS");

// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
// "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses
// 5 y 11 (utilizar console.log).

console.log("-Exercise 3.a:");

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("El mes 5: " + meses[4] +  " " + "El mes 11: " + meses[10]);

// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log("-Exercise 3.b:");

console.log("Los siguientes meses ordenados alfabéticamente: " + meses.sort());

// Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log("-Exercise 3.c:");

meses.unshift("Elemento al principio");
meses.push("Elemento al final");

console.log("Se agrega un elemento al principio y al final del array " + meses);

// Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log("-Exercise 3.d:");

meses.shift();
meses.pop();

console.log("Se quita un elemento al principio y al final del array " + meses);

// Invertir el orden del array (utilizar reverse).

console.log("-Exercise 3.e:");

meses.reverse();

console.log("Orden invertido del array " + meses);

// Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log("-Exercise 3.f:");

console.log("Elementos separados por un guión " + meses.join("-"));

// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log("-Exercise 3.g:");

var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var arrayMeses = mes.slice(4, 11);

console.log("Meses desde Mayo hasta Noviembre: " + arrayMeses);