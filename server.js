const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoClient = require('mongoose'),
      port = process.env.PORT || 3000,
      fileUpload = require('express-fileupload')
mongoClient.connect('mongodb://localhost:27017/fileupload',{useFindAndModify:false,useNewUrlParser:true,useUnifiedTopology:true})
const path = require('path')
app.use(fileUpload())
app.use(express.static(path.join(__dirname, 'fileupload'))) // public thu muc fileupload
app.post('/upload',  (req,res)=>{
    if(!req.files || Object.keys(req.files) === 0 )
        return res.status(400).send('No file were uploaded')
    let fileU = req.files.foo
    fileU.mv('./fileupload/'+fileU.name,err=>{
        if(err)
            return res.status(500).send('Loi: '+ err)
        res.send('File uploaded !!!')
    })
})



app.listen(port,()=>{
    console.log(`Server started with ${port} port!!!`)
})
