import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

let outpuMessage = ""
const { b:base, l:limit, s:show } = yarg
// const base = yarg.b
// const limit = +yarg.l
// const show = yarg.s
const headerMessage  =  `
=====================================
        Tabla del ${base}
=====================================\n
`

for (let i = 1; i < limit; i++) {
     outpuMessage += ` ${base}  X ${i} = ${base * i} \n` 
}

const outPutpath = 'outputs/';

fs.mkdirSync(outPutpath, {recursive:true});

if(show) console.log(headerMessage + outpuMessage)

fs.writeFileSync(`${outPutpath}/table-${base}.txt`,outpuMessage)

