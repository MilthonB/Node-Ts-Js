

// La reglas del negocio
export interface CreateTableUseCase {
   
    execute: (option:CreateTableOptions) => string
    
}

export interface CreateTableOptions{
    base:number;
    limit?:number
}



//Crear la data del archivo

export  class CreateTable implements CreateTableUseCase{


    constructor(
        /**
         * DI -Dependency Injection
         */
    ){}


    execute( {base, limit = 10}:CreateTableOptions ) {
        let outpuMessage = ""
        for (let i = 1; i < limit; i++) {
            outpuMessage += ` ${base}  X ${i} = ${base * i} \n` 
       }
       return outpuMessage;
    }


}




