import { Schema } from 'mongoose'

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
}