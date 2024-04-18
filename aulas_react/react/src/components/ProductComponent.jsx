import React from 'react'

// function ProductComponent(props) {
function ProductComponent({ name, category }) {
    return (
        <div>
            {/* <p>Produto: { props.name } - Categoria: { props.category }</p> */}
            <p>Produto: { name } - Categoria: { category }</p>
        </div>
    )
}

export default ProductComponent
