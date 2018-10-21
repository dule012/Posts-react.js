import React from 'react'
import AuthorItem from './AuthorItem'

const AuthorList = (props) => {
    return (
        <React.Fragment>
            {props.arrOfAuthors.map((el, i) => {
                return <AuthorItem name={el.name} id={el.id} key={i} />
            })}
        </React.Fragment>
    )
}

export default AuthorList