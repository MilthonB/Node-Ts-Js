import fs from "fs";



let outpuMessage = ""
const base = 5
const headerMessage  =  `
=====================================
        Tabla del ${base}
=====================================\n
`


for (let i = 1; i < 11; i++) {
     outpuMessage += ` ${base}  X ${i} = ${base * i} \n` 
}




const outPutpath = 'outputs/';








fs.mkdirSync(outPutpath, {recursive:true});

console.log(headerMessage + outpuMessage)

fs.writeFileSync(`${outPutpath}/table-${base}.txt`,outpuMessage)

