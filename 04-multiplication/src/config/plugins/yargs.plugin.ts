
import yargs from "yargs";
import { hideBin } from "yargs/helpers";


export const yarg = yargs(hideBin(process.argv))  //{ _: [], b: 10, '$0': 'src/app.ts' } esta es la respuesta ya parseada
.option('b',{
    alias:'base',
    type: 'number',
    demandOption:true,
    describe:'Multiplication table base'
})
.option('l', {
    alias:'limt',
    type:'number',
    default:10,
    describe:'Multiplication table limit'
})
.option('s',{
    alias:'showTable',
    type:'boolean',
    default:true,
    describe:'Show multiplication table'
})
.check((argv, options) => {

    if (argv.b <1){
        throw ' Error base must be greater than 0 '
    }

    return true;
})
.parseSync()
















