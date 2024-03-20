
import nodemailer from "nodemailer";
import { envs } from "../../config/env.plugin";
import { LogRepository } from "../../domain/repository/log.repository";
import { LogSeverityLevel } from "../../domain/entities/log.entity";



interface SendMailOptions {

    to: string | string[] ;
    subject: string;
    htmlBody: string;
    attachements?: Attachments[];

}

interface Attachments{
    filename: string;
    path: string;
}



export class EmailService{

    private transporter =  nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MILER_SECRET_KEY
        }
    });


    // constructor( private readonly logrepository: LogRepository ){}



    async senEmail(options: SendMailOptions): Promise<boolean>{

        const {  to, subject, htmlBody, attachements = [] } = options;
        try {
            const sentInformation =  await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachements
            })

            // const logMaildSuccess = {

            //     level: LogSeverityLevel.low, // Enum
            //     message: 'Email send',
            //     createdAt: new Date(),
            //     origion: 'email.service.ts'
            // }
            // const res =  this.logrepository.saveLog(logMaildSuccess)

            
            return true;
        } catch (error) {

            // const logMaildError = {

            //     level: LogSeverityLevel.high, // Enum
            //     message: 'Email send failed',
            //     createdAt: new Date(),
            //     origion: 'email.service.ts'
            // }
            // const res =  this.logrepository.saveLog(logMaildError)
            return false;
        }

    }

    ///home/ocmit/Documentos/proyectos/github/Node-Ts-Js/05-NOC/log/logs-medium.log

    async sendEmailwithFileSystmeLogs( to: string | string[] ) {
        const subject = 'logs del servidor'
        const htmlBody = 'test'
        const attachements: Attachments[] = [
            {filename: 'log-low.log', path:'/home/ocmit/Documentos/proyectos/github/Node-Ts-Js/05-NOC/log/logs-low.log'},
            {filename: 'log-high.log', path:'/home/ocmit/Documentos/proyectos/github/Node-Ts-Js/05-NOC/log/logs-high.log'},
            {filename: 'log.medium.log', path:'/home/ocmit/Documentos/proyectos/github/Node-Ts-Js/05-NOC/log/logs-medium.log'},
        ];
        
        return this.senEmail({
            to,
            subject,
            htmlBody,
            attachements
        })
    }
}

