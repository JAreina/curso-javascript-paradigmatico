const fs =require( "fs");

let archivo = './datos.txt';

// SINCRONO

console.time("SINCRONO")

console.log('\v  OPEN ARCHIVO sincronicamente')


try{
    let leido = fs.readFileSync(archivo,'utf-8');
    console.log(leido);
}catch(err){
    console.error(err);
}




console.timeEnd("SINCRONO");

console.time("aSINCRONO")

console.log('\v  OPEN ARCHIVO asincronicamente')

try{
     fs.readFile(archivo,'utf-8' ,(err,arch)=>{
         (arch)? console.log(arch):console.log(err)

    });

}catch(err){
    console.error(err);
}


console.timeEnd("aSINCRONO");

