import winston from "winston";
import "winston-daily-rotate-file"; // 🚀 Imports the rotation module

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

// 1. Terminal Layout: Clean, formatted, and colorized
const consoleFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }), 
  winston.format.printf(
    (info) => `[${info.timestamp}] [${info.level}]: ${info.message}`
  )
);

// 2. Production File Layout: Clean plaintext without messy color codes
const fileFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.printf(
    (info) => `[${info.timestamp}] [${info.level}]: ${info.message}`
  )
);

const transports = [
  // Always output to the terminal screen with colors
  new winston.transports.Console({
    format: consoleFormat
  }),

  // 🔄 Save critical errors to a rotating file deleted after 3 days
  new winston.transports.DailyRotateFile({
    filename: 'logs/error-%DATE%.log', // Generates daily date stamps
    datePattern: 'YYYY-MM-DD',
    level: 'error',
    maxFiles: '1d',                   // ⚡ STRICTLY KEEPS ONLY 1 DAYS OF LOGS!
    zippedArchive: true,              // Compresses older days to save massive space
    format: fileFormat,               // Strips out terminal colors for files
  }),

  // 🔄 Save ALL application traffic records here deleted after 3 days
  new winston.transports.DailyRotateFile({
    filename: 'logs/combined-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxFiles: '3d',                   // ⚡ STRICTLY KEEPS ONLY 3 DAYS OF LOGS!
    zippedArchive: true,
    format: fileFormat,
  }),
];

export const logger = winston.createLogger({
    level: "http",
    transports
});
