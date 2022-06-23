//함수
//함수는 객체이다.
//매소드오버로딩, 오버라이딩 지원없다.

function hap (a,b){
  const result = a+b;
  return a+b;
}

console.log(hap(1,3));

let lastName = '김';
let firstName = '춘추';
let fullName = `$(lastName) $(fistName)`;

let lastName2 = '이';
let firstName2 = '순신';
let fullName2 = `$(lastName) $(fistName)`;

function namePrint(firstName,lastName) {
  return `$(LastName) $(firstName)`;
}

console.log(namePrint(firstName,lastName));
console.log(namePrint(firstName,lastName));

//total 변수도 hap과 동일한 메모리 주소를 갖는다.
const total = hap;
console.log(hap(2,3));
console.log(total(2,3));