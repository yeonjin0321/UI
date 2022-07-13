const color = ["red", "green", "blue"];
const color1 = color[0]; 
const color2 = color[1]; 
const color3 = color[2]; 
console.log(color1, color2, color3);

const [c1,c2,c3] = color;
console.log(color);
console.log(c1,c2,c3)
//react - 일급함수 -구조분해할당 -부모태그에서 하위태그로 일급함수를 전달 할 수 있다.
;
[c1,c2,c3].map(function(item,  i){
console.log(item,i);
});

color.map(function(item,i){
  console.log(item,i);
});

const dept = {
  deptno : 10 ,
  dname: "개발팀",
  loc: "대구",
}

//useState({})
//useState([])

const {deptno, dname, loc} = dept;
console.log(deptno,dname,loc);



//mdn 예제

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50] -> a와 b는 이미 할당되었다.



//예제2

var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2

//예제3

var foo = ["one", "two", "three"];

var [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

//예제 4

var a1, b1;

[a1, b1] = [1, 2];
console.log(a1); // 1
console.log(b1); // 2