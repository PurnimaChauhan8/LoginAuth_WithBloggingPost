const express = require('express');
const app = express();
const PORT = 8543;
const path = require('path')
const bodyParser = require('body-parser');
const TestRoutes  = require('./Routes/TestingRoutes')
const ProjectRoutes  = require('./Routes/Routes')
const db = require('./DB/Db')
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(cors())
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root
app.use(express.static(path.join(__dirname, 'Templates'))); //  "public" off of current is root

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended :true}))


app.use('/' , TestRoutes)
app.use('/project' , ProjectRoutes )


app.listen(PORT, ()=>{
    console.log(`Server is Running on PORT : ${PORT}`) // interpolation
})
