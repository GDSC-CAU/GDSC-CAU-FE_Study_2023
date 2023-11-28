const todoForm = document.querySelector("#todoInputForm");
const todoInput = todoForm.querySelector("input");
const todos = document.querySelector("#todos");

const TODO_KEY = "todoList";
let todoList=[];

function handleSubmitTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj= {
        text: newTodo,
        id: Date.now(),
    }
    paintTodo(newTodoObj);
    todoList.push(newTodoObj);
    saveTodo();

}

function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText= newTodoObj.text;
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    
    li.appendChild(span);
    li.appendChild(button);
    todos.appendChild(li);  
    
}

function deleteTodo(event){
    //todoList의 아이디로 삭제하면 될거같은데 
    const li = event.target.parentElement;
    li.remove();
    //todolist에도 삭제 
    todoList = todoList.filter((todo)=>todo.id !== parseInt(li.id));
    saveTodo(); //리스트 자체를 통으로 스트링으로 저장
}

function saveTodo(){
    localStorage.setItem(TODO_KEY,JSON.stringify(todoList));
}

todoForm.addEventListener("submit", handleSubmitTodo);

const storedTodos = localStorage.getItem(TODO_KEY);
if(storedTodos !== null){
    //내용이 있으면 그전거 출력하기
    const parsedTodos = JSON.parse(storedTodos);
    todoList = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
