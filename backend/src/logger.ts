import winston from "winston";

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);


// 2. Configure the output formatting layout

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }), // Colorize terminal logs
  winston.format.printf(
    (info) => `[${info.timestamp}] [${info.level}]: ${info.message}`
  )
);


const transports = [
  // Always output to the terminal screen
  new winston.transports.Console(),
  // Save critical errors to a separate permanent file
  new winston.transports.File({
    filename: './logs/error.log',
    level: 'error',
  }),
  // Save ALL application traffic records here
  new winston.transports.File({ filename: 'logs/combined.log' }),
];

export const logger = winston.createLogger({
    level:"http",
    format,
    transports
})