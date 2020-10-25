// 1xx Validation errors
export const GENERAL_VALIDATION_CODE = 100
export const GENERAL_VALIDATION_MESSAGE = 'Unknown validation error!'

export const EMAIL_VALIDATION_CODE = 101
export const EMAIL_VALIDATION_MESSAGE = 'Email is incorrect!'

export const CATEGORY_REQUEST_CODE = 102
export const CATEGORY_REQUEST_MESSAGE = 'Request does not have property'

export const ID_CATEGORY_MISSING_CODE = 103
export const ID_CATEGORY_MISSING_MESSAGE = 'Id category missing!'

export const CATEGORY_OBJECT_MISSING_CODE = 104
export const CATEGORY_OBJECT_MISSING_MESSAGE = 'Category data missing!'

// 2xx Config errors
export const GENERAL_CONFIG_CODE = 200
export const GENERAL_CONFIG_ERROR_MESSAGE = 'Unknown config error!'

export const GOOGLE_ID_CONFIG_CODE = 201
export const GOOGLE_ID_CONFIG_MESSAGE = 'GOOGLE_CLIENT_ID missing in .env file!'

export const JWT_SECRET_CONFIG_CODE = 202
export const JWT_SECRET_CONFIG_MESSAGE = 'JWT_USER_SECRET missing in .env file'

// 3xx Unauthorize
export const GENERAL_UNAUTHORIZE_CODE = 300
export const GENERAL_UNAUTHORIZE_MESSAGE = 'Unknown Authorization error!'

export const UNAUTHORIZE_BY_GOOGLE_CODE = 301
export const UNAUTHORIZE_BY_GOOGLE_MESSAGE = 'Authorization by google fail!'

export const EMPTY_USER_TOKEN_CODE = 302
export const EMPTY_USER_TOKEN_MESSAGE = 'Empty user token!'

export const ID_USER_MISSING_CODE = 303
export const ID_USER_MISSING_MESSAGE = 'Empty user id!'

export const COOKIE_USER_MISSING_CODE = 304
export const COOKIE_USER_MISSING_MESSAGE = 'Cookie "user" missing!'

// 4xx Database
export const GENERAL_DATABASE_ERROR_CODE = 400
export const GENERAL_DATABASE_ERROR_MESSAGE = 'Unknown database error!'

export const CATEGORY_NOT_FOUND_CODE = 401
export const CATEGORY_NOT_FOUND_MESSAGE = 'Category not found!'