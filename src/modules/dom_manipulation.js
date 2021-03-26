function displayForm() {
    const main = document.querySelector("main")
    main.innerHTML = ""
    const toDosContainer = document.createElement("section")
    toDosContainer.classList.add("todos_container")
    toDosContainer.innerHTML = `<div class="todo_item_add"><div class="todo_item_showcase"><span class="todo_item_title">Add Task</span><i class="fas fa-plus todo_item_add_icon"></i></div></div>`
    main.appendChild(toDosContainer)
}

function showMenu(headerToggle, navbarId) {
    const toggleBtn = document.getElementById(headerToggle)
    const nav = document.getElementById(navbarId)

    if (headerToggle && navbarId) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('show_menu')

            toggleBtn.classList.toggle('fa-times')
        })
    }
}


function changePage() {

    const linkColor = document.querySelectorAll('.nav_link')
    const nav = document.getElementById('navbar')
    function colorLink() {
        linkColor.forEach(el => el.classList.remove('active')).
            this.classList.add('active')
    }

    linkColor.forEach(el => el.addEventListener('click', colorLink))
    nav.classList.toggle('show_menu')
}




export { showMenu, changePage, displayForm }