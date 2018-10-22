import React, { Component } from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { getSingleAuthor } from '../../services/fetchData'


class AuthorInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            singleAuhtor: {}
        }
    }

    componentDidMount() {
        getSingleAuthor(this.props.match.params.id).then((data) => {
            console.log(data)
            this.setState({
                singleAuhtor: data
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Footer />
            </React.Fragment>

        )
    }
}

export default AuthorInfo