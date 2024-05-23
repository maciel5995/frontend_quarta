import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
    const products = [
        {id: 1, name: 'Uva', price: 10},
        {id: 2, name: 'Laranja', price: 8},
        {id: 3, name: 'Banana', price: 9}
    ]
    return (
        <div>
            <h2>Lista de Produtos</h2>
            {products.map((prod) => (
                <ul key={prod.id} style={{listStyle: 'none'}}>
                    <li>Nome: {prod.name}</li>
                    <li>Preço: R$ {prod.price}</li>                    
                    <li><Link to={`/products/${prod.id}`}>Editar</Link></li>
                    <li><Link to={`/products/${prod.id}/show-more`}>Mais Detalhes</Link></li>
                    <li><hr /></li>
                </ul>
            ))}
        </div>
    )
}

export default Products
