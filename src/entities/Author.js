class Author {
    constructor(obj){
        this.id = obj.id
        this.name = obj.name
        this.username = obj.username
        this.email = obj.email
        this.phone = obj.phone
        this.city = obj.address.city
        this.street = obj.address.street
        this.zipcode = obj.address.zipcode
        this.lat = obj.address.geo.lat
        this.lng = obj.address.geo.lng
        this.company = obj.company.name
    }
}

export default Author