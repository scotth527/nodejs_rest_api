let express = require('express')
let router = express.Router()

//Using query string
//localhost:3000/person?name=thomas&age=20
router.get('/person',(req, res)=> {
  if(req.query.name) {
      res.send(`You have requested a person named, ${req.query.name}`)
  } else {
      res.send("You have requested no one")
  }

})

//can add params with the :, and access it with req.params.nameofparam
router.get('/person/:name',(req, res)=> {
  res.send(`You have requested a person named, ${req.params.name}`)
})

//forced error
router.get('/error',(req, res)=> {
  throw new Error('This is a huge error')
})


module.exports = router
