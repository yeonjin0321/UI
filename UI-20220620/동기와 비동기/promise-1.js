const p = new Promise ((resolve, reject) => { /* 인주 둘다 함수이다 괄호가 있다. 리졸브 리젝트 함수 */
setTimeout(() => {
  resolve('OK');
}, 2000);  
//reject('Fail');
});

p.then((ok) => {
  console.log('첫번째 성공');
  return new Promise((resolve, reject)=> {
setTimeout(()=> {
  console.log('두번째 성공');
},3000);
  })
}).then(function (ok) {
  console.log(ok);
})
.catch((error)=> {
  console.log(error);
})

//애로우펑션, 기본함수 꼴 상관없다. 편한대로 쓰지만 애로우펑션으로 쓰는 연습 하기.
//비동기가 복잡하게 엮어 있을때 단순하게 업무처리를 하기 위해서 프로미스라는 객체를 지원해주는 것이다.




/* 

Promise.reject(reason)
주어진 사유로 거부하는 Promise 객체를 반환합니다.

Promise.resolve()
주어진 값으로 이행하는 Promise 객체를 반환합니다. 
이때 지정한 값이 then 가능한(then 메서드를 가지는) 값인 경우, 
Promise.resolve()가 반환하는 프로미스는 then 메서드를 "따라가서" 자신의 최종 상태를 결정합니다. 
그 외의 경우, 반환된 프로미스는 주어진 값으로 이행합니다.

어떤 값이 프로미스인지 아닌지 알 수 없는 경우, 보통 일일히 두 경우를 나눠서 처리하는 
대신 Promise.resolve()로 값을 감싸서 항상 프로미스가 되도록 만든 후 작업하는 것이 좋습니다.

*/