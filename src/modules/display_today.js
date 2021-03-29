import { parseISO, isToday } from 'date-fns'

function displayToday() {
    const logo = document.querySelector(".header_logo")
    logo.innerHTML = "Today"

    const toDosContainer = document.querySelector(".todos_container")
    toDosContainer.innerHTML = ""

    if (localStorage.getItem("todos") == null) {
        toDosContainer.innerHTML = "No tasks yet..."
    } else {
        let todos = JSON.parse(localStorage.getItem("todos"))

        todos.forEach((el, idx) => {

            if (isToday(parseISO(el.dueDate))) {
                const todoItem = document.createElement("div")
                todoItem.classList.add("todo_item")

                const todoItemShowcase = document.createElement("div")
                todoItemShowcase.classList.add("todo_item_showcase")



                const todoItemCheck = document.createElement("i")
                todoItemCheck.classList.add("far")
                todoItemCheck.classList.add("fa-square")
                todoItemCheck.classList.add("todo_item_check")
                todoItemCheck.id = idx
                todoItemCheck.onclick = () => {
                    checked(todoItemCheck.id)
                }
                if (el.checked === true) {
                    todoItem.classList.add("checked")
                    todoItemCheck.classList.remove("fa-square")
                    todoItemCheck.classList.add("fa-check-square")
                }
                const todoItemTitle = document.createElement("span")
                todoItemTitle.classList.add("todo_item_title")
                todoItemTitle.innerHTML = el.title

                const todoItemPriority = document.createElement("span")
                todoItemPriority.classList.add("todo_item_priority")
                todoItemPriority.innerHTML = el.priority

                const todoItemDate = document.createElement("span")
                todoItemDate.classList.add("todo_item_date")
                todoItemDate.innerHTML = el.dueDate

                const todoItemIcon = document.createElement("i")
                todoItemIcon.classList.add("fas")
                todoItemIcon.classList.add("fa-chevron-down")
                todoItemIcon.classList.add("todo_item_icon")

                const todoDropdownCollapse = document.createElement("div")
                todoDropdownCollapse.classList.add("todo_dropdown_collapse")

                const todoDropdownContent = document.createElement("div")
                todoDropdownContent.classList.add("todo_dropdown_content")

                const todoItemDesc = document.createElement("p")
                todoItemDesc.classList.add("todo_item_desc")
                todoItemDesc.innerHTML = el.description

                toDosContainer.appendChild(todoItem)

                todoItem.appendChild(todoItemShowcase)

                todoItemShowcase.appendChild(todoItemCheck)
                todoItemShowcase.appendChild(todoItemTitle)
                todoItemShowcase.appendChild(todoItemPriority)
                todoItemShowcase.appendChild(todoItemDate)
                todoItemShowcase.appendChild(todoItemIcon)

                todoItem.appendChild(todoDropdownCollapse)

                todoDropdownCollapse.appendChild(todoDropdownContent)
                todoDropdownCollapse.appendChild(todoItemDesc)
            }
        })
    }

}



export { displayToday }