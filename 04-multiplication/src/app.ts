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



console.log(headerMessage + outpuMessage)

fs.writeFileSync(`outputs/table-${base}.txt`,outpuMessage)

