const a = document.querySelector("a");


a.addEventListener('click', (event)=> {
  //a태그가 링크가 걸려 있지만 아래 코드가 있어서 네이버 페이지로 이동이 안됨.
 // event.preventDefault(); //이벤트를 미리 실행시키는 것을 막음
  console.log("2 네이버 클릭");
})

const box = document.querySelector(".box"); //div class .박스
box.addEventListener('mousemove', (event) => {
  console.log(event);
  
  console.log(`${event.pageX}`);
  console.log(`${event.pageY}`);

  console.log(`${event.offsetX}`);
  console.log(`${event.offsetY}`);
});