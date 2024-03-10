import { CreateTable } from "../domain/use-cases/create-table-use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";


interface RunOption {

    base:number;
    limit:number;
    showTable:boolean;

}

export class ServerApp {

    static run( { base, limit, showTable }:RunOption ) {
        console.log('Server runnige...')


        const table = new CreateTable().execute({base,limit})

        const wasCreated =  new SaveFile().execute({
            fileContent:table,
        })

        if(showTable) {
            console.log(table)   
        }

        ( wasCreated )
        ? console.log('Fue creado')
        : console.error('Ocurrio un error')
    }
}