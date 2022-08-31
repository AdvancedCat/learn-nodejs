import 'dotenv/config'

import { createRequire } from "module";
import express from 'express'
import swaggerUi from 'swagger-ui-express'

const require = createRequire(import.meta.url);
const swaggerDocument = require("./swagger.json");

/* create an express app and use JSON */
const app = new express()
app.use(express.json())

/* set up swagger in the root */
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

/* start the server */
app.listen(8080)