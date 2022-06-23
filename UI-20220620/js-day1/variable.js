//변수: 특정 데이터 값을 임시로 저장하는 공간이다.
// -> 특정 값을 자주 사용해야 할 때
// -> 반복적인 구문(값)이 여러 코드에 걸쳐서 빈번히 쓰일 때
// 변수 선언 방식
// ES5 - VAR
// ES6 - Let, const
// Let : 변경될 수 있는 값.
// const : 고정값
// 변수 작성시 유의사항
// 숫자로 시작하는것은 불가, 특수문자(_, $)불가, 예약어 불가, 한글 불가
// 대소문자 구분

let i;
 i=3;
 const j= 5;
 j=6;

 console.log(`변수 i $(i), 변수 j $(j)`);