const User = require('../domain/user')
const UserRepository = require('../infraestructure/userrepository')
let jwt = require('jsonwebtoken')
const  config  =  require ( '../config' );
const crypto = require('crypto');


class UserService {
    async register(dto) {
        var user = User.create(dto);
        //grabar en redis
        var userRepository = new UserRepository();
        await userRepository.add(user);
        return {
            name: user.name,
            email: user.email
        }
    }
    encryptPassWord(password){
        return crypto.createHash('sha256').update(password).digest('base64');
    }
    async login(dto) {
        var password = this.encryptPassWord(dto.password);
            

        var userRepository = new UserRepository();
        var user = await userRepository.get(dto.email);        
        
        if (password !== user.password) {
            throw "Usuario o la contraseña no existe"
        }

        let token = jwt.sign({ email: dto.email }, config.secret,{ expiresIn: '1h' });
        return token;

 
    }
    
}

module.exports = UserService