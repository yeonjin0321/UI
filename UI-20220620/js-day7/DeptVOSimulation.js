import {DeptVO} from "./DeptVO";
//ES6 지원 IMPORT문
//nodejs 지원 require('express') - COMMONJS

const myDVO = new DeptVO(50, '개발부', '제주');
console.log(myDVO.dname);
console.log(myDVO.loc);
console.log(myDVO.deptno);