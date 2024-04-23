import { exportUsuarios2 } from "./usuarios/users.js";

console.log("inicio del programa")

exportUsuarios2(1,(user)=>{
    console.log( 'Usuaerio 1',user)
    console.timeEnd('inicio')
}) 

exportUsuarios2(2,(user)=>{
    console.log( 'Usuaerio 2',user)
    console.timeEnd('inicio')
}) 


console.log("fin del programa")