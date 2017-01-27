const nconf = require('nconf');
const config = module.exports = nconf.argv()

.env([
  'APP_SECRET',
  'STATIC_PATH'
])

.defaults({
  'STATIC_PATH': '../web.browser/build',
  // 'STATIC_PATH': '../server',
  // 'STATIC_PATH': '../web.browser/public',
  'HTTPS': (process.env.NODE_ENV === 'production')
})
