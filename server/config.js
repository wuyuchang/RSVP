// server/config.js
module.exports = {
  AUTH0_DOMAIN: 'yuchang-wu.auth0.com', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: 'myMEAN', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://mean:mean123456@ds133004.mlab.com:33004/mean'
};