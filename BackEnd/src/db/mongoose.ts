import mongoose from 'mongoose'

export default (url: string) => {
    const connect = () => {
        mongoose.connect(url, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: true
          })
          .then(() => {
              // tslint:disable-next-line
                console.log('Mongo is ready')
          })
          .catch((error: string) => {
              // tslint:disable-next-line
                console.log(error)
          })
    }
    connect();

    mongoose.connection.on("disconnected", connect)
}

// import mongoose from 'mongoose'

// const mongoUrl: string|undefined = process.env.MONGO_DB_URL

// mongoose.connect(mongoUrl, {
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useFindAndModify: true
// }, (error: string) => (console.log(error)));