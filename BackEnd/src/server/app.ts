import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
// tslint:disable-next-line
const Test = require('../models/testModel');

import '../db/mongoose.js'

// Create new express app instance
const app: express.Application = express();

// inicialize .env file
dotenv.config();

// set security headers
app.use(helmet());
// allows cors policy
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ono to zije!');
});

app.get('/test', async (req, res) => {
    // const test = new Test();
    // await test.save({testData: 'testData'});
    // tslint:disable-next-line
    res.status(200).send( await Test.find({testData: 'testData'}) );

});

app.get('/welcome', (req, res) => {
  res.send('Welcome to slvs personal financial manager!')
});

export default app
