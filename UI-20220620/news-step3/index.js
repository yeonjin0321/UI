
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.getElementById("main");
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

fetch(NEWS_URL, requestOptions)
.then(response => response.json()) /* response.json이란것!!!! */
.then(result => {
    console.log(result);
    const ul = document.createElement("ul");
    //for문 돌림
    for(let i =0; i<10; i++){
      const div = document.createElement("div");
      div.innerHTML = `
      <li>
        <a href='#${result[i].id}'>
          ${result[i].title}(${result[i].comments_count}) 
        </a>
      </li>
      `;

      ul.appendChild(div.firstElementChild);
      container.appendChild(ul);
      //document.getElementById("root").appendChild(ul);
    }

    container.appendChild(ul);
    container.appendChild(content);
  })
  .catch(error => console.log('error', error));

  //해커뉴스 api 가져옴
  const requestOptions2 = {
    method: 'GET',
    redirect: 'follow'
  };
  window.addEventListener("hashchange",() => {
    console.log(location.hash);
    const id = this.location.hash.substring(1); //해시값이 담김 #잘라냄. 첫번째자리 #31914288
    fetch(CONTENT_URL.replace("@id",id), requestOptions2)
      .then(response => response.json())
      //callback
      //.then(result => console.log(result))
      .then(result => {
        const title = this.document.createElement("h1");
        title.innerHTML = result.title;
        content.appendChild(title);
      })
      .catch(error => console.log('error', error))
  });

  // 라우터에서 화면 전환하는 
  // 뉴스 내용 보기를 화면 전환을 통해서 재구성 해보기.
  // 조건에 따라 화면 전환이 일어나야 하므로 조건문에 
  // 함수 호출ㅇ을 통해서 이 문제를 해결해 본다. 
  // 무엇으로 기준할 것인가?
/* 
  글목록의 링크는 #이었음. 그러면 Location.hash에 #이 들어있음
  그러면 이것으로 어떻게 참 , 거짓을 나눌 수 있지? 
  Location.hash에 #만 들어오면 빈값을 반환함.
  첫 진입일때는 getNewsList를 호출하고 
  해시값이 존재하면 getNewsContent를 호출한다.
*/

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