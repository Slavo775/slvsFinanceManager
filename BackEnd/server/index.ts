import express from 'express';

// Create new express app instance
const app: express.Application = express();

app.get('/', (req, res) => {
    res.send('Welcome to slvs personal financial manager!')
});

app.listen('3000', () => {
    // tslint:disable-next-line:no-console
   console.log('API is listening on port 3000!')
});
