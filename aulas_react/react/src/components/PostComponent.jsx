import React from 'react'

function PostComponent( { title, description }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <hr />
        </div>
    )
}

export default PostComponent
