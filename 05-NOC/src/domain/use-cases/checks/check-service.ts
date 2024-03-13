

interface CheckServiceUseCase {
    execute(url:string):Promise<boolean>
}


type SucessCallbakc =  ()=> void;
type ErrorCallbakc = (erro:string)=> void;

export class CheckService implements CheckServiceUseCase{


    // inyeccion de dependencias 
    constructor(
        private readonly successCallback: SucessCallbakc,
        private readonly errorCallback: ErrorCallbakc
    ){}


    async execute( url: string ):Promise<boolean>{

        try {
            const res =  await fetch(url);
            if( !res.ok ){
                throw new Error(`Error on check service ${ url } `)
            }

            this.successCallback();
            return true

        } catch (error) {
            this.errorCallback(`${error}`)
            console.log(`${error}`)
            return false
        }
        
        
        return true;
    }


}