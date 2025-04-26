// const http = require('http')
const express = require('express')
const app = express()

app.use((req,res,next)=>{
    // console.log(req.url);
    // console.log('Yes we did it !!')
    next();
})

app.use((req,res)=>{
    res.send('<h1> Hai </h1>')
    // console.log('Yes we did it again!!')
})

// const server = http.createServer(app)
// server.listen(3000)

app.listen(3000)