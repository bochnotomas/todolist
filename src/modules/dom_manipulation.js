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

    function colorLink() {
        linkColor.forEach(el => el.classList.remove('active'))
        this.classList.add('active')
    }

    linkColor.forEach(el => el.addEventListener('click', colorLink))

}


export { showMenu, changePage }