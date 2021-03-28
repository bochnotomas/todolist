function displayThisWeek() {
    const logo = document.querySelector(".header_logo")
    logo.innerHTML = "This Week"

    const toDosContainer = document.querySelector(".todos_container")
    toDosContainer.innerHTML = ""
}

export { displayThisWeek }