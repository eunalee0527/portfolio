let addTodo = function(txt) {
    let btn = document.createElement("button")
    btn.innerText = txt;
    btn.classList.add("todo-button");
    document.body.appendChild(btn);

    btn.addEventListener('click', function() {
        document.body.removeChild(btn);
    })
}

let addBtn = document.querySelector(".add-button");
addBtn.addEventListener('click', function (){
    let input = document.querySelector("input");
    addTodo(input.value);
})