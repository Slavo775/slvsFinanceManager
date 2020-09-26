import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
// tslint:disable-next-line
const Test = require('../models/testModel');

import dbConnect from '../db/mongoose'

import infoRoutes from '../server/routes/info'
import docRoutes from '../server/routes/doc'

// Create new express app instance
const app: express.Application = express();

// inicialize .env file
dotenv.config();

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

export default app
