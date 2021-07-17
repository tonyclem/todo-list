// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


// Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo)

// Function
function addTodo(event) {
    //  prevent form submitting
   event.preventDefault();
    // Create Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create Todo Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo);
    // Check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
     // Check trash button
     const trashButton = document.createElement("button");
     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);
    //  Append to list
    todoList.appendChild(todoDiv);
    // Clear Todo input value
    todoInput.value = "";
}

// Delete Function
function deleteCheck(e){
    const item = e.target;
    // Delete Todo
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }

    // Check Mark
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

// Error the project stop here 

// function filterTodo(e) {
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo){
//         switch(e.target.value){
//             case "all":
//                 todo.style.display = "flex";
//                 break;
//             case "completed":
//                 if(todo.classList.contains("completed")){
//                     todo.style.display = "flex";
//                 } else{
//                     todo.style.display = "none";
//                 }
            
//         }
//     })
// }

// Something on JS
