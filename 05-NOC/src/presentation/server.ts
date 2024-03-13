import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service"

export class Server {


    public static start() {

        console.log("Servicvio iniciado...")

        CronService.createJob( 
            '*/5 * * * * *', // cronTime
            () => {
                const url = 'http://localhost:3000/' 
                new CheckService(
                    () => console.log('success'),
                    ( error ) => console.log(error)
                ).execute(url);
        	}	
        );



    }

    
}

