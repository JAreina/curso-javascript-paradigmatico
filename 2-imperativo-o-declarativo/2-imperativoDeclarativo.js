const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// programacion imperativa

console.time('IMPERATIVO')

function hallarCuadrado(numeros) {
    let arr = [];

    for (let index = 0; index < numeros.length; index++) {
        arr.push(Math.pow(numeros[index], 2));

    }

    console.log(arr);

}
hallarCuadrado(numeros);
console.timeEnd('IMPERATIVO')


// PROGRAMACION DELCARATIVA

console.time('DECLARATIVO')

console.log(numeros.map((num) => {
    return Math.pow(num, 2);
}));

console.timeEnd('DECLARATIVO');