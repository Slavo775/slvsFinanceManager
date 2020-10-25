import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import expressSession from 'express-session'
import cookieParser from 'cookie-parser'
// tslint:disable-next-line
const Test = require('../models/testModel');

import dbConnect from '../db/mongoose'

import infoRoutes from '../server/routes/info'
import docRoutes from '../server/routes/doc'
import userRoutes from '../server/routes/userRoutes'
import categoriesRoutes from '../server/routes/categoriesRoutes'

// Create new express app instance
const app: express.Application = express();

// inicialize .env file
dotenv.config();

// express session initialize
app.use(expressSession({
  secret: 'tralalala',
  resave: false,
  saveUninitialized: false,
  cookie: {secure: true}
}))

// connect to DB
const mongoUrl: string = process.env.MONGO_DB_URL || ''
dbConnect(mongoUrl)

// security
app.use(helmet());
app.use(cookieParser());

// allows cors policy
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ok!');
});

app.use(infoRoutes)
app.use(docRoutes)
app.use(userRoutes)
app.use(categoriesRoutes)

export default app
