import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';




export class FileSystemDataSource implements LogDatasource{


    private readonly logPath = 'log/'
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
            this.logPath,
            this.allLogPath,
            this.mediumLogPath,
            this.highLogPath
        ].forEach( path => {
            if (fs.existsSync(path)) return
            
            fs.writeFileSync(path,'')
            
        } )

        

    }

    saveLog(log: LogEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }




}





