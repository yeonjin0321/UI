const express = require('express');
const app = express(); //객체 생성 (heap, stack memory (함수의 호출 순서대로 first in last out))

app.get("/", (req,res,next) => {
    console.log('first'); // 콘솔로그에 찍힌것 
    res.send('hello'); //서버쪽에 응답메세지 [두가지가 다른 얘기이다. 다음 전달은 왜 안될까? -> next가 없어서! ]
    if(true) return; // 이걸 넣어줘서 next까지 못가고 빠져나온다. 첫번째 미들웨어를 빠져나온다.
    next(); // 여기 넣어주니까 첫번째 콘솔창이 first2까지 찍혔다! 
},
(req,res,next) => {
    console.log('first2');
    next();
});

app.get("/:id", (req,res,next) => {
    console.log('middle1');
    res.send('Hello Express!!!');
});


const port = 5000;
app.listen(port, () => {
    console.log(`The Express server is listening at port: ${port}`);
});