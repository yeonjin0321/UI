// 페이징 처리에 필요한 변수 선언하기
// insert here - currentPage -> react에서는 redux
const store = {
  currentPage: 1,
}
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.getElementById("main");
const content = document.createElement('div');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
}; // 상수로 미리 적어두는것.

//함수1 뉴스 리스트 보여주기
function getNewsList(){
  console.log('getNewsList 호출 성공');
  fetch(NEWS_URL, requestOptions)
    .then(response => response.json())
    .then(result => {
      const newsList = []; //배열 생성
      //템플릿 변수 선언
      let template = `
      <div>

          <h1>Hacker News</h1>
          <ul>
            {{__news_list__}}
          </ul>

          <div>
          <a href="#/page/{{__prev_page__}}">이전페이지</a>
          <a href="#/page/{{__next_page__}}">다음페이지</a>
          </div>

      </div>
      `;
      for(let i=(store.currentPage - 1) * 10; i < store.currentPage * 10;i++){
      //for(let i=0;i<30;i++){
        newsList.push(`
          <li>
            <a href='#${result[i].id}'>
              ${result[i].title}(${result[i].comments_count})
            </a>
          </li>
        `);
      }////////// end of for
      template = template.replace("{{__news_list__}}", newsList.join("")); //조인으로 하나로 합쳐질 것이다.
      template = template.replace("{{__prev_page__}}", store.currentPage > 1 ? store.currentPage-1 : 1); //향상된 포문 사용
      template = template.replace("{{__next_page__}}", store.currentPage + 1); 
      container.innerHTML = template;
    }).catch(error => console.log('error', error));
}///////////////////// end of getNewsList()


  const requestOptions2 = {
    method: 'GET',
    redirect: 'follow'
  };
  
  function getNewsContent(){
    const id = this.location.hash.substring(1);// #31914288에서 첫번째 자리 #은 잘라내고 쓴다
    fetch(CONTENT_URL.replace("@id", id), requestOptions2)
      .then(response => response.json())
      .then(result => {
        container.innerHTML = `
          <h1>${result.title}</h1>
          <div>
            <a href="#/page/${store.currentPage}">목록으로</a>
          </div>
        `;
      })
      .catch(error => console.log('error', error));
  }


  function router() {
    const hashValue = location.hash;// ex) #/page/2 
    //console.log(hashValue);
    // http://localhost:5000/index.html# - 디폴트 처음일때
    // http://localhost:5000/index.html#3214567
    if(hashValue === "") {
      getNewsList();
    }
    // #/page/2 숫자2(currentPage)는 이동해야 되는 이전페이지 번호 임
    // "http://localhost:5000/index.html#/page/2"가 있는거야? 
    else if(hashValue.indexOf("#/page/") >= 0){
      // hashValue.substring(7);// 문자열
      store.currentPage = Number(hashValue.substring(7));  //ex) #/page/2 <- 요기서 2라는 뜻
      console.log(store.currentPage);//상세보기 전에 페이지 정보를 확인 콘솔에 이게 먼저 찍힘.
      getNewsList();
    } 
    else {
      getNewsContent();
    }
  }////////////////////////end of router
  window.addEventListener("hashchange", router);
  router();