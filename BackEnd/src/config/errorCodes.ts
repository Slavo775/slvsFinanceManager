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

export const EXPENDITURE_REQUEST_CODE = 105
export const EXPENDITURE_REQUEST_MESSAGE = 'Request does not have property'

export const ID_EXPENDITURE_MISSING_CODE = 106
export const ID_EXPENDITURE_MISSING_MESSAGE = 'Id Expenditure missing!'

export const EXPENDITURE_OBJECT_MISSING_CODE = 107
export const EXPENDITURE_OBJECT_MISSING_MESSAGE = 'Expenditure data missing!'

export const RECEIPT_REQUEST_CODE = 108
export const RECEIPT_REQUEST_MESSAGE = 'Request does not have property'

export const ID_RECEIPT_MISSING_CODE = 109
export const ID_RECEIPT_MISSING_MESSAGE = 'Id Receipt missing!'

export const RECEIPT_OBJECT_MISSING_CODE = 110
export const RECEIPT_OBJECT_MISSING_MESSAGE = 'Receipt data missing!'

export const SAVE_REQUEST_CODE = 111
export const SAVE_REQUEST_MESSAGE = 'Request does not have property'

export const ID_SAVE_MISSING_CODE = 112
export const ID_SAVE_MISSING_MESSAGE = 'Id save missing!'

export const SAVE_OBJECT_MISSING_CODE = 113
export const SAVE_OBJECT_MISSING_MESSAGE = 'Save data missing!'

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

export const EXPENDITURE_NOT_FOUND_CODE = 402
export const EXPENDITURE_NOT_FOUND_MESSAGE = 'Receipt not found!'

export const RECEIPT_NOT_FOUND_CODE = 403
export const RECEIPT_NOT_FOUND_MESSAGE = 'Receipt not found!'

export const SAVE_NOT_FOUND_CODE = 403
export const SAVE_NOT_FOUND_MESSAGE = 'Receipt not found!'