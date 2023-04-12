import { useState } from 'react'
import Button from './components/Button'
// import Results from './components/Results'

function App() {
  const [count, setCount] = useState(0)
  const [calculs, setCalcul] = useState([]) 
  
  const increment = (step) => {
    setCount(count + step)
  }

  const reset = () => {
    setCount(0)
  }

  const save = () => { 
    setCalcul(calculs => [...calculs, count])
  }

  const decrement = (step) => {
    setCount(count - step)
  }

  return (
    <div className='App font-system-ui flex flex-col items-center'>
      <h1 className='text-3xl font-bold my-5'>Counter: {count}</h1>
      <div className='my-5 space-x-6'>
        <Button step={1} increment={increment}></Button>
        <Button step={10} increment={increment}></Button>
        <Button step={100} increment={increment}></Button>
        <Button step={1000} increment={increment}></Button>
        <Button step={1} decrement={decrement}></Button>
        <Button step={10} decrement={decrement}></Button>
        <Button step={100} decrement={decrement}></Button>
        <Button step={1000} decrement={decrement}></Button>
      </div>
      <div className='my-5'>
        <button className='reset font-bold bg-black text-white px-5 py-2 mr-2 rounded' onClick={reset}>RESET</button>
        <button className='save font-bold bg-black text-white px-5 py-2 rounded' onClick={save}>SAVE</button>
      </div>
      <div>
        <ul className="font-bold italic text-xl mt-5"> Previously saved results: 
            {calculs.map( calcul => 
              <li className='list-none font-normal text-lg flex flex-col items-center my-3'>{ calcul }</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App