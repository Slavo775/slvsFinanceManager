const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: true
}, (error) => (console.log(error)));
