import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';




export class FileSystemDataSource implements LogDatasource{


    private readonly logPath = './logs/'
    private readonly allLogPath = 'log/logs-low.log'
    private readonly mediumLogPath = 'log/logs-medium.log'
    private readonly highLogPath = 'log/logs-high.log'

    constructor(){
        this.creatLogsFile();
    }


    private creatLogsFile = () =>{
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirSync(this.logPath)
        }
            
        [
            this.allLogPath,
            this.mediumLogPath,
            this.highLogPath
        ].forEach( path => {
            if (fs.existsSync(path)) return
            
            fs.writeFileSync(path,'')
            
        } )

    }

    async saveLog(newLog: LogEntity): Promise<void> {

        const logASJson = `${JSON.stringify(newLog)}\n`
        fs.appendFileSync( this.allLogPath, logASJson )
        
        if (newLog.level === LogSeverityLevel.low) return;
        if (newLog.level === LogSeverityLevel.medium){
            fs.appendFileSync( this.mediumLogPath, logASJson )
        }else{
            fs.appendFileSync( this.highLogPath, logASJson )
        }

    }


    private getLogsFormFile = ( path: string ): LogEntity[] =>{

        const content =  fs.readFileSync(path,'utf-8') 
        const logs =  content.split('\n').map(LogEntity.fromJson) 
        // const logs =  content.split('\n').map(log => LogEntity.fromJson(log)) 

        return logs

    }


    async getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {

        switch( severityLevel ){
            case LogSeverityLevel.low:
                return this.getLogsFormFile(this.allLogPath)
            case LogSeverityLevel.medium:
                return this.getLogsFormFile(this.mediumLogPath)
            case LogSeverityLevel.high:
                return this.getLogsFormFile(this.highLogPath)

            default: 
            throw new Error(`${ severityLevel } no implemented `)
        }
    }




}





