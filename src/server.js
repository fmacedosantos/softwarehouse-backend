require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const usersRouter = require('./routes/users.routes')
const positionsRouter = require('./routes/positions.routes')
const employeesRouter = require('./routes/employees.routes')

const app = express()

app.use(bodyParser.json())
app.use(cors({
  origin: process.env.CORS_ORIGIN
}))

app.use('/users', usersRouter)
app.use('/positions', positionsRouter)
app.use('/employees', employeesRouter)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}...`)
})