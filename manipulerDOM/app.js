/**
 * Create a HTML tag with its corresponding content
 * @param {string} tagName 
 * @param {string} content 
 * @returns {HTMLElement}
 */
function createElementWithText(tagName, content) {
    const element = document.createElement(tagName)
    element.innerText = content
    return element
}

/**
 * Create a article Element and insert it
 * @param {title: string, body: string} post
 * @return {HTMLElement}
 */
function createArticle(post) {
    const article = document.createElement('article')
    article.append(createElementWithText('h2', post.title))
    article.append(createElementWithText('p', post.body))
    return article
}

async function main () {

    const wrapper = document.querySelector('#lastPosts')
    const loader = document.createElement('p')
    loader.innerText = 'Chargement...'
    wrapper.append(loader)
    try {
        const r = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
            headers: {
                Accept: 'application/json'
            }
        })
    
        if (!r.ok) {
            throw new Error('Erreur serveur')
        }

        const posts = await r.json()
        loader.remove()

        for (let post of posts) {
            wrapper.append(createArticle(post))
        }

    } catch (e) {
        loader.innerText = 'Failed to load'
        loader.style.color = 'red'
        return
    }
}

main()