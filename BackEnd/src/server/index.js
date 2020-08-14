"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var chalk_1 = __importDefault(require("chalk"));
var port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : '';
if (port === '') {
    // tslint:disable-next-line:no-console
    console.error(chalk_1.default.black.bgRed.bold('Port is not defined in .env file!'));
    process.exit(1);
}
// get port for app
var PORT = parseInt(port, 10);
app_1.default.listen(PORT, function () {
    // tslint:disable-next-line:no-console
    console.log("API is listening on port " + PORT + "!");
});
