
const { getUuid } = require('../plugins/get-id.plugin')
const { getAge } = require('../plugins/get-age.plugin')
const { httpClientPlugin } = require('../plugins/hhtp-client-plugin')
const buildLogger = require('../plugins/logger.plugin')


module.exports = {
    getAge,
    getUuid,
    httpClientPlugin,
    buildLogger,
}


