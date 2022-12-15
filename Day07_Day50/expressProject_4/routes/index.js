
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.render('index', {title : 'Express'});
});


module.exports = router;

/*
router.get('/',(req, res)=>{
    res.send('HELLO EXPRESS');
});
*/

/*
//GET 과 POST 방법1. 기본 사용해보기
router.get('/abc',(req, res)=>{
    res.send('GET /abc');
});

router.post('/abc',(req, res)=>{
    res.send('POST /abc');
});
*/


//GET 과 POST 방법2. route로 묶어서 사용해보기 
router.route('/abc')
.get((req, res)=>{
    res.send('GET /abc');
})
.post((req, res)=>{
    res.send('POST /abc');
});
