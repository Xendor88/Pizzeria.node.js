const redis = require("redis");
class ImageRepository {
    constructor() {
        this.client = redis.createClient({ return_buffers: true });
    }
    add(image) {
        return new Promise((resolve, reject) => {
            this.client.set(image.id, image.buffer, function (err, data) {
                if(err) {
                    reject('image incorrect')
                }else{
                    resolve()
                }
            })
       })
    }
}

module.exports = ImageRepository;