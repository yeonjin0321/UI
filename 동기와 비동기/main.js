function add(x) {
  return x+2; /* 여기를 주석으로 막으면 결과 도출이 안된다. */
}


function account(a,b, cb){ //파라미터에 콜백함수를 담았다. cb <- 핫스팟이다 여기에 집중!
  setTimeout(()=>{
    cb( a+b ) //30이 나온다
}, 2000);
} 

const result = add(3);
const temp = result;

const result2 = account(10,20, (result)=> {
console.log('result: ', result);
});

const temp2 = result2;
console.log('temp2 : ', temp2); //자바와는 다르게 void가 없어서 undefined로 나옴.





/* 

*/


function printWithDelay(callback, sec){
  setTimeout(callback, sec*1000)
}

printWithDelay(()=>console.log("async callback"), 5) /*hello찍히고 나서 5초 후에 async callback이 찍힘 */
console.log("hello")


/* 포켓몬 진화  */
const initialPokemon = () =>
  new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('파이리'), 1000)
  });

const nextPokemon = prevPokemon =>
  new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(`${prevPokemon} => 리자드`), 1000)
  });

const finalPokemon = prevPokemon =>
  new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(`${prevPokemon} => 리자몽`), 1000)
  });

initialPokemon() // 1초 소요
  .then(prev=>{
    console.log(prev) // 파이리
    return nextPokemon(prev) // 1초 소요
  })
  .then(prev=>{
    console.log(prev) // 파이리 => 리자드
    return finalPokemon(prev) // 1초 소요
  })
  .then(console.log) // 파이리 => 리자드 => 리자몽
  


//async await를 사용한 예시 코드를 살펴보자. 
  const getTodo = async (id) => {
    const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const todo = await todoResponse.json()
    return todo;
  }
  
  getTodo(172).then(console.log)