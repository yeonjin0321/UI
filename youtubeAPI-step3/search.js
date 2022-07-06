function handleEnter(){
  alert(event.keyCode)
  if(event.keyCode === 13){//키를 눌렀을 때 - 13번이면 Enter코드값
      console.log('엔터 쳤을 때');
      searchList(); //서치리스트 함수 호출
  }
}
function searchList(){
  const query = document.querySelector('.input').value;
  console.log('사용자가 입력한 검색어 : ' + query);
  const ajax = new XMLHttpRequest();
const SEARCH_URL=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyCABboURqwUzJulbAVvFsgjjMHb_fkCaHM&type=video`;
ajax.open("GET",SEARCH_URL,false);
    ajax.send();
    const videoList=[];
    console.log(ajax.response);
    const result = JSON.parse(ajax.response);//{... items:[{snippet:...}]}
    const items = result.items; //ARRAY의 구조체를 갖게 될 것이다.
    console.log(items.length);// 25개 (maxresult)
    videoList.push(`<ul class='videos'>`);
    for(let i=0;i<items.length;i++){
    }
    videoList.push(`</ul>`);
    document.querySelector('#root').innerHTML = videoList.join("")
}////////////////////////////////////// end of searchList