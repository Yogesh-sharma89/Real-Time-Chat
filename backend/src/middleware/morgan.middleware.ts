
import morgan, { StreamOptions } from 'morgan';
import { logger } from '../logger';

const stream: StreamOptions = {

  write: (message) => logger.http(message.trim()),
};


// This tracking includes: Method, Route, Response Code, and processing time in ms

const morganFormat = ':method :url :status :res[content-length] - :response-time ms';

// 3. Export the unified logging middleware
export const morganMiddleware = morgan(morganFormat, { stream });
