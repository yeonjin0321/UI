class Car{

speed;
carName;

constructor(carName, speed){
  this.carName = carName;
  this.speed = speed;
}

//클래스 선언시 function 예약어를 사용하지 않는다.
speedUp(){
this.speed += 1;
}

speedDown(){
  this.speed -= 1;
  }

}

class Sonata extends Car {
  speedUp(){
  super.speedUp();
  this.speed += 2;
  }
}

class K5 extends Car {
  stop(){
  this.speed = 0;
  }
}

const myCar = new Sonata("2022년형소나타",30);
myCar.speedUp();
myCar.speedUp();
myCar.speedDown(); 
console.log(myCar.speed);//35가 출력될 것이다. 슈퍼클래스 거쳐서..
const yourCar = new K5("2022년형소나타",30);