import JWTToken from 'jsonwebtoken'
import {Request, Response} from 'express'
import Unauthorized from '../errors/UnauthorizedError'
import ConfigError from '../errors/ConfigError'
import { COOKIE_USER_MISSING_CODE, COOKIE_USER_MISSING_MESSAGE, EMPTY_USER_TOKEN_CODE, EMPTY_USER_TOKEN_MESSAGE, GENERAL_UNAUTHORIZE_CODE, GENERAL_UNAUTHORIZE_MESSAGE, JWT_SECRET_CONFIG_CODE, JWT_SECRET_CONFIG_MESSAGE } from '../config/errorCodes'
import DomainError from '../errors/DomainError'

export default async (req: Request, res: Response, next: ()=> void) => {
    try{
        const token = req.cookies.user || ''
        const tokenSecret = process.env.JWT_USER_SECRET || ''
        if (!token) {
            throw new Unauthorized( COOKIE_USER_MISSING_MESSAGE, COOKIE_USER_MISSING_CODE)
        }

        if (!tokenSecret) {
            throw new ConfigError(JWT_SECRET_CONFIG_MESSAGE, JWT_SECRET_CONFIG_CODE)
        }

        const decoded = await JWTToken.verify(token, tokenSecret) as {idUser: string}
        if (!decoded.idUser) {
            throw new Unauthorized(EMPTY_USER_TOKEN_MESSAGE, EMPTY_USER_TOKEN_CODE)
        }

        req.body.idUser = decoded.idUser

        next()
    }
    catch (error) {
        if (error instanceof DomainError) {
            res.status(error.getHttpCode()).send( {message: error.getErrorMessage(), code: error.getErrorCode})
            return;
        }
        res.status(401).send({message: GENERAL_UNAUTHORIZE_MESSAGE, code: GENERAL_UNAUTHORIZE_CODE})
    }

}