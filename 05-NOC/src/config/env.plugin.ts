

import 'dotenv/config'
import * as env from 'env-var'


export const envs = {
    PORT: env.get('PORT').required().asIntPositive(),
    MAILER_EMAIL: env.get('MAILER_EMAIL').required().asEmailString(),
    MILER_SECRET_KEY: env.get('MILER_SECRET_KEY').required().asString(),
    PROD: env.get('PROD').required().asBool(),
}