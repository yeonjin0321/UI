const express = require('express')
const app = express()

app.post("/", (req,res,next)=> {
console.log("first");
next();
});

app.post("/", (req,res)=> {
  console.log("second");
  res.send('응답처리...');
  return;
  next();
  });

  app.post("/", (req,res)=> {
    console.log("third");
    });
app.listen(3002);