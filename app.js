const express = require('express')
const app = express()
const roter = require('./routes/authroutes');

app.use("/methods",roter)

app.get('/',(req,res,next)=>{
    res.send({status:"UP"} );
    next();
})

app.use((req,res,next)=>{
    res.status(404).send('Page not found !!')
})

app.listen(3000)