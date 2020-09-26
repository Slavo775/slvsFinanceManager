"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
// components with security schemes
const components = {
    securitySchemes: {
        BearerAuth: { type: 'http', scheme: 'bearer' }
    }
};
// Definition for swgger docs
const swaggerDefinition = {
    openapi: '3.0.1',
    info: {
        title: 'Slvs financial manager',
        description: 'Financial manager make your money fit.',
        version: '1.0.0',
        contact: {
            name: 'Slavomir Sedlak'
        },
        servers: ['http://localhost:7000'],
        basePath: '/info'
    },
    components,
    security: [
        { OAuth2: [] }
    ]
};
const swaggerOptions = {
    swaggerDefinition,
    apis: ['./docComponents/*.yaml']
};
const swaggerDocs = swagger_jsdoc_1.default(swaggerOptions);
exports.default = swaggerDocs;
