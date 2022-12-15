
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.render('index',{title : '호랑이'});
});

module.exports=router;