
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

fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
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
      document.getElementById("root").appendChild(ul);
      //document.getElementById("root").appendChild(ul);
    }
    document.getElementById("root").appendChild(ul);
    document.getElementById("root").appendChild(content); // 같은 url안에서 기사 누르면 밑에 내용이 붙음.
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
    fetch("https://api.hnpwa.com/v0/item/@id.json".replace("@id",id), requestOptions2)
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