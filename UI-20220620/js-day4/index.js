// 변수 선언시 var를 사용하지 않는다. let ,const
// 웹서비스시 비동기적 처리위해서 제공하는 객체이다.
const ajax = new XMLHttpRequest(); // 객체 생성 시에도 마찬가지이다. - 비동기통신객체
//해커뉴스에서 제공하는 뉴스 정보 수집 (postman사용)
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'; //IO통신 -> DEAD LOCK, CRASH
//open함수는 XMLHttpRequest에서 제공하는 함수
//1.get or post 2. url - 데이터셋, 3.false 일반적

  ajax.open('GET',NEWS_URL,false); // true:동기적 처리, false: 비동기적 처리
  ajax.send(); // 전송이 일어난다.

//console.log(ajax.response);
//url로 해커뉴스 서버에 요청을 했을 떄 응답값을 받아올 수 있다.
//console.log(ajax.response);
const newsFeed =JSON.parse(ajax.response);
const ul = document.createElement('ul');
  for(let i =0 ; i<5; i++){
  const li = document.createElement('li');
  li.innerHTML = newsFeed[i].title; //해커뉴스의 타이틀을 가져옴
  ul.appendChild(li);
//console.log(newsFeed[i].title);
}
//DEFER가 있으면 비동기적으로 JS에 대한 처리가 된다.
//그러니까 JS가 ROOT보다 먼저 있어도 (비동기니까) 읽을 수 있다.
//DEFER가 아니면 ROOT 다음에 JS를 두라.
  document.getElementById('root').appendChild(ul);