import { envs } from "../config/env.plugin";
import { LogRepository } from "../domain/repository/log.repository";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/datasources/repositories/log.repositorie.impl";
import { CronService } from "./cron/cron-service"
import { EmailService } from "./email/email.service";

const fileSytemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource
)


export class Server {


    public static start() {

        // console.log({mail : envs.MAILER_EMAIL,secret: envs.MILER_SECRET_KEY})



        const emailService =  new EmailService(
            fileSytemLogRepository
        );

        emailService.sendEmailwithFileSystmeLogs('milthonbor@gmail.com')

        // emailService.senEmail({
        //     to: 'milthonbor@gmail.com',
        //     subject: 'Logs system',
        //     htmlBody: `
        //         <h3>Logs de sistema de noc</h3>
        //         <p> Aliquip laboris ad amet cillum. Consectetur dolore incididunt commodo mollit consectetur. Labore ea pariatur dolore eiusmod aliquip in ea esse cupidatat eu sunt in excepteur. Consequat ut dolor adipisicing in elit esse culpa amet. Ut cillum nisi esse incididunt labore. </p>
        //         <p> Aliquip laboris ad amet cillum. Consectetur dolore incididunt commodo mollit consectetur. Labore ea pariatur dolore eiusmod aliquip in ea esse cupidatat eu sunt in excepteur. Consequat ut dolor adipisicing in elit esse culpa amet. Ut cillum nisi esse incididunt labore. </p>
        //     `
        // })


        // CronService.createJob( 
        //     '*/5 * * * * *', // cronTime
        //     () => {
        //         const url = 'http://localhost:3000/' 
        //         new CheckService(
        //             fileSytemLogRepository,
        //             () => console.log('success'),
        //             ( error ) => console.log(error)
        //         ).execute(url);
        // 	}	
        // );



    }

    
}

