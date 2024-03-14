import { LogRepository } from "../domain/repository/log.repository";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/datasources/repositories/log.repositorie.impl";
import { CronService } from "./cron/cron-service"

const fileSytemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource
)


export class Server {


    public static start() {

        console.log("Servicvio iniciado...")

        CronService.createJob( 
            '*/5 * * * * *', // cronTime
            () => {
                const url = 'http://localhost:3000/' 
                new CheckService(
                    fileSytemLogRepository,
                    () => console.log('success'),
                    ( error ) => console.log(error)
                ).execute(url);
        	}	
        );



    }

    
}

