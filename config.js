// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    development: {
        url: 'http://127.0.0.1:2368/',

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    },

    production: {
        url: 'http://'+process.env.OPENSHIFT_APP_DNS,
        mail: {},
        database: {
            client: 'mysql',
            connection: {
  			  host: process.env.OPENSHIFT_MYSQL_DB_HOST,
			  port: process.env.OPENSHIFT_MYSQL_DB_PORT,
  			  user: process.env.OPENSHIFT_MYSQL_DB_USERNAME,
  			  password: process.env.OPENSHIFT_MYSQL_DB_PASSWORD,
  			  database: process.env.OPENSHIFT_APP_NAME,
  			  charset: 'utf8'
            },
            debug: false
        },
        server: {
            host: process.env.OPENSHIFT_NODEJS_IP,
            port: process.env.OPENSHIFT_NODEJS_PORT
        }
    },
};

// Export config
module.exports = config;
