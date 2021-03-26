import { showMenu, changePage, displayForm } from './modules/dom_manipulation'
import { displayInbox } from './modules/display_inbox'
import { displayToday } from './modules/display_today'
import { displayThisWeek } from './modules/display_thisWeek'

function homePage() {
    const inbox = document.querySelector("#inbox")
    const today = document.querySelector("#today")
    const thisWeek = document.querySelector('#thisWeek')

    showMenu('header-toggle', 'navbar')
    changePage()
    displayForm()

    inbox.addEventListener('click', (e) => {
        e.preventDefault()
        displayInbox()
    })

    today.addEventListener('click', (e) => {
        e.preventDefault()
        displayToday()
    })

    thisWeek.addEventListener('click', (e) => {
        e.preventDefault()
        displayThisWeek()
    })

}

homePage()