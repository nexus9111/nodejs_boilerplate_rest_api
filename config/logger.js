const winston = require("winston");
const { SERVICE_NAME } = require("./variables");

winston.level = "debug";
const logger = winston.createLogger({

    level: "debug",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    defaultMeta: { service: SERVICE_NAME },
    transports: [
        new winston.transports.Console(),
    ], 
});

module.exports = logger;

// how tu use:
// const logger = require('./config/logger');
// 
// logger.info('Hello World');
// logger.error('Hello World');
// logger.warn('Hello World');
// logger.debug('Hello World');
//
// You can add fields to the log:
// logger.info('Hello World', { field1: 'value1', field2: 'value2' });