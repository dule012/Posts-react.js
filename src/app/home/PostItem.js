import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = (props) => {
    return (
        <Link to={`/post/${props.id}/${props.userId}`} style={{ textDecoration: 'none' }}>
            <h4>{props.title}</h4>
            <p>{`${props.text.slice(0, 70)}...`}</p>
        </Link>
    )
}

export default PostItem