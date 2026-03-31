const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
 definition: {
 openapi: '3.0.0',
 info: {
 title: 'API DWB',
 version: '1.0.0',
 description: 'API pour DWB' }
 },
 apis: ['./Routes/*.js'] // fichiers à scanner pour générer la doc
};
const specs = swaggerJsdoc(options);

module.exports = specs