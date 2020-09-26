"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const chalk_1 = __importDefault(require("chalk"));
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : '';
if (port === '') {
    // tslint:disable-next-line:no-console
    console.error(chalk_1.default.black.bgRed.bold('Port is not defined in .env file!'));
    process.exit(1);
}
// get port for app
const PORT = parseInt(port, 10);
app_1.default.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`API is listening on port ${PORT}!`);
});
