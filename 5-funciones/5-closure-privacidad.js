// funcion autoinvocada

let cont =(()=>{
    let _contador = 0;

    function incrementar(){
        return _contador++;
    }
    function decrementar(){
        return _contador--;
    }
    function resultado(){
        return _contador;
    }

    // lo retornado es publico
    return {
        incrementar: incrementar,
        decrementar: decrementar,
        resultado: resultado
    }
})();


console.log(cont.incrementar());
console.log(cont._contador);