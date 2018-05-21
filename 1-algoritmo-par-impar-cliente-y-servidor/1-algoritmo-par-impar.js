// cliente
/*
function esParCliente(){
    let num = prompt("PIENSA UN NÚMERO Y ESCRIBELO");
    let resultado = num%2;
 
    (resultado ==0)
                  ? console.log(`${num} ES PAR`)
                  : console.log(`${num} ES IMPAR`)
}*/
//esParCliente();


// servidor
function esParServidor() {
    process.stdout.write("PIENSA UN NUMERO PARA EL SERVIDOR Y ESCRIBELO :  \v\v");
    process.stdin.once('data', num => {
        let resultado = num % 2;
        let salida = "";
        process.stdout.write("\v\t\t VEAMOS .... \n");
        (resultado == 1) ?
        salida = `\v\t\t ${num} \v\t\t ES imPAR \n`: salida = `\v\t\t  ${num} \v\t\t ES PAR \n`

        process.stdout.write(salida);
        process.stdout.write("\v\t\t ***********\n\n")
        process.exit();
    })
}

esParServidor();