import { CreateTable } from "../domain/use-cases/create-table-use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";


interface RunOption {

    base:number;
    limit:number;
    destination:string
    name:string
    showTable:boolean;

}

export class ServerApp {

    static run( { base, limit, showTable,name,destination }:RunOption ) {
        console.log('Server runnige...')


        const table = new CreateTable().execute({base,limit})

        const wasCreated =  new SaveFile().execute({
            fileContent:table,
            destination,
            fileName:name
        })

        if(showTable) {
            console.log(table)   
        }

        ( wasCreated )
        ? console.log('Fue creado')
        : console.error('Ocurrio un error')
    }
}