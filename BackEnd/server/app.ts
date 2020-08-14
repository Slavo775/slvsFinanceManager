import helmet from 'helmet';
import cors from 'cors';
import express from 'express';


// Create new express app instance
const app: express.Application = express();
app.use(helmet());
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to slvs personal financial manager!')
});

export default app;
