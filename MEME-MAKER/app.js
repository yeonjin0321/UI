const canvas = document.querySelector("canvas");
//그림을 그리기 위해 콘텍스를 얻어야함 기본적으로 페인트 붓임

const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800; // 이미지 퀄리티를 높이기 위해서 설정해줌

ctx.fillRect(210-40,200-20,15,100)
ctx.fillRect(350-40,200-20,15,100)
ctx.fillRect(260-40,200-20,60,200)

ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillSty= "white";
ctx.arc(260 + 10 , 80, 8, Math.PI, );
ctx.arc(220 + 10 , 80, 8, Math.PI, );
ctx.fill();