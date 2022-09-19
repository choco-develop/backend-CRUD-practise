const { urlencoded } = require('body-parser');
const express=require('express');
const  fs  = require('fs');
const app= express();
const PORT = process.env.PORT || 8000
app.use(bodyParser(urlencoded({extended:true})))
app.get('/',(req,res)=>{
     res.sendFile(__dirname+'/singers.json')
})
app.post('/singers',(req,res)=>{
    fs.readFile('/singers')
    let newList=req.body;
    
})

app.listen(PORT,()=>{console.log('LISTENING ON PORT 8000')})