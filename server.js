const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoClient = require('mongoose'),
      port = process.env.PORT || 3000
mongoClient.connect('mongodb://localhost:27017/fileupload',{useFindAndModify:false,useNewUrlParser:true,useUnifiedTopology:true})



app.listen(port,()=>{
    console.log(`Server started with ${port} port!!!`)
})
