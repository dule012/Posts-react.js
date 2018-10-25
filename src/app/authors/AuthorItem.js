import React from 'react'
import { Link } from 'react-router-dom'

const AuthorItem = (props) => {
    return (
        <h2 class="author-item"> <Link to={`/author/${props.id}`} class="author-item-link">
            {props.name}
        </Link>
        </h2>
    )
}

export default AuthorItem