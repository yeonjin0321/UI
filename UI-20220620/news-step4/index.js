const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.getElementById("main"); //index에서 id값을 받아옴 id는 한번쓰고 말것.
const content = document.createElement('div');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
/* 
<ul>
<li></li>
<li></li>
<li></li>
</ul>
*/
function getNewsList(){
  console.log('getNewsList 호출 성공');
fetch(NEWS_URL, requestOptions)
.then(response => response.json()) /* response.json이란것!!!! */
.then(result => {
    const newsList = []; //배열 선언
    newsList.push("<ul>");
    //for문 돌림
    for(let i =0; i<10; i++){
      newsList.push(`
      <li>
        <a href='#${result[i].id}'>
          ${result[i].title}(${result[i].comments_count}) 
        </a>
      </li>
      `);
    }
    newsList.push("</ul>");
    container.innerHTML= newsList.join("");
    
  })
  .catch(error => console.log('error', error));
}///////////////end of getNewsList();

 


  const requestOptions2 = {
    method: 'GET',
    redirect: 'follow'
  };

function getNewsContent(){
  const id = this.location.hash.substring(1); //해시값이 담김 #잘라냄. 첫번째자리 #31914288
    fetch(CONTENT_URL.replace("@id",id), requestOptions2)
      .then(response => response.json())
      .then(result => {
       container.innerHTML = `
        <h1>${result.title}</h1>
        <div>
        <a href="#">메인 화면으로 돌아가기</a>
        </div>
       `;
      })
      .catch(error => console.log('error', error))
}


  function router() {
    const hashValue = location.hash;
    //첫 진입이면
    if(hashValue === ""){
      getNewsList();
    }else {
      getNewsContent();
    }
  }///////////// end of router

  window.addEventListener("hashchange", router); //이벤트핸들러 매핑
  router(); //호출