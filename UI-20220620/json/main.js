import dept from './dept.json';
console.log(dept);
console.log(typeof dept); //객체로 떨어진다.

const user ={
  name : 'scott',
  age : 30,
  emails:[
    'test@hot.com',
    'nice@gmail.com',
  ]
}
console.log(user.name);
console.log(user.age);
user.age =15;
console.log(user['age']);
console.log(user.emails);
console.log(user['emails']);
console.log(user['emails'][0]);
console.log(user['emails'][1]);

const str =JSON.stringify(user);
console.log(str);
console.log(typeof str); //타입은 스트링이다.
const obj = JSON.parse(str);
console.log(obj); //다시 객체이다.
console.log(typeof obj);

console.log('user',user);
console.log(typeof user); //타입은 객체이다