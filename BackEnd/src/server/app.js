"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// tslint:disable-next-line
const Test = require('../models/testModel');
const mongoose_1 = __importDefault(require("../db/mongoose"));
const info_1 = __importDefault(require("../server/routes/info"));
const doc_1 = __importDefault(require("../server/routes/doc"));
const userRoutes_1 = __importDefault(require("../server/routes/userRoutes"));
// Create new express app instance
const app = express_1.default();
// inicialize .env file
dotenv.config();
// express session initialize
app.use(express_session_1.default({
    secret: 'tralalala',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}));
// connect to DB
const mongoUrl = process.env.MONGO_DB_URL || '';
mongoose_1.default(mongoUrl);
// security
app.use(helmet_1.default());
app.use(cookie_parser_1.default());
// allows cors policy
app.use(cors_1.default());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Ok!');
});
app.use(info_1.default);
app.use(doc_1.default);
app.use(userRoutes_1.default);
exports.default = app;
