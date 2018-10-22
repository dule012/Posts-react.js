import Post from '../entities/Post'
import Author from '../entities/Author'

const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            return data.map((el) => {
                return new Post(el)
            })
        })
}

const getSinglePost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            return new Post(data)
        })
}

const getAuthors = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            return data.map((el) => {
                return new Author(el)
            })
        })
}

const getSingleAuthor = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            return new Author(data)
        })
}

export {
    getPosts,
    getSinglePost,
    getAuthors,
    getSingleAuthor
}