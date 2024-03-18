import { LogEntity, LogEntityOptios, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";


interface CheckServiceUseCase {
    execute(url:string):Promise<boolean>
}


type SucessCallbakc =  ()=> void;
type ErrorCallbakc = (erro:string)=> void;


export class CheckService implements CheckServiceUseCase{
    
    
    // inyeccion de dependencias 
    constructor(
        private logRepository: LogRepository,
        private readonly successCallback: SucessCallbakc,
        private readonly errorCallback: ErrorCallbakc
        ){}
        

    async execute( url: string ):Promise<boolean>{

        try {
            const res =  await fetch(url);
            if( !res.ok ){
                throw new Error(`Error on check service ${ url } `)
            }

            const log = new LogEntity({
                message: `Server${ url } working...`,
                level: LogSeverityLevel.low,
                createdAt: new Date(),
                origin: 'check-service.ts'})

            this.logRepository.saveLog(log)
            this.successCallback();
            return true

        } catch (error) {

            const logMessage = `${error}`
            const log = new LogEntity({
                message: logMessage,
                level: LogSeverityLevel.high,
                createdAt: new Date(),
                origin: 'check-service.ts'});
            this.logRepository.saveLog(log)
            this.errorCallback( logMessage )
            return false
        }
        
        
        return true;
    }


}