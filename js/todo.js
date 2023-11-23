const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();    
    toDos = toDos.filter((toDo) => toDo.id !== parseInt (li.id));
    saveToDos();
}

function completeToDo(event){
    const li = event.currentTarget.closest('.todo-item');
    if (!li) return;

    // 해당 todo-item 요소에 checked 클래스를 toggle하여 완료 상태 표시를 변경
    li.classList.toggle('checked');
    
    // 클릭된 ToDo 항목의 ID를 가져오기
    const todoId = parseInt(li.id);

    // toDos 배열에서 클릭된 ToDo를 찾아서 완료 상태를 변경
    toDos = toDos.map(todo => {
        if (todo.id === todoId) {
            todo.isCompleted = !todo.isCompleted; // 완료 여부 toggle
        }
        return todo;
    });

    // 변경된 ToDo 리스트를 로컬 스토리지에 저장
    saveToDos();

}
function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.className = "todo-item";

  const checkbox = document.createElement("div");
  checkbox.className = 'checkbox';
  checkbox.addEventListener("click",completeToDo);

  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.className = "todo";
  
  const button = document.createElement("button");
  button.className ="delBtn";
  button.innerText ="X";
  button.addEventListener("click", deleteToDo);

  if (newTodo.isCompleted) {
    li.classList.add('checked');
    checkbox.innerText = "";
}

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
  console.log("this is the turn of", item);
}
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);

}

