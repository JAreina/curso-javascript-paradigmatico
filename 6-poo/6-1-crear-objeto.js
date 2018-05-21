
// Classic
const fun = (function(){
   console.log("INVÓCATE")
})();
// Crockford's favorite
(function(){
    console.log("INVÓCATE 2 forma ")
}());

// Unary versions
+function(){
    console.log("INVÓCATE 3 forma ")
}();


// Facebook version
!function(){
    console.log("INVÓCATE 4 forma ")
}();


// Crazy version
!1%-+~function(){
    console.log("INVÓCATE 5 forma ")
}();

let metodo = ((mostrar,numero,doc)=>{
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
   
   mostrar("********** objeto PROTOTYPE OBJECT")

   let obj2 = new Object();

   obj2.paginas = 3000;
   obj2.leer = () => {
       mostrar("leyendo uno");
      mostrar(`QUIEN ES THIS EN EL METODO leer: ${this}`)
   
    }
    obj2.leer2 = function () {
        mostrar("leyendo dos");
       mostrar(`QUIEN ES THIS EN EL METODO leer2: ${this}`)
    
     }
   obj2.leer();
   obj2.leer2();
   mostrar(obj2)
   mostrar("********** objeto FUNCION CONSTRUCTORA")

   function Casa(calle,ciudad,habitantes){
       this.calle = calle;
       this.ciudad = ciudad;
       this.habitantes = habitantes ;
       this.vivir = function(){
            mostrar("vido en "+this.ciudad);
       }
 
    }
 
    let casa = new Casa("Avda. Madrid","MADRID", 48893837)
    mostrar(casa);
    casa.vivir()


   mostrar("********** class es6")

   class Helado {

       constructor(sabor,precio) {
             this.sabor = sabor;
             this.precio = precio           
       }
   }

  let helado = new Helado("FRESA",333)
mostrar(helado)

return   {
    obj:obj,
    obj2:obj2,
    casa: casa,
}


 })(console.log,5648,document);


console.log(  ".................................................")
//   OBJETENER LO QUE RETORNA LA FUNCION AUTOINVOCADA metodo
 console.log(metodo.obj)
 console.log(metodo.obj2)
 console.log(metodo.casa)


 /**
  *  función invocada devuelva un objeto que represente la interfaz pública para un determinado bloque de código. 
  * 
  *  distinguir entre métodos públicos y privados
  */
 var myApp = (function(){
    var foo = 'Hello World';
    return{
      foo : foo
    }
  })();
   
  console.log( myApp.foo ); // Hello World