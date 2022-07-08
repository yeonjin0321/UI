const ajax = new XMLHttpRequest();
let content = '';
const MOST_URL="https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCABboURqwUzJulbAVvFsgjjMHb_fkCaHM";
ajax.open("GET",MOST_URL,false);
ajax.send(); // 이쪽에서 지연이 발생할 수 있는 경우가 있을것임. 이 예제는 지연처리를 하지 않은 순수한 예제임.

/* console.log(ajax.response); */
const result = JSON.parse(ajax.response); //{... items:[{snippet:...}]} 동기적
const items = result.items; //ARRAY의 구조체를 갖게 될 것이다.
console.log(items.length);// 5개 (maxresult)

content += `<ul class='videos'>`

for(let i=0; i<items.length;i++){
    content += `<li class='container'>`
    content += `<div class='video'>`
    content += `<img class="thumbnail" src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`;
    content += `<div>`;
    content += `<p class='title'>${items[i].snippet.title}</p>`;
    content += `<p class='channel'>${items[i].snippet.channelTitle}</p>`;
    content += `</div>`;
    content += `</div>`;
}

content += `</ul>`;

document.querySelector('#root').innerHTML = content;