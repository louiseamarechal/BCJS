import { createElement } from "./functions/dom.js"

export class ToDoList {

    /** @type {Todo[]} */
    #todos = []

    /** @type {HTMLUlElement} */
    #listElement

    /** @param {Todo[]} */
    constructor (todos) {
        this.#todos = todos
    }

    /**
     * 
     * @param {HTMLElement} element 
     */
    appendTo (element) {
        element.innerHTML = `<form class="d-flex pb-4">
            <input required="" class="form-control" type="text" placeholder="Acheter des patates..." name="title" data-com.bitwarden.browser.user-edited="yes">
            <button class="btn btn-primary"">Ajouter</button>
         </form>
        <main>
            <div class="btn-group mb-4" role="group">
                <button type="button" class=" btn btn-outline-primary active" data-filter="all">Toutes</button>
                <button type="button" class=" btn btn-outline-primary" data-filter="todo">A faire</button>
                <button type="button" class=" btn btn-outline-primary" data-filter="done">Faites</button>
            </div>
            <ul class="list-group"></ul>
            <ul class="list-group">
            </ul>
        </main>`

        this.#listElement = document.querySelector('.list-group')
        for (let todo of this.#todos) {
            let task = new TodoListItem(todo)
            this.#listElement.append(task.element)
        }

        element.querySelector('form').addEventListener('submit', e => this.#onSubmit(e))
        element.querySelectorAll('.btn-group button').forEach(button => {
            button.addEventListener('click', e => this.#toggleFilter(e))
        })
    }

    /**
     * 
     * @param {SubmitEvent} e 
     */
    #onSubmit(e) {
        e.preventDefault()
        const form = e.currentTarget
        const taskTitle = new FormData(form).get('title').toString().trim() // 'title' refers to the name field in input
        
        if (taskTitle === '') {
            return
        }
        
        const todo = {
            id: Date.now,
            title: taskTitle,
            completed: false
        }

        const task = new TodoListItem(todo)
        this.#listElement.prepend(task.element) // add the new task on top of the list
        form.reset() // remove the data from the form field
    }

    /**
     * 
     * @param {PointerEvent} e 
     */
    #toggleFilter(e) {
        e.preventDefault
        const filter = e.currentTarget.getAttribute('data-filter')
        e.currentTarget.parentElement.querySelector('.active').classList.remove('active')
        e.currentTarget.classList.add('active')

        if (filter === 'todo') {
            this.#listElement.classList.add('hide-completed')
            this.#listElement.classList.remove('hide-todo')
        } else if (filter === 'done') {
            this.#listElement.classList.add('hide-todo')
            this.#listElement.classList.remove('hide-completed')
        } else {
            this.#listElement.classList.remove('hide-completed')
            this.#listElement.classList.remove('hide-todo')
        }
    }
}

export class TodoListItem {

    #element

    constructor (todo) {

        const id = todo.id

        const li = createElement('li', {
                        class: "todo list-group-item d-flex align-items-center"
                    })

        this.#element = li

        const checkbox = createElement('input', {
                        class: "form-check-input",
                        type: "checkbox",
                        id: id,
                        checked: todo.completed ? '' : null
                    })
        
        const input = createElement('label', {
                        class: "ms-2 form-check-label",
                        for : id
                    })
        input.innerText = todo.title

        const button = createElement('label', {
                        class: "ms-auto btn btn-danger btn-sm"
                    })
        button.innerHTML =  `<i class="bi-trash"></i>`

        li.append(checkbox)
        li.append(input)
        li.append(button)
        this.toggle(checkbox)

        button.addEventListener('click', e => this.remove(e))
        checkbox.addEventListener('change', e => this.toggle(e.currentTarget))
    }

    get element () {
        return this.#element
    }

    toggle(checkbox) {

        if (checkbox.checked) {
            this.#element.classList.add('is-completed')
        } else {
            this.#element.classList.remove('is-completed')
        }
    }

    /**
     * 
     * @param {PointerEvent} e 
     */
    remove(e) {

        e.preventDefault()
        this.#element.remove()
    }
}