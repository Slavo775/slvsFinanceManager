import app from './app'
import * as dotenv from 'dotenv';
import chalk from 'chalk';

// inicialize .env file
dotenv.config();
if (!process.env.PORT) {
   // tslint:disable-next-line:no-console
   console.error(chalk.black.bgRed.bold('Port is not defined in .env file!'));
   process.exit(1 as any);
}
// get port for app
const PORT: number = parseInt(process.env.PORT as string, 10);

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
   console.log(`API is listening on port ${PORT}!`)
});
