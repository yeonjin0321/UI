
//JAVASCRIPT는 동기적이다.(디폴트값이)
//밑의 예제는 비동기처리를 한 것이다. 
//동시에 일어나지 않고, 1,3이 실행되고 2초후 2가 나타나는것.

console.log(1);

setTimeout(()=>{
console.log(2);
},2000);

console.log(3);

/* 1,3,2(2초후 2 생성) */