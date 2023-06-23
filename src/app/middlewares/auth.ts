import { NextFunction, Request, Response } from 'express';
import ApiError from '../../errors/ApiError';
import { jwtHelpers } from '../../helpers/jwtHelpers';
import config from '../../config';
import { Secret } from 'jsonwebtoken';

const auth =
  (...requiredRole: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(403, 'Invalid authorization token');
      }
      // verify token
      let verifiedUser = null;

      verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);

      req.user = verifiedUser;
      //check role
      if (requiredRole.length && requiredRole.includes(verifiedUser.role)) {
        throw new ApiError(403, 'Forbidden');
      }

      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
