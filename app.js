require('dotenv').config()

const express = require('express')
const {connectDatabase} = require('./connection')
const path = require('path')
const {createLogs} = require('./middlewares/logs')
const cookieParser = require('cookie-parser')
const {softAuth} = require('./middlewares/auth')
const userRouter = require('./routes/users')
const homeRouter = require('./routes/home')

// setting up app
const app = express()
const port = process.env.PORT || 8000

// database connection
connectDatabase(process.env.MONGO_URL)
.then(() => console.log('database connected.'))
.catch((err) => console.log('error in database connection.'))

app.use(express.urlencoded({extended : false}))
app.use(createLogs('./logs.txt'))
app.use(cookieParser())

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use('/user/', userRouter)
app.use('/', softAuth, homeRouter)

// server listening
app.listen(port, () => console.log(`server is listening at port ${port}`))