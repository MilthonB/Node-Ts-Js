import { yarg } from "./config/plugins/yargs.plugin";






// console.log(process.argv)


// console.log(yarg)
// console.log(process.argv) // son los argumentyos que se mandaron a la parte de node para ejecutarse 

// const [,,...argv] = process.argv


// funcion anonima autoinvocada asincrona

(async() =>{

        await main()
})()


async function main() {

    console.log(yarg.b)
}





// console.log(argv)


// Esto es un ejemplo de argumentos 
// node  build/app.js --base 10 -l=100 --file-hola.txt -s 


// npm i yargs
// npm i yargs@next toma la siguiente version de yargs
// npm i yargs@17.1.1
// npm i yargs@latest










