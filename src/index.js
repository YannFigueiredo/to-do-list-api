import express from "express"
import Database from "./database/connection.js"

const app = express()

app.use(express.json())

Database.createConnection()

export default app
