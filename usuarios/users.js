const users=[

    {
        id:1,
        nombre:"gabriel",
        apellido:"dominguez",
        edad:22
    },
    {
        id:2,
        nombre:"gabriel",
        apellido:"dominguez",
        edad:22
    },
    {
        id:3,
        nombre:"gabriel",
        apellido:"dominguez",
        edad:22
    },
    {
        id:4,
        nombre:"gabriel",
        apellido:"dominguez",
        edad:22
    },
]

export function exportUsers(id){
 const startPoint = new Date().getTime()
 
 while (new Date().getTime() - startPoint <= 3000) {
     //Esperando
 }

 return users.filter(us=> us.id === id)
}


export function exportUsuarios2(num , fn){
   const usuariosEncontrados = users.filter(users=> users.id === num)
    setTimeout(()=>{
        fn(usuariosEncontrados)
    }, 3000)
}


