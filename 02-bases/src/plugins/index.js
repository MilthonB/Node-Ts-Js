
const { getUuid } = require('../plugins/get-id.plugin')
const { getAge } = require('../plugins/get-age.plugin')
const { httpClientPlugin } = require('../plugins/hhtp-client-plugin')


module.exports = {
    getAge,
    getUuid,
    httpClientPlugin,
}


