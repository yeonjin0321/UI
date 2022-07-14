export class DeptVO{

  constructor(deptno,dname,loc) { //생성자 . 초기화 . 전역변수
    this.deptno = deptno;
    this.dname = dname;
    this.loc = loc;
  }

get getDeptno(){
  return this.deptno;
} //게터생성
set setDeptno(value){
  this.deptno = value;
} //세터생성

get getDname(){
  return this.dname;
} 
set setDname(value){
  this.dname = value;
} 

get getLoc(){
  return this.loc;
} 
set setLoc(value){
  this.loc = value;
} 

} ///// end of class

const dvo = new DeptVO(10,'총무부','서울');
console.log(dvo.deptno);
dvo.setDeptno =20;
console.log(dvo.getDeptno);