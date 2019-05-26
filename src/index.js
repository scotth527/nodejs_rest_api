let express = require('express')

let app = express()
let bodyParser = require('body-parser')
let customerRoute = require('./routes/customer')
let personRoute = require('./routes/person')
let path = require('path')
const {user_name} = require('../config');

console.log(`Your port is ${user_name}`); // 8626
//Middleware takes 3 parameters, req, res, next (which is the next function)
app.use(bodyParser.json())


//Order of middleware is important
app.use((req,res,next)=> {
  console.log(`${new Date().toString()} => ${req.originalUrl}`)
  next()
})
app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))
//handler for 404
app.use((req,res,next)=> {
  res.status(404).send("We think you are lost")
})


//handler for Error
app.use((err,req,res,next)=> {
  console.error(err.stack)

  res.sendFile(path.join(__dirname,'../public/500.html'))
})
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> console.info(`Server has started on ${PORT}`))
