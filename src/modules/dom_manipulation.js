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


function addTaskDisplay() {
    const actionButton = document.querySelector(".todo_item_add")
    const popUpForm = document.querySelector(".popup")
    const blocker = document.querySelector(".blocker")

    actionButton.addEventListener('click', () => {
        popUpForm.classList.toggle("hidden")
    })

    blocker.addEventListener('click', () => {
        popUpForm.classList.toggle("hidden")
    })
}


function setActive(link, listOfLinks) {
    listOfLinks.forEach(el => {
        el.classList.remove('active')
    })

    link.classList.toggle('active')
}


export { showMenu, addTaskDisplay, setActive }