import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function WelcomeMessage({ children }) {
  return <h1>{ children }</h1>
}

const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0)
  const name = "Louise"

  useEffect(() => {
    console.log(`You clicked ${count} times`)
  }, []) // adding empty array argument means you only execute the function when the component is first loaded

  useEffect(() => {
    console.log(`Hi ${name} you clicked ${count} times`)
  }, [name, count]) // you do the console log if one of the component is updated

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  ) 
}

function Form() {
  const [username, setUsername] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault() // prevent from reloading the page

    const response = await fetch('/api/form', {
      body: JSON.stringify({
        username,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      })
    }

  return (
    <form onSubmit={handleSubmit}>
      Username:
      <input
        type='text'
        value={username}
        onChange={(event) => {
          setUsername(event.target.value)
        }}
      />
    </form>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('John')
  const message = "Hello !"

  return (
    <div className="App">
      <WelcomeMessage>Hello</WelcomeMessage>
      <h1>{message === 'Hello !' ? 'The message was "Hello!"' : message}</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CounterWithNameAndSideEffect/>
        <button onClick={() => setName((name) => name === 'Louise' ? name = 'John' : name = 'Louise')}>
          name is {name}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Form/>
    </div>
  )
}

export default App; Form
