// 1xx Validation errors
export const GENERAL_VALIDATION_CODE = 100
export const GENERAL_VALIDATION_MESSAGE = 'Unknown validation error!'

export const EMAIL_VALIDATION_CODE = 101
export const EMAIL_VALIDATION_MESSAGE = 'Email is incorrect!'

// 2xx Config errors
export const GENERAL_CONFIG_CODE = 200
export const GENERAL_CONFIG_ERROR_MESSAGE = 'Unknown config error!'

export const GOOGLE_ID_CONFIG_CODE = 201
export const GOOGLE_ID_CONFIG_MESSAGE = 'GOOGLE_CLIENT_ID missing in .env file!'

// 3xx Unauthorize
export const GENERAL_UNAUTHORIZE_CODE = 300
export const GENERAL_UNAUTHORIZE_MESSAGE = 'Unknown Authorization error!'

export const UNAUTHORIZE_BY_GOOGLE_CODE = 301
export const UNAUTHORIZE_BY_GOOGLE_MESSAGE = 'Authorization by google fail!'

export const EMPTY_USER_TOKEN_CODE = 302
export const EMPTY_USER_TOKEN_MESSAGE = 'Empty user token!'