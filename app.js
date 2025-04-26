const http = require('http')
const express = require('express')
const app = express()

app.use((req,res,next)=>{
    console.log('Yes we did it !!')
    next();
})

app.use(()=>{
    console.log('Yes we did it again!!')
})

const server = http.createServer(app)
server.listen(3000)