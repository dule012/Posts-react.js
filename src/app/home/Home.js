import React, { Component } from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <PostList />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home