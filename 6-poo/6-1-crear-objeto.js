

;(()=>{
   console.log("INVÓCATE")
})();

;((mostrar,numero,doc)=>{
    mostrar("soy console.log");
    mostrar(numero);

    mostrar("******* OBJETO LITERAL");

    let obj= {
        propiedad1: "la uno",
        propiedad2: "la dos",
        metodo1 (arg = "hola") {
            mostrar(`${arg}, SOY EL METODO UNO`)
        }
        }
 
    mostrar(obj)

    obj.metodo1()
   

 })(console.log,5648,document);