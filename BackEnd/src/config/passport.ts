import GoogleOAuth from 'passport-google-oauth20'
import { PassportStatic } from 'passport'
import UserController from '../controller/userController'

const GoogleStrategy = GoogleOAuth.Strategy

export default function (passport: PassportStatic) {
    passport.use(new GoogleStrategy({
        clientID: 'clientID',
        clientSecret: 'clientSecret',
        callbackURL: '/auth/google/callback'
    }, async (accessToken, refreshToken, profile, done) => {
        // tslint:disable-next-line
        console.log(profile)
    }))

    passport.serializeUser( (user: {id: string}, done) => {
        done(null, user.id)
    })

    passport.deserializeUser(function (id, done){})
}