function Button({ step, increment, decrement }) {
    
    if (!decrement)
    {
        return (<button className="border-solid border-2 border-black px-2 rounded"
            onClick={() => 
                increment(step)
            }
        >+{step}</button>)
    }

    return <button className="border-solid border-2 border-black px-2 rounded" 
        onClick={() => {
            decrement(step)
        }}
    >-{step}</button>
}

  export default Button