import { showMenu, changePage, displayForm } from './modules/dom_manipulation'
import { displayInbox } from './modules/display_inbox'


const inbox = document.querySelector("#inbox")

showMenu('header-toggle', 'navbar')
changePage()


function homePage() {
    displayForm()

    inbox.addEventListener('click', (e) => {
        e.preventDefault()
        displayInbox()
    })
}

homePage()