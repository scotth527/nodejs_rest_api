let mongoose = require('mongoose')
const {user_name, password, connection} = require('../../config')
//must npm install mongoose, mongoose can deal with the data from mongodb

//npm body-parser will take string and convert to json
//only connect once in the beginning of the program
mongoose.connect(`mongodb+srv://${user_name}:${password}@${connection}`,
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }
)


let CustomerSchema = new mongoose.Schema({
  name:{
    type:String,
    default:"Jeff"},
  email: {
    type:String,
    require:true,
    unique:true

  },
  age: { type: Number, min:18, max: 65, default:18}

})

module.exports = mongoose.model('Customer', CustomerSchema)
