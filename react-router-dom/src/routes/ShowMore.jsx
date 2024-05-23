import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ShowMore() {
    const { id } = useParams();
    const navigate = useNavigate()
    const redirect = () => {
        navigate('/');
    }
    return (
        <div>
            <p>Mostrando detalhes do produto { id } </p>
            <button onClick={redirect}>Home</button>
        </div>
    )
}

export default ShowMore
