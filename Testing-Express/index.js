import express from 'express'

const app = express()

const people = [
    { id: 1, name: "Louise" },
    { id: 2, name : "Amelie" }
]

app.get('/', (req, res) => res.send("Hello World !")) // Response is the HTTP response object that we'll send to the client.

app.get('/people', (req, res) => {
    res.json(people)
})

app.get('/person/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const person = people.find(person => person.id === id)

    if (person) {
        res.json(person)
        return
    }

    res.sendStatus(404)
})

app.listen(3000, () => console.log("Server ready !"))

// try to go to :
    // localhost:3000
    // localhost:3000/people
    // localhost:3000/person/1
    // localhost:3000/person/7