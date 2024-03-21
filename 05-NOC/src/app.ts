

import 'dotenv/config'

import { Server } from "./presentation/server";
import { envs } from './config/env.plugin';
import { MongoDataBase } from './data/mongo/init';




(async() => {
    main()
})()


async function main(){

    await MongoDataBase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME
    })

    // Server.start()
    // console.log(envs.PORT)
}








