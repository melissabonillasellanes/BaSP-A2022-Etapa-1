console.log("--EXERCISE 6: FUNCTIONS");

// Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
// dicha variable en la consola del navegador.

console.log("-Exercise 6.a:");

function sum(num1, num2) {
    return num1 + num2;
}

var result = sum(20, 13);

console.log(result);

// A la función suma anterior, agregarle una validación para controlar si alguno de los
// parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno
// de los parámetros tiene error y retornar el valor NaN como resultado.

console.log("-Exercise 6.b:");

function suma(numero1, numero2) {
    if(typeof numero1 !== "number" || typeof numero2 !== "number") {
        alert("Uno de los parámetros ingresado es incorrecto");
        return NaN;
    } else {
        return numero1 + numero2;
    }
}

var resulSuma = suma("Hola", 10);

console.log(resulSuma);


// Aparte, crear una función validate Integer que reciba un número como parámetro y
// devuelva verdadero si es un número entero.

console.log("-Exercise 6.c:");

function validateIntegrar(numero) {
    return Number.isInteger(numero);
}

var resulValidate = validateIntegrar(23.3);

console.log(resulValidate);

// A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c.
// y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con
// el error y retornar el número convertido a entero (redondeado).

console.log("-Exercise 6.d:");

function sum2(number1, number2) {
    if(typeof number1 !== "number" || typeof number2 !== "number") {
        alert("El número ingresado es incorrecto");
    } else if(!validateIntegrar(number1)) {
        alert("El parámetro que se ingreso es incorrecto");
        return Math.round(number1);
    } else if(!validateIntegrar(number2)) {
        alert("El parámetro que se ingreso es incorrecto");
        return Math.round(number2);
    } else {
        return number1 + number2;
    }
}

var numerosEnteros = sum2(50.5, 10);

console.log(numerosEnteros);

// Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la
// función suma probando que todo siga funcionando igual.

console.log("-Exercise 6.e:");

function sum3(n1, n2) {
    return sum2(n1, n2);
}

var sumaEnteros = sum3(20.8, 50);

console.log(sumaEnteros);