/**
 * 
 * @param {string} tagName 
 * @param {object} attributes 
 * @return {HTMLElement}
 */

import { ToDoList } from "../ToDoList.js"

export function createElement(tagName, attributes = {} ) {
    const element = document.createElement(tagName)
    for (const [attribute, value] of Object.entries(attributes)) {
        if (value !== null)
            element.setAttribute(attribute, value)
    }

    return element
}