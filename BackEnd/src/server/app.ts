import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';

import '../db/mongoose.js'

// Create new express app instance
const app: express.Application = express()

// inicialize .env file
dotenv.config()

// set security headers
app.use(helmet())
// allows cors policy
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to slvs personal financial manager!')
})

export default app
