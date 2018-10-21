import React, { Component } from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { getPosts } from '../../services/fetchData'
import PostList from './PostList'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrOfPosts: []
        }
    }

    componentDidMount() {
        getPosts().then((data) => {
            this.setState({
                arrOfPosts: data
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <PostList arrOfPosts={this.state.arrOfPosts} />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home