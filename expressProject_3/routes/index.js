
const express = require('express');
const router = express.Router();

//get router
router.get('/',(req, res)=>{
    res.send('HELLO EXPRESS');
});

//외부에서 쓸수 있도록 라우터를 익스포트 함
module.exports=router;