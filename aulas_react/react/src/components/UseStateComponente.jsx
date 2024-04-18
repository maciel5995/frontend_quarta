import React, { useState } from 'react'

function UseStateComponente() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    const increaseValue1 = () => setValue1(v => v + 1)
    const decreaseValue1 = () => setValue1(v => v - 1)

    const increaseValue2 = () => setValue2(v => v + 1)
    const decreaseValue2 = () => setValue2(v => v - 1)


    return (
        <div>
            <h3>{value1}</h3>
            <button onClick={ increaseValue1 }>+</button>
            <button onClick={ decreaseValue1 }>-</button>
            <hr />
            <h3>{value2}</h3>
            <button onClick={ increaseValue2 }>+</button>
            <button onClick={ decreaseValue2 }>-</button>
            <p>Resultado: { value1 } * { value2 } = { value1 * value2 }</p>
        </div>
    )
}

export default UseStateComponente
