import app from './app'
import chalk from 'chalk'

const port: string = process.env.PORT ?? '';

if (port === '') {
  // tslint:disable-next-line:no-console
  console.error(chalk.black.bgRed.bold('Port is not defined in .env file!'))
  process.exit(1 as any)
}
// get port for app
const PORT: number = parseInt(port, 10)

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`API is listening on port ${PORT}!`)
})
