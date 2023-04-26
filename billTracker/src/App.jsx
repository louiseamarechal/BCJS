import './App.css'
import { useState } from 'react'
import AddBill from './components/AddBill'
import AddCategory from './components/AddCategory'
import BillsTable from './components/BillsTable'
import NavBar from './components/NavBar'

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(true)
  const [categories, setCategories] = useState([])

  const addCategory = category => {
    // create a new array from the existing categories, appending a new one. Takes care of the spread when the categories array is null or undefined, defaulting it to an empty array with || []
    const updatedCategories = [...(categories || []), category]

    setCategories(updatedCategories)
    setShouldShowAddCategory(false)
  }

  return (
    <div>
      { shouldShowAddCategory ? ( <AddCategory onSubmit={addCategory} /> ) : 
        <div>
          <NavBar />
          <BillsTable />
        </div>
      }
    </div>
  )
}

export default App
