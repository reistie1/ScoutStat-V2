// if (process.env.NODE_ENV !== 'production'){
//     require('dotenv').config()
// }

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const bodyParser = require('body-parser')
const methodeOverride = require('method-override')
const { urlencoded } = require('body-parser')
const cookieParser = require('cookie-parser')

const port = process.env.PORT || 5000

//Mongodb 

require('dotenv').config()

// Express Middleware
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(bodyParser.json({type: 'application/*+json'}))
app.use(passport.initialize())


mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log('MongodB database connection established successfully')
})
connection.on('error', error => console.log(error))


app.use('/users',require('./routes/userRouter'))
app.use('/players', require('./routes/playerRouter'))


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})