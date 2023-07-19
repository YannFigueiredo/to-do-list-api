import express from "express"
import Database from "./database/connection.js"
import router from "./routes.js"
import dotenv from "dotenv"

const app = express()

app.use(express.json())

app.use(router)

dotenv.config()

Database.createTable()

export default app
