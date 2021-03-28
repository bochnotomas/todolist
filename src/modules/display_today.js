function displayToday() {
    const logo = document.querySelector(".header_logo")
    logo.innerHTML = "Today"

    const toDosContainer = document.querySelector(".todos_container")
    toDosContainer.innerHTML = ""
}



export { displayToday }