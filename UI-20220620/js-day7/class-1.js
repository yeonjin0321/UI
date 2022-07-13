//클래스 - ES6에서 지원하게 됨.

class Car{
  constructor(name, emoji){ //생성자 . 초기화의 역할. 전역변수
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
console.log(`${this.name},${this.emoji}`);
  }
}
//myCar(yourCar)는 Car 클래스의 인스턴스이다.
const myCar = new Car("Sonata","❤️");
const yourCar = new Car("Pride","💚");

console.log(myCar);
console.log(yourCar);

const herCar = myCar;

console.log(myCar === yourCar); //타입까지 비교함
console.log(myCar === herCar); // true
console.log(myCar.emoji , myCar.name); 
yourCar.display();
herCar.display();


const himCar = {
name: "싼타페",
speed: 50,

}