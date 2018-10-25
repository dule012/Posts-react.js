import React, { Component } from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { getSingleAuthor } from '../../services/fetchData'
import { MapWithAMarker } from "./Map";



class AuthorInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            singleAuhtor: {},
            lat:10,
            lng: 10
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
        const API_KEY = 'AIzaSyCf9InCr5tsCleBkvoc8VLc49aKU-98OPo'
        return (
            <React.Fragment>
                <Header />
                <MapWithAMarker
					center={{ lat: this.state.lat, lng: this.state.lng }}
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
                <Footer />
            </React.Fragment>

        )
    }
}

export default AuthorInfo