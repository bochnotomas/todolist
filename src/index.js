import { showMenu, addTaskDisplay, addProjectDisplay, setActive } from './modules/dom_manipulation'
import { displayInbox } from './modules/display_inbox'
import { displayToday } from './modules/display_today'
import { displayThisWeek } from './modules/display_thisWeek'
import { submitForm, clearLocalStorage } from './modules/input_logic'

function homePage() {
    const inbox = document.querySelector("#inbox")
    const today = document.querySelector("#today")
    const thisWeek = document.querySelector('#thisWeek')
    const links = document.querySelectorAll('.nav_link')

    showMenu('header-toggle', 'navbar')
    addTaskDisplay()
    addProjectDisplay()
    submitForm()
    clearLocalStorage()
    displayInbox()
    setActive(inbox, links)

    inbox.addEventListener('click', (e) => {
        e.preventDefault()
        displayInbox()
        setActive(inbox, links)
    })

    today.addEventListener('click', (e) => {
        e.preventDefault()
        displayToday()
        setActive(today, links)
    })

    thisWeek.addEventListener('click', (e) => {
        e.preventDefault()
        displayThisWeek()
        setActive(thisWeek, links)
    })
}

homePage()