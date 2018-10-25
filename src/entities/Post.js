class Post {
    constructor(obj) {
        this.title = obj.title
        this.body = obj.body == undefined ? '' : obj.body
        this.id = obj.id
        this.userId = obj.userId
    }
}

export default Post