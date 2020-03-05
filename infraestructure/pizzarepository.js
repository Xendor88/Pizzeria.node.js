const redis = require("redis");



class PizzaRepository {
    constructor() {
        this.client = redis.createClient();
    }
    add(pizza) {
        return new Promise((resolve, reject) => {
            this.client.set(pizza.id, JSON.stringify(pizza), function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}

module.exports = PizzaRepository