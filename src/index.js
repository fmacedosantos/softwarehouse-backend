require('dotenv').config()

const express = require('express')
const positionsRouter = require('./routes/positions.routes')
const employeesRouter = require('./routes/employees.routes')

const app = express()

app.use(express.json())

app.use('/positions', positionsRouter)
app.use('/employees', employeesRouter)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}`)
})