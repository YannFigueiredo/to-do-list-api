import express from "express"
import Database from "./database/connection.js"
import router from "./routes.js"

const app = express()

app.use(express.json())

app.use(router)

Database.createConnection()

export default app
