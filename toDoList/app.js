import { fetchJSON } from './functions/api.js'
import { createElement } from './functions/dom.js'
import { ToDoList } from './ToDoList.js'

try {
    const todos = await fetchJSON("https://jsonplaceholder.typicode.com/todos?_limit=5")
    const list = new ToDoList(todos)
    list.appendTo(document.querySelector('#todolist'))
} catch (e) {
    const alertElement = createElement('div', {
        class: 'alert alert-danger m-2',
        role: 'alert'
    })

    alertElement.innerText = 'Impossible de charger les elements'
    document.body.prepend(alertElement)
}

// quand je check une checkbox
    // ajouter la classe "a-faire" a l'element en question
    // remove la classe si il l'a deja

// quand je click sur 'A faire'
    // display seulememnt les taks not completed
    // remove blue color from 'Toutes' button (class active)

// quand je click sur 'Faites'
    // display seulememnt les taks completed
    // remove blue color from 'Toutes' button (class active)
