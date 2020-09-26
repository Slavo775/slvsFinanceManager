"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = (url) => {
    const connect = () => {
        mongoose_1.default.connect(url, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: true
        })
            .then(() => {
            // tslint:disable-next-line
            console.log('Mongo is ready');
        })
            .catch((error) => {
            // tslint:disable-next-line
            console.log(error);
        });
    };
    connect();
    mongoose_1.default.connection.on("disconnected", connect);
};
// import mongoose from 'mongoose'
// const mongoUrl: string|undefined = process.env.MONGO_DB_URL
// mongoose.connect(mongoUrl, {
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useFindAndModify: true
// }, (error: string) => (console.log(error)));
