// Selectors

const todoInput = document.querySelector(".todoInput");
const todoBtn = document.querySelector(".addTodoBtn");
const todolist = document.querySelector(".todoList");

// Alerts
// const myAlert= document.querySelector("#liveToast");
// let bsAlert= new boostrap.Toast(myAlert);
// const alertWarning = document.querySelector(".toast-err");
// const alertSuccess = document.querySelector(".toast-success");

// Events
document.addEventListener("DOMContentLoaded", function () {
    getTodos()
})
todoBtn.addEventListener("click", addTodo);


/****** DORDONCU KISIM ******/
todolist.addEventListener("click", deleteCheck);







/****** BIRINCI KISIM ******/


// Functions
function addTodo(e) {
    e.preventdefault;

    /****** UCUNCU KISIM ******/
    const isEmpty = str => !str.trim().length; //trim= bosluk kontrolu
    //          //  str => ARROW FUNCTION

    if (isEmpty(todoInput.value)) {
        /********************** Toasts Kullanımı önemli **********************/

        $(".addTodoBtn").ready(function () {
            $('.alert-danger').toast('show');
        });

        // Clear Todo Input Value
        todoInput.value = "";

    }
    else {

        $(".addTodoBtn").click(function () {
            $(".alert-success").toast("show");
            /********************** Toasts Kullanımı önemli **********************/
        });


        saveLocalTodos(todoInput.value);

        /****** DISARDA OLUSTURUP ICINE ATTIK ******/
        /****** IKINCI KISIM ******/
        // Div create
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("input-group");


        // Create Span
        const newTodo = document.createElement("span");
        newTodo.classList.add("form-control");
        newTodo.classList.add("is-invalid");//bu güzel oldu :D


        newTodo.innerText = todoInput.value;
        todoDiv.appendChild(newTodo);


        // Check button
        const editBtn = document.createElement("button");
        editBtn.classList.add("btn");
        editBtn.classList.add("border-success");
        editBtn.classList.add("border");
        editBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;

        todoDiv.appendChild(editBtn);

        // Delete//Trash Button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn");
        deleteBtn.classList.add("btn-outline-danger");
        deleteBtn.innerHTML = `<i class=" fa-solid fa-trash-can"></i>`;

        todoDiv.appendChild(deleteBtn);

        //  Append to list
        todolist.appendChild(todoDiv);

        // Clear Todo Input Value
        todoInput.value = "";


        // console.log(todoDiv)

    }

}



/****** BESINCI KISIM ******/
function deleteCheck(e) {
    //
    const item = e.target;
    // console.log(item); //bırsey gırıldıkten sonra iteme tıklayınca consoleda gosterıyor

    // Delete Todo

    if (item.classList[1] === "btn-outline-danger") {
        const todo = item.parentElement;
        todo.classList.add("fall");

        removeLocalStorage(todo);

        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
    }

    //check 

    if (item.classList[1] === "border-success") {
        let todo = item.parentElement.firstChild;
        todo.classList.remove("is-invalid");
        todo.classList.add("is-valid");

    }
}


/****** ALTINCI KISIM ******/
/****** LOKALSTORAGE KISMI ******/
function saveLocalTodos(todo) {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))
}

function getTodos() {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach((todo) => {
        // Div create
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("input-group");


        // Create Span
        const newTodo = document.createElement("span");
        newTodo.classList.add("form-control");
        newTodo.classList.add("is-invalid");//bu güzel oldu :D


        newTodo.innerText = todo;
        todoDiv.appendChild(newTodo);


        // Check button
        const editBtn = document.createElement("button");
        editBtn.classList.add("btn");
        editBtn.classList.add("border-success");
        editBtn.classList.add("border");
        editBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;

        todoDiv.appendChild(editBtn);

        // Delete//Trash Button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn");
        deleteBtn.classList.add("btn-outline-danger");
        deleteBtn.innerHTML = `<i class=" fa-solid fa-trash-can"></i>`;

        todoDiv.appendChild(deleteBtn);

        //  Append to list
        todolist.appendChild(todoDiv);

        // Clear Todo Input Value
        todoInput.value = "";

        // console.log(todoDiv)

    });
}



function removeLocalStorage(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[1].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}


