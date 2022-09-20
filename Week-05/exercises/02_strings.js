console.log("--EXERCISE 2: STRINGS");

// Crear una variable de tipo string con al menos 10 caracteres
// y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log("-Exercise 2.a:");

var text = "Buenos días, que hermoso día";

console.log(text.toUpperCase());

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Exercise 2.b:");

var climate = "Lunes: Hoy el día estará nublado";
var resultClimate = climate.substring(5, 0);

console.log(resultClimate);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
// últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Exercise 2.c:");

var news = "Hoy es miércoles";
var resultNews = news.substring(16, 13);

console.log(resultNews);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la
// primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
// (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log("-Exercise 2.d:");

var information = "hola bienvenidos";
var resulInformation = information.substring(1, 0).toUpperCase() + information.substring(16, 1).toLowerCase();

console.log(resulInformation);

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar
// la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log("-Exercise 2.e:");

var colors = "Rojo Blanco";
var resulColors = colors.indexOf(" ");

console.log(resulColors);

// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar
// los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en
// mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log("-Exercise 2.f:");

var message = "Hermoso atardecer";
var index = message.indexOf(" ");
var resulMessage = message.substring(1, 0).toUpperCase() +
message.substring(index, 1).toLowerCase() +
" " + message.substring(index + 1, index + 2).toUpperCase() +
message.substring(index + 2, message.length).toLowerCase();

console.log(resulMessage);