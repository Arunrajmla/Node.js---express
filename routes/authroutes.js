const express = require('express')

const roter = express.Router();

roter.get('/getmethod',(req,res)=>{
    res.send('Haii get method is worked');
})

module.exports = roter;