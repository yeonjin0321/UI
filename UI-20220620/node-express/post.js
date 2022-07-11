const express = require('express')
const app = express()
//nodejs로 부터 요청객체와 응답 객체는 주입 받음
app.post("/", (req,res)=> {
console.log(req.body);
});

app.listen(3002);

/* 
http://localhost:3002/kh/tomato
http://localhost:3002/kh/tomato?mem_id&mem_pw=123

*/