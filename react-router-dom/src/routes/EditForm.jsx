import React from 'react'
import { useParams } from 'react-router-dom'

function EditForm() {
    const { id } = useParams();
    return (

        <div>
            <p>Editando o produto { id } </p>
        </div>
    )
}

export default EditForm
