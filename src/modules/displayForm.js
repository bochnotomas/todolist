function displayForm() {
    const main = document.querySelector("main")
    main.innerHTML = ""
    const toDosContainer = document.createElement("section")
    toDosContainer.classList.add("todos_container")
    toDosContainer.innerHTML = `<div class="todo_item_add"><div class="todo_item_showcase"><span class="todo_item_title">Add Task</span><i class="fas fa-plus todo_item_add_icon"></i></div></div>`

    main.appendChild(toDosContainer)
}

export { displayForm }