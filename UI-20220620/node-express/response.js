const express = require('express')
const app = express()
//nodejs로 부터 요청객체와 응답 객체는 주입 받음
app.get("/kh/:id", (req,res)=> {

  console.log(`mem_id: ${req.query.mem_id}, mem_pw:${req.query.mem_pw}`);
  //res.json({"mem_id":"apple"});
  res.sendStatus(400);
  return;
});

app.listen(3002);

/* 
http://localhost:3002/kh/tomato
http://localhost:3002/kh/tomato?mem_id&mem_pw=123

*/