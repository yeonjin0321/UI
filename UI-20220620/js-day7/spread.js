//리액트에서 우선순위
// 리액트는 데이터 변경이 있는 경우에만 새로 렌더링을 함.

const colors = ["red", "green", "blue"];
//기존의 배열이 새로운 배열로 복제가 되는 것이다. - 리액트에서 상태 변화가 감지 -> 자동으로 랜더링 된다.
//기존의 DOM과 가상의 DOM을 비교해서 데이터 변경사항이 발생 -> 자동렌더링을 처리해준다.
const colors2 =  [...colors, "black"];
const colors3 =  ["white",...colors ];
console.log(colors2);
console.log(colors3);
//리액트에서는 상태를 관리하는 HOOK이 있다. useState
//useState훅에서는 원본을 바꾸지 않는다.

let dept = {
  deptno: 10,
  dname: "총무부",
  loc: "인천",
}
let emp = {
  empno: 7566,
  ename: "scott",
}

let newObj = {...dept, ...emp};
console.log(newObj); //두개의 객체가 합쳐진 것을 확인할 수 있다.

let newObj2 = {...emp, empno: 7499 , ename: 'king'};

//기존에 emp 객체를 덮어 씌운다.
console.log(newObj2);

// useState({}), useState [{}]<- 제네릭 같은 패턴
//객체일때는 덮어지지만, 괄호 형태일때는 추가가되는 형태이다.
let depts = [

  {deptno:10 , dname:"총무부", loc:"인천"},
  {deptno:20 , dname:"개발부", loc:"서울"},
  {deptno:30 , dname:"인사부", loc:"울산"},

]

let dept2= [ ...depts, {dept:40, dname:"운영부", loc:"제주"}];
console.log(dept2); 
let dept3= [ ...depts, {dept:50}]
console.log(dept3); // 부서만 50으로 들어가고 나머지는 null처리.


var dateFields = [1970, 0, 1];  // 1 Jan 1970
var d = new Date(...dateFields);
console.log(d);


//예제

function applyAndNew(constructor, args) {
  function partial () {
    return constructor.apply(this, args);
  };
  if (typeof constructor.prototype === "object") {
    partial.prototype = Object.create(constructor.prototype);
  }
  return partial;
}


function myConstructor () {
  console.log("arguments.length: " + arguments.length);
  console.log(arguments);
  this.prop1="val1";
  this.prop2="val2";
};

var myArguments = ["hi", "how", "are", "you", "mr", null];
var myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments);
// (internal log of myConstructor):           arguments.length: 6
// (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
// (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}