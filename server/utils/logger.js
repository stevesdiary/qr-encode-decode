const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const logger = createLogger({
    format: combine(
        timestamp(),
        logFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs/app.log', level: 'info' }),
        new transports.File({ filename: 'logs/error.log', level: 'error' })
    ]
});

module.exports = logger;
