import React from 'react'
import { Link } from 'react-router-dom'

const AuthorItem = (props) => {
    return (
        <Link to={`/author/${props.id}`}>
            <h3>{props.name}</h3>
        </Link>
    )
}

export default AuthorItem