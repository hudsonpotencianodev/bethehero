const crypto = require('crypto')

const gererate = () => {
    return crypto.randomBytes(4).toString('HEX')
}

module.exports = gererate;