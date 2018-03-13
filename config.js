//instatiate environment variables
require('dotenv').config();

//Make this global to use all over the application
CONFIG = {};

CONFIG.app = process.env.APP || 'ritornello';
CONFIG.node_env = process.env.NODE_ENV || 'development';
CONFIG.port = process.env.PORT || '3000';

CONFIG.db_dialect = process.env.DB_DIALECT || 'mysql';
CONFIG.db_host = process.env.DB_HOST || 'localhost';
CONFIG.db_port = process.env.DB_PORT || '3306';
CONFIG.db_name = process.env.DB_NAME || 'ritornello';
CONFIG.db_user = process.env.DB_USER || 'root';
CONFIG.db_password = process.env.DB_PASSWORD || null;
