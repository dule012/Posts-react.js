import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getPosts, getSinglePost, getSingleAuthor } from '../../services/fetchData'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

class PostInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            singlePost: {},
            postsOfSameAuthor: [],
            author: {}
        }
    }
    componentDidMount() {
        Promise.all([getSinglePost(this.props.match.params.id), getPosts(), getSingleAuthor(this.props.match.params.userId)])
            .then((dataArr) => {
                const postsOfSameAuthor = dataArr[1].filter((el) => {
                    return el.userId == this.props.match.params.userId && el.id != this.props.match.params.id
                })
                console.log(dataArr[2])
                this.setState({
                    singlePost: dataArr[0],
                    postsOfSameAuthor: postsOfSameAuthor,
                    author: dataArr[2]
                })
            })
    }

    getClickedPost = () => {
        setTimeout(() => {

            Promise.all([getSinglePost(this.props.match.params.id), getPosts(), getSingleAuthor(this.props.match.params.userId)])
                .then((dataArr) => {
                    const postsOfSameAuthor = dataArr[1].filter((el) => {
                        return el.userId == this.props.match.params.userId && el.id != this.props.match.params.id
                    })
                    console.log(dataArr[2], 'adasd')
                    this.setState({
                        singlePost: dataArr[0],
                        postsOfSameAuthor: postsOfSameAuthor,
                        аuthor: dataArr[2]
                    })
                })
        }, 10)
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <div>
                    <h2>{this.state.singlePost.title}</h2>
                    <Link to={`/author/${this.state.author.id}`}>{this.state.author.name}</Link>
                    <p>{this.state.singlePost.body}</p>
                </div>
                <div>
                    {this.state.postsOfSameAuthor.map((el, i) => {
                        return <Link to={`/post/${el.id}/${el.userId}`} onClick={this.getClickedPost} key={i} style={{
                            textDecoration: 'none',
                            display: 'block'
                        }}>{el.title}</Link>
                    })}
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default PostInfo