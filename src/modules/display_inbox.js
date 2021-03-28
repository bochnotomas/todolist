function displayInbox() {
    const logo = document.querySelector(".header_logo")
    logo.innerHTML = "Inbox"

    const toDosContainer = document.querySelector(".todos_container")
    toDosContainer.innerHTML = ""

    const todoItem = document.createElement("div")
    todoItem.classList.add("todo_item")

    const todoItemShowcase = document.createElement("div")
    todoItemShowcase.classList.add("todo_item_showcase")

    const todoItemCheck = document.createElement("i")
    todoItemCheck.classList.add("far")
    todoItemCheck.classList.add("fa-square")
    todoItemCheck.classList.add("todo_item_check")

    const todoItemTitle = document.createElement("span")
    todoItemTitle.classList.add("todo_item_title")
    todoItemTitle.innerHTML = "Task example"

    const todoItemPriority = document.createElement("span")
    todoItemPriority.classList.add("todo_item_priority")
    todoItemPriority.innerHTML = "normal"

    const todoItemDate = document.createElement("span")
    todoItemDate.classList.add("todo_item_date")
    todoItemDate.innerHTML = "26/03/2020"

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
    todoItemDesc.innerHTML = "Lorem"

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

export { displayInbox }