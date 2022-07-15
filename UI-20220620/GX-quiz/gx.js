//div창에 종목 입력하였을때 위의 list에 
//to do list처럼 나오게 하기.
const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addButton");
const toDoList = document.getElementById("list");


addBtn.addEventListener("click", function() {
  const list = document.createElement("li"); 
  const trashIcon = document.querySelector("item_delete");
  //리스트를 js파일에서 createElement로 생성할것
  //인풋박스에 넣은 값을 리스트로 뿌리기?
  // 종목명+삭제 아이콘(trashIcon) 붙여서 출력하기(??)-> 실패
  list.innerText = inputBox.value 
  //list를 div박스의 list(toDoList)에 붙여주기.
  toDoList.appendChild(list);
  inputBox.value = ""; // 입력후 검색어 공백으로 없애기