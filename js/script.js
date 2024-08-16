//Definir una promesa
const valor = 
    new Promise((resolve, rejected)=>{
        
        //Variable de control:sentinela
        const s = 0
        if(s > 0 ){
            resolve(s)
        }else{
            rejected(s)
        }
});
//Utilizar la promesa
//then: En caso de ejecucion del resolve
//      Que se debe hacer 
//catch:En caso de que se ejecute el rejected
//      que se debe hacer
valor
    .then( dato => console.log(`dato valido: ${dato}`))
    .catch( dato => console.log(`dato invalido ${dato}`))

console.log(valor)