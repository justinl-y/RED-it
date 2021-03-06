const nconf = require('nconf');

export const config = module.exports = nconf.argv()

.env([
  'APP_SECRET',
  'STATIC_PATH',
  'POSTGRES_HOST',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DBNAME',
  'HTTPS',
])

.defaults({
  STATIC_PATH: '../web.browser/build',
  HTTPS: (process.env.NODE_ENV === 'production'),
});
