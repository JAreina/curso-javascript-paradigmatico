//http://bonsaiden.github.io/JavaScript-Garden/

try {
    let cad = "ESTO ES JAVASCRIPT"
    console.log(`0 ${cad}`);

    let cadena = 2..toString();
    console.log(1, ":", cadena);

    let cadena2 = 2 .toString();
    console.log(`${cadena2}`);
    console.log(3, ":", cadena2);


    let cadena3 = (2).toString();
    console.log(4, ":", cadena3);
    console.log(5, (2).toString());



    var nombre = "una cadena".nombr = "el nombre";

    console.log(nombre);
    console.log(nombre.nombr);


    var apellido = "Fernandez";

    nombre.apel = apellido;
    console.log(nombre.apel);
    console.log(nombre.valueOf());
    console.log(apellido)


    var obj = {
        bar: 1,
        foo: 2,
        baz: 3
    };
    obj.bar = undefined;
    obj.foo = null;
    delete obj.baz;

    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            console.log(i, '' + obj[i]);
        }
    }


    var test = {
        'case': 'I am a keyword, so I must be notated as a string',
        delete: 'I am a keyword, so me too' // raises SyntaxError delete palabra reservada
    };

    console.log(test)




} catch (error) {
    console.error(error);

}