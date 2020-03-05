const redis = require("redis");

class UserRepository {
    constructor() {
        this.client = redis.createClient();
        /*this.client
            .multi()
            .set()
            .hset()*/

    }
    get(email) {
        var client = this.client;
        return new Promise((resolve, reject) => {
            client.HGET('idx-email', email, function (err, data) {
                if (err) {
                    reject(err)
                } else {
                    client.GET(data), function (err, data) {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(data)
                        }
                    }
                }
            })
        });

    }
    add(user) {
        var client = this.client;
        return new Promise((resolve, reject) => {
            client.set(user.id, JSON.stringify(user), function (err) {
                if (err) {
                    reject(err)
                } else {
                    client.HSET('idx-email', user.email, user.id, function (err,data) {
                      console.log(err);
                      console.log(data);
                    })

                }

            })
        })
    }
}
module.exports = UserRepository