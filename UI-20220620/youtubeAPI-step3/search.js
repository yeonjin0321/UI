function handleEnter(){
  alert(event.keyCode)
  if(event.keyCode === 13){//키를 눌렀을 때 - 13번이면 Enter코드값
      console.log('엔터 쳤을 때');
      searchList(); //서치리스트 함수 호출
  }
}
//var는 사용하지 않는다. 호이스팅 발동 - ESS
function searchList(){
  const query = document.querySelector('.input').value;
  console.log('사용자가 입력한 검색어 : ' + query);
  var requestOptions ={
    method: 'GET',
    redirect: 'follow'
  };

  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyCABboURqwUzJulbAVvFsgjjMHb_fkCaHM&type=video`)
    .then(response => response.json())
    //.then(result => console.log(result.items)) // 어레이가 될것. 포문 돌려서 처리
    .then(result => {
      const items = result.items; 
      const videoList=[];
     videoList.push(`<ul class='videos'>`);
      
     for(let i=0;i<items.length;i++){
      videoList.push(` <li class='container'>`);
      videoList.push(`<div class='video'>`);
      videoList.push(` <img class="thumbnail" src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`);
      videoList.push(` <div>`);
      videoList.push(`<p class='title'>${items[i].snippet.title}</p>`);
      videoList.push(`<p class='channel'>${items[i].snippet.channelTitle}</p>`);
      videoList.push( `</div>`);
      videoList.push(`</div>`);
    } ////enf of for문

    videoList.push(`</ul>`);
    document.querySelector('#root').innerHTML = videoList.join("");
  })
  .catch(error => console.log('error',error));

}
////////////////////////////////////// end of searchList