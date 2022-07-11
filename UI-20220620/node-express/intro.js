const express = require('express'); 

const app = express();


app.get("/", (req,res)=> {
  console.log("get");
  res.send("안녕하세요 서버의 <font color=red>응답</font>입니다");
});
app.listen(3002);