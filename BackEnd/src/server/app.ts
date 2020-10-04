import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import passport from 'passport'
import passportConfig from '../config/passport'
import expressSession from 'express-session'
// tslint:disable-next-line
const Test = require('../models/testModel');

import dbConnect from '../db/mongoose'

import infoRoutes from '../server/routes/info'
import docRoutes from '../server/routes/doc'
import userRoutes from '../server/routes/userRoutes'

// Create new express app instance
const app: express.Application = express();

// inicialize .env file
dotenv.config();
// inicialize passport config
passportConfig(passport)

// express session initialize
app.use(expressSession({
  secret: 'tralalala',
  resave: false,
  saveUninitialized: false,
  cookie: {secure: true}
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// connect to DB
const mongoUrl: string = process.env.MONGO_DB_URL || ''
dbConnect(mongoUrl)

// set security headers
app.use(helmet());

// allows cors policy
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ok!');
});

app.use(infoRoutes)
app.use(docRoutes)
app.use(userRoutes)

export default app
