// funcion autoinvocada

let cont =(()=>{
    let _contador = 330;
    global = "VARIABLE GLOBAL SIN VAR EN LA FUNCION";// sin var se hace global
   var local = "VARIABLE LOCAL CON VAR EN LA FUNCION";
   console.log(local)
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


try {
    console.log(cont._contador);// undefined no es publico es variable de bloque no global

} catch (error) {
    console.error(error)
}

console.log(global);


try{
    console.error(local)// no esta definido
}catch(e){
    console.error(e.message)// no esta definido
}
