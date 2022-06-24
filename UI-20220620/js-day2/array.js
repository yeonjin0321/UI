//배열
// 연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조.

const colors = ["red", "green", "blue"];
console.log(colors);
// array fuction

colors.forEach((color) => console.log(color)); //최신문법

colors.forEach(function(color){ // 예전문법
console.log(`element ==> ${color}`);
});

colors[1] = "black";
colors.map((color) => console.log("map",color)); //[0.black,1]로 바뀌었다. 나중에 리액트에서도 많이 사용하게 될것. 연습하기

//배열 선언.
const copy = [];

for(let i=0; i<colors.length;i++){
  copy.push(colors[i]);
  console.log(`copy[${i}] : ${copy[i]}`);
}

colors.forEach(function(item){
  copy.push(item);
  console.log(`copy : ${copy}`);
});

function add(a,b){
  const result = a+b;
  return result;
}

const add1 = function (a,b){
  const result = a+b;
  return result;
}
// 화살표 함수라고 한다. arrow fuction = 기존의 익명함수를 좀더 쓰기 편하게 축약한 형태이다.
const add2 = (a,b) => {
  const result = a+b;
  return result;
}

add2(3,4);

console.log(add2(3,4));

const msg = (txt) => {
  return txt;
}
//내부로 전달되는 파라미터가 하나면, 괄호는 생략이 가능하다.
const msg2 = (txt) => txt;

console.log(msg2('hello arrow function'));