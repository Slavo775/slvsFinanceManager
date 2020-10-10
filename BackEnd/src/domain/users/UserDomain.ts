import { Schema } from 'mongoose'
import JWTToken from 'jsonwebtoken'
import ConfigError from '../../errors/ConfigError'
import { JWT_SECRET_CONFIG_MESSAGE, JWT_SECRET_CONFIG_CODE } from '../../config/errorCodes';

export default class UserDomain {

    private idUser!: Schema.Types.ObjectId;

    private googleId!: string

    private email!: string

    private jwtToken!: string

    public getJwtToken(): string
    {
        return this.jwtToken!;
    }

    public setJwtToken(jwtToken: string): void
    {
        this.jwtToken! = jwtToken!;
    }

    public getIdUser(): Schema.Types.ObjectId
    {
        return this.idUser;
    }

    public setIdUser(idUser: Schema.Types.ObjectId): void
    {
        this.idUser = idUser;
        this.generateJWTToken()
    }

    public getGoogleId(): string {
        return this.googleId;
    }

    public setGoogleId(googleId: string): void
    {
        this.googleId = googleId;
    }

    public getEmail(): string
    {
        return this.email;
    }

    public setEmail(email: string): void
    {
        this.email = email;
    }

    private generateJWTToken(): void
    {
        const JWTSecret = process.env.JWT_USER_SECRET
        if (JWTSecret) {
            this.setJwtToken( JWTToken.sign({idUser: this.getIdUser()}, JWTSecret) )
        } else {
            throw new ConfigError(JWT_SECRET_CONFIG_MESSAGE, JWT_SECRET_CONFIG_CODE)
        }
    }
}