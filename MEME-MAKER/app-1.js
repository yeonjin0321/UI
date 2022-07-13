const canvas = document.querySelector("canvas");
//그림을 그리기 위해 콘텍스를 얻어야함 기본적으로 페인트 붓임

const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800; // 이미지 퀄리티를 높이기 위해서 설정해줌

ctx.rect(50, 50, 100, 100);  // xywh
ctx.rect(150, 150, 100, 100);  // xywh
ctx.rect(250, 250, 100, 100);  // xywh
ctx.fill();



ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
  ctx.fill();
