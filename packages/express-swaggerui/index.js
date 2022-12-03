import 'dotenv/config'

import { createRequire } from "module";
import express from 'express'
import swaggerUi from 'swagger-ui-express'

import {add} from './utils.js'

const require = createRequire(import.meta.url);
const swaggerDocument = require("./swagger.json");
console.log('你好中国', add(1,2))
/* create an express app and use JSON */
const app = new express()
app.use(express.json())

/* set up swagger in the root */
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

/* start the server */
app.listen(8080)