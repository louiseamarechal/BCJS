import express from 'express'

const app = express()

app.use(express.urlencoded({ extended: true }))

const people = [
    { name: "Louise" },
    { name: "Amelie" }
]

// we use `Array.map()` to iterate over all the people array items. For each of them, we print a `<li>` item.
// Finally, I call the `.join('')` method to generate a string, otherwise `.map()` returns an array, and we’d see a comma in the resulting HTML because JavaScript tries to “stringify” an array, and adds a comma between elements.

app.get('/', (req, res) => {
    const page = `
        <html>
        <body>
            <h1>Enter a new person:</h1>
            <form action="/person" method="POST">
            <input type="text" name="name" />
            <input type="submit">
            </form>
            <h2>List of people:</h2>
            <ul>
                ${people.map(person => `<li>${person.name}</li>`).join('')}
            </ul>
        </body>
        
        </html>`
    res.send(page)
})

app.post('/person', (req, res) => {
    console.log('Received a new person data')

    const name = req.body.name
    people.push({ name: name })
    res.redirect('/')
})

app.listen(3000, () => console.log('Server Ready'))