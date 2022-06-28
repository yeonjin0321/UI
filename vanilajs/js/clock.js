const clock = document.querySelector("h2#clock"); //id가 클락인 것

function getClock () {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");;
  const seconds = String(date.getSeconds()).padStart(2,"0");;
  clock.innerText = (`${hours}:${minutes}:${seconds}`);

}

getClock(); //1초 멈춤 없이 실행시키는것
setInterval(getClock,1000); //인터벌(간격)대로 출력