const Server = require('app/services/AppService')
const { handleAsyncExceptions } = require('app/util')

if (require.main === module) {
    handleAsyncExceptions()
    Server.run()
}