import React from 'react'

function GenericComponent( { children }) {
    return (
        <div>
            <h3>Conteúdo do componente genérico</h3>
            <p>O conteúdo/elemento abaixo foi fornecido pelo componente pai</p>

            { children }
        </div>
    )
}

export default GenericComponent
