class Task {

    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.checked = false
    }

}

function submitForm() {
    const title = document.querySelector('#task_title')
    const description = document.querySelector('#task_description')
    const dueDate = document.querySelector('#task_dueDate')
    const priority = document.querySelector('#task_priority')
    const submit = document.querySelector('#task_submit')

    submit.addEventListener('click', () => {
        if (title.value && description.value && dueDate.value && priority.value) {
            console.log(title.value)
            console.log(description.value)
            console.log(dueDate.value)
            console.log(priority.value)
            let task = new Task(title.value, description.value, dueDate.value, priority.value)
            saveLocalTodos(task)
            window.location.reload(true)
        }
    })
}

function saveLocalTodos(todo) {
    let todos

    if (localStorage.getItem("todos") == null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))

}

function removeLocalTodos(idx) {
    let todos

    if (localStorage.getItem("todos") == null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.splice(idx, 1)
    localStorage.setItem("todos", JSON.stringify(todos))
    window.location.reload()
}


function clearLocalStorage() {
    const clear = document.querySelector(".todo_item_clear")

    clear.addEventListener('click', () => {
        localStorage.clear()
        window.location.reload()
    })
}


export { submitForm, removeLocalTodos, clearLocalStorage }