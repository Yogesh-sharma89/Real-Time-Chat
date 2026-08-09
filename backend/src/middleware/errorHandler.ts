import { NextFunction, Request, Response } from "express";
import AppError from "../utils/appError";
import { logger } from "../logger";

const GlobalErrorHandler = (err: Error | AppError, req: Request, res: Response, next: NextFunction) => {

    let statusCode = 500;
    let message = "Internal Server Error";

    if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
    }

    logger.error(`[${req.method}] ${req.url} - Status: ${statusCode} - Error: ${err.message}`);

    if (statusCode === 500) {
        logger.error(err.stack || '');
    }

    res.status(statusCode).json({
        success:false,
        status:statusCode,
        message,
        stack:process.env.NODE_ENV ==='development' ? err.stack : undefined
    })

}

export default GlobalErrorHandler;