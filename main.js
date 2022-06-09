const input=document.querySelector("input");
const add=document.querySelector("#add");
const todolist=document.querySelector(".todo-list")
const item=document.querySelector(".todo-list");
const select=document.querySelector(".taskgroup");
const todo=document.querySelector(".todo")

add.addEventListener("click", addtodo);
item.addEventListener("click", dletecomplete);
document.addEventListener("DOMContentLoaded", ShowPrevTask)
select.addEventListener("click", showOption)

function addtodo(event){ 
   event.preventDefault();
   //save in localStorage
   localsave(input.value)

   const divtask=document.createElement("div");
   divtask.classList.add("todo");

   const litask=document.createElement("li");
   litask.classList.add("todo-item");
   litask.innerText=input.value;
   divtask.appendChild(litask);
   input.value="";
   
   const done=document.createElement("button");
   done.classList.add("complete-btn");
   done.innerHTML="<img src='./tick.png'  title='Done' style='width:27px; height:27px;' />"
   divtask.appendChild(done);
   
   const dlete =document.createElement("button");
   dlete.classList.add("trash-btn");
   dlete.innerHTML="<img src='./delete_icon.png'  title='Delete' style='width:32px; height:32px;' />"
   divtask.appendChild(dlete);

   todolist.appendChild(divtask);  

   
}
 
function dletecomplete(event){
   const a=event.target.parentElement;
   
   if(a.classList[0]==="complete-btn"){
       a.parentElement.classList.toggle("completed");
   }
   if(a.classList[0]==="trash-btn"){
      a.parentElement.remove();
      localremove(a);
   }
}

function localsave(task){
   let todos;
   if(localStorage.getItem("todos") ===null){
      todos=[];
   }else{
      todos=JSON.parse(localStorage.getItem("todos") );
   }
   todos.push(task);
   localStorage.setItem("todos",JSON.stringify(todos))
}

function localremove(task){
   let todos;
   if(localStorage.getItem("todos") ===null){
      todos=[];
   }else{
      todos=JSON.parse(localStorage.getItem("todos") );
   }
   const removetask=task.parentElement.innerText;
   todos.splice(todos.indexOf(removetask),1);

   localStorage.setItem("todos",JSON.stringify(todos));
}

function ShowPrevTask(event){
   
   let todos;
   if(localStorage.getItem("todos") ===null){
      todos=[];
   }else{
      todos=JSON.parse(localStorage.getItem("todos") );
   }
   todos.forEach(function(todo) {

   const divtask=document.createElement("div");
   divtask.classList.add("todo");

   const litask=document.createElement("li");
   litask.classList.add("todo-item");
   litask.innerText=todo;
   divtask.appendChild(litask);
   
   const done=document.createElement("button");
   done.classList.add("complete-btn");
   done.innerHTML="<img src='./tick.png'  title='Done' style='width:27px; height:27px;' />"
   divtask.appendChild(done);
   
   const dlete =document.createElement("button");
   dlete.classList.add("trash-btn");
   dlete.innerHTML="<img src='./delete_icon.png'  title='Delete' style='width:32px; height:32px;' />"
   divtask.appendChild(dlete);

   todolist.appendChild(divtask);  
});
}

function showOption(tasks) {
   const todos = [...todolist.children];
   todos.forEach(function(todo) {
       switch (tasks.target.value) {
           case "All" :
               todo.style.display = "flex";
               break;
           case "completed":
               if(todo.classList.contains("completed")) {
                   todo.style.display = "flex";
               }
               else {
                   todo.style.display = "none";
               }
               break;
           case "UnCompleted":
               if(!todo.classList.contains("completed")) {
                   todo.style.display = "flex";
               }
               else {
                   todo.style.display = "none";
               }
               break;
       }
   });
}
/* */