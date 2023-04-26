import { useState } from 'react'

function AddCategory( props ) {
    const [category, setCategory] = useState('')

    const handleChange = (e) => {
        setCategory(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!category) {
            alert('Please enter a category')
            return
        }

        props.onSubmit(category)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Enter a category of bills</h1>
            <p>E.g. 'Electricity' or 'Gaz' or 'Internet'</p>
            <input placeholder="Add Category"
                value={category}
                onChange={handleChange} 
            />
            <button>Add</button>
        </form>
    )
}

export default AddCategory