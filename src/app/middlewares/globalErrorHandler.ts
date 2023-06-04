import config from '../../config';
import { IGenericErrorMessage } from '../../interfaces/error';
import {Request, Response, NextFunction} from 'express'



const globalErrorHandler = (
    err,
     req:Request, 
     res:Response, 
     next:NextFunction
     ) => {
        
        const statusCode = 500;
        const message = 'Something went wrong !';
        const errorMessages : IGenericErrorMessage[]=[];
    
    
        res.status(statusCode).json({
            success:false,
            message,
            errorMessages,
            stack: config.env !== 'production' ? err?.stack : undefined,
        });
    
        next();
    
  }

  export default globalErrorHandler;