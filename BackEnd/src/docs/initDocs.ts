import swaggerJsDoc from 'swagger-jsdoc'

// components with security schemes
const components = {
    securitySchemes: {
      BearerAuth: { type: 'http', scheme: 'bearer' }
    }
  }

  // Definition for swgger docs
  const swaggerDefinition = {
    openapi: '3.0.1',
    info: {
      title: 'Slvs financial manager',
      description:
        'Financial manager make your money fit.',
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
  }

  const swaggerOptions = {
    swaggerDefinition,
    apis: ['./docComponents/*.yaml']
  }

const swaggerDocs = swaggerJsDoc(swaggerOptions)
export default swaggerDocs