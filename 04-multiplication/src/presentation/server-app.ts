

interface RunOption {

    base:number;
    limit:number;
    showTable:boolean;

}

export class ServerApp {

    static run( option:RunOption ) {
        console.log('Server runnige...')
        console.log( { option } )
    }
}