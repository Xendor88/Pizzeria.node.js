const uuid = require('uuid');
class Pizza{
    constructor(dto){
        this.id = uuid()
        this.name = dto.name ;
        
    }
    static create(dto){
        return new Pizza(dto)
    }
}
module.exports = Pizza;