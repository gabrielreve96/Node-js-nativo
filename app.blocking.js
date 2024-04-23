import { exportUsers } from "./usuarios/users.js"



console.log("inicio del programa")
console.time("inicio")

const usuario1 = exportUsers(1)
console.log('Usuario 1:'  , usuario1)
const usuario2 = exportUsers(2)
console.log('Usuario 1:'  , usuario2)



console.log("Fin del prgrama")
console.timeEnd('inicio')
