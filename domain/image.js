const uuid = require('uuid');

class Image{

    constructor(dto){
        this.id = uuid();
        this.buffer = dto.buffer;
    }
    static create(dto){
        return new Image(dto);
    }
    
}

module.exports = Image;