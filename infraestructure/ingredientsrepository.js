const redis = require("redis");
const KEY = 'ingredients'
class IngredientsRepository{
    constructor(){
        this.client = redis.createClient();
    }
    addRange(ingredients){
        return new Promise((resolve,reject)=>{
            this.client.set(KEY, JSON.stringify(ingredients),function(err){
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            });
        })
        
    }
    
}
module.exports = IngredientsRepository;