import { EmailService } from "../../../presentation/email/email.service";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface SendLogEmailUseCase {
    execute: (to: string | string []) => Promise<boolean>
}




export class SenEmailLogs implements SendLogEmailUseCase {
    
    constructor(
        private readonly emailServicve: EmailService,
        private readonly logRepository: LogRepository
    ){}
    
    async execute (to: string | string[]) {
        try {
            const sent = await this.emailServicve.sendEmailwithFileSystmeLogs(to);
            if (!sent){
                throw new Error('Email log not sent')
            }
            
            const log = new LogEntity({
                message: `Email Send`,
                level: LogSeverityLevel.low,
                origin: 'send-email-log.ts'
            })

            this.logRepository.saveLog(log);
            return true;
        } catch (error) {

            return false;
        }
    }
    
}




