import React, { Component } from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { getAuthors } from '../../services/fetchData'
import AuthorList from './AuthorList'

class Authors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrOfAuthors: []
        }
    }

    componentDidMount() {
        getAuthors().then((data) => {
            this.setState({
                arrOfAuthors: data
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <h3>{`Authors(${this.state.arrOfAuthors.length})`}</h3>
                <AuthorList arrOfAuthors={this.state.arrOfAuthors} />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Authors