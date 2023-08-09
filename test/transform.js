// const collection = require('./PactflowProductsAPI.postman_collection.json');
// const { transpile } = require('postman2openapi');
// const fs = require('fs')

// const postman = JSON.stringify(collection);
// const openapi = transpile(postman, 'yaml');
// const filePath = __dirname + "/../oas/openapi.yml"

// fs.writeFileSync(filePath, openapi);

// console.log('Postman collection successfully converted to OAS and stored at the following location',filePath)

const postmanToOpenApi = require('postman-to-openapi')

const postmanCollection = './test/PactflowProductsAPI.postman_collection.json'
const outputFile = __dirname + "/../oas/swagger.yml"

postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
    .then(result => {
        console.log(`OpenAPI specs: ${result}`)
    })
    .catch(err => {
        console.log(err)
    });
