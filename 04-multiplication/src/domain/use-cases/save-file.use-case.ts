import fs from "fs";

import {yarg} from "../../config/plugins/yargs.plugin";


export interface SaveFileUseCase {
    execute : ( options:Options ) => boolean;
}

export interface Options{
    fileContent: string;
    destination?: string;
    fileName?:string;
}


export class SaveFile implements SaveFileUseCase {


    constructor(){}

    execute({ fileContent, destination="outputs", fileName="table" }: Options){

        try {
            fs.mkdirSync(destination, {recursive:true});
    
            fs.writeFileSync(`${destination}/${fileName}.txt`,fileContent)
            console.log('File crated')
            return true;
            
        } catch (error) {
            
            return false;
        }


    } 


}






