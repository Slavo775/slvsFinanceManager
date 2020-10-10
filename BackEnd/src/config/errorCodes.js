"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COOKIE_USER_MISSING_MESSAGE = exports.COOKIE_USER_MISSING_CODE = exports.ID_USER_MISSING_MESSAGE = exports.ID_USER_MISSING_CODE = exports.EMPTY_USER_TOKEN_MESSAGE = exports.EMPTY_USER_TOKEN_CODE = exports.UNAUTHORIZE_BY_GOOGLE_MESSAGE = exports.UNAUTHORIZE_BY_GOOGLE_CODE = exports.GENERAL_UNAUTHORIZE_MESSAGE = exports.GENERAL_UNAUTHORIZE_CODE = exports.JWT_SECRET_CONFIG_MESSAGE = exports.JWT_SECRET_CONFIG_CODE = exports.GOOGLE_ID_CONFIG_MESSAGE = exports.GOOGLE_ID_CONFIG_CODE = exports.GENERAL_CONFIG_ERROR_MESSAGE = exports.GENERAL_CONFIG_CODE = exports.EMAIL_VALIDATION_MESSAGE = exports.EMAIL_VALIDATION_CODE = exports.GENERAL_VALIDATION_MESSAGE = exports.GENERAL_VALIDATION_CODE = void 0;
// 1xx Validation errors
exports.GENERAL_VALIDATION_CODE = 100;
exports.GENERAL_VALIDATION_MESSAGE = 'Unknown validation error!';
exports.EMAIL_VALIDATION_CODE = 101;
exports.EMAIL_VALIDATION_MESSAGE = 'Email is incorrect!';
// 2xx Config errors
exports.GENERAL_CONFIG_CODE = 200;
exports.GENERAL_CONFIG_ERROR_MESSAGE = 'Unknown config error!';
exports.GOOGLE_ID_CONFIG_CODE = 201;
exports.GOOGLE_ID_CONFIG_MESSAGE = 'GOOGLE_CLIENT_ID missing in .env file!';
exports.JWT_SECRET_CONFIG_CODE = 202;
exports.JWT_SECRET_CONFIG_MESSAGE = 'JWT_USER_SECRET missing in .env file';
// 3xx Unauthorize
exports.GENERAL_UNAUTHORIZE_CODE = 300;
exports.GENERAL_UNAUTHORIZE_MESSAGE = 'Unknown Authorization error!';
exports.UNAUTHORIZE_BY_GOOGLE_CODE = 301;
exports.UNAUTHORIZE_BY_GOOGLE_MESSAGE = 'Authorization by google fail!';
exports.EMPTY_USER_TOKEN_CODE = 302;
exports.EMPTY_USER_TOKEN_MESSAGE = 'Empty user token!';
exports.ID_USER_MISSING_CODE = 303;
exports.ID_USER_MISSING_MESSAGE = 'Empty user id!';
exports.COOKIE_USER_MISSING_CODE = 304;
exports.COOKIE_USER_MISSING_MESSAGE = 'Cookie "user" missing!';
