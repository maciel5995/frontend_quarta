import React, { useState } from 'react'

function MyButtonComponent() {
    const [count, setCount] = useState(0) // count = leitura, setCount = alteração
   
    const addCount = () => {
        setCount(count + 1)
        // setCount(v => v + 1)
    }

    return (
        <div>
            <button onClick={ () => setCount(v => v + 1) }>Clicou { count } vezes</button>
            {/* <button onClick={addCount}>Clicou {count} vezes</button> */}
        </div>
    )
}

export default MyButtonComponent
