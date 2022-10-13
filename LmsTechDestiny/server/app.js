const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const app = express()

dotenv.config({path:'./config.env'})

require('./db/conn')
app.use(express.json())
app.use(cookieParser())

app.use(require('./routes/auth'))

const port = process.env.PORT || 8000

// middleware
// const middleware = ((req, res, next) => {
//     console.log("middleware")
//     next()
// })

// app.use(middleware);

// app.get('/about',middleware, (req, res) => {
//     res.send("Hello World from about")
// })

app.get('/signup', (req, res) => {
    res.send("Hello World from signup")
})

app.listen(port,() => {
    console.log(`Server is runinng at port ${port}`)
})