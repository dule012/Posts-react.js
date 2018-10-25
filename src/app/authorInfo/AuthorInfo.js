import React, { Component } from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { getSingleAuthor } from '../../services/fetchData'
import { MapWithAMarker } from "./Map";



class AuthorInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: null,
            lng: null,
            city: '',
            company: '',
            email: '',
            name: '',
            phone: null,
            street: '',
            zipCode: null,
            userName: ''

        }
    }

    componentDidMount() {
        getSingleAuthor(this.props.match.params.id).then((data) => {
            console.log(data)
            this.setState({
                lat: data.lat,
                lng: data.lng,
                email: data.email,
                phone: data.phone,
                street: data.street,
                zipCode: data.zipcode,
                company: data.company,
                city: data.city,
                userName: data.username,
                name: data.name

            })
        })
    }

    render() {
        const API_KEY = 'AIzaSyCf9InCr5tsCleBkvoc8VLc49aKU-98OPo'
        return (
            <React.Fragment>
                <Header />
                <div class="info-container">
                    <h2>{this.state.name}</h2>
                    <p>username: <b>{this.state.userName}</b></p>
                    <p>email: <b>{this.state.email}</b></p>
                    <p>phone: <b>{this.state.phone}</b></p>
                </div>
                <div class="adress-container">
                    <div class="adress">
                        <h2>Adress</h2>
                        <p>street: <b>{this.state.street}</b></p>
                        <p>city: <b>{this.state.city}</b></p>
                        <p>zipCode: <b>{this.state.zipCode}</b></p>
                    </div>
                    <MapWithAMarker
                        center={{ lat: parseFloat(this.state.lat), lng: parseFloat(this.state.lng) }}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div class="google-map1" style={{ height: `10px` }} />}
                        containerElement={<div class="google-map2" style={{ height: `20px` }} />}
                        mapElement={<div class="google-map3" style={{ height: `200px`,width:'400px' }} />}
                    />
                </div>
                <div class="company-container">
                    <h2>Company</h2>
                    <p>name: <b>{this.state.company}</b></p>
                </div>
                <Footer />
            </React.Fragment>

        )
    }
}

export default AuthorInfo