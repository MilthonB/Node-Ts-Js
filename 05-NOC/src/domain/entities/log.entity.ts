


export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export interface LogEntityOptios {
    level: LogSeverityLevel // Enum
    message: string;
    createdAt?: Date;
    origin: string;


}

export class LogEntity {


    public level: LogSeverityLevel // Enum
    public message: string;
    public createdAt: Date;
    public origion: string;


    constructor( options: LogEntityOptios ){

        const { message, level, createdAt = new Date(), origin } = options;
        this.message = message;
        this.level= level;
        this.createdAt = createdAt;
        this.origion = origin
    }


    static fromJson = ( json: string ): LogEntity => {
        const { message, level, createdAt, origion } = JSON.parse(json);

        const log = new  LogEntity({
            message,
            level,
            createdAt,
            origin
        })

        return log

        

    }
}





