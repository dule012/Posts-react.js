import React from 'react'
import PostItem from './PostItem'

const PostList = (props) => {
    return (
        <React.Fragment>
            {props.arrOfPosts.map((el, i) => {
                return <PostItem title={el.title} text={el.body} id={el.id} userId={el.userId} key={i} />
            })}
        </React.Fragment>
    )
}

export default PostList