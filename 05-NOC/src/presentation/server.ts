import { CronService } from "./cron/cron-service"

export class Server {


    public static start() {

        console.log("Servicvio iniciado...")

        CronService.createJob( 
            '*/5 * * * * *', // cronTime
            () => {
                const date =  new Date()    
        		console.log(' 5 second ', date);
        	}	
        );

        CronService.createJob( 
            '*/5 * * * * *', // cronTime
            () => {
                const date =  new Date()    
        		console.log(' 2 second ', date);
        	}	
        );

        CronService.createJob( 
            '*/5 * * * * *', // cronTime
            () => {
                const date =  new Date()    
        		console.log(' 3 second ', date);
        	}	
        );



    }

    
}

