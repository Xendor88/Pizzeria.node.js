const User = require('../domain/user')
const UserRepository = require('../infraestructure/userrepository')
let jwt = require('jsonwebtoken')
 
class UserService {
   async register(dto) {
        var user = User.create(dto);
        //grabar en redis
        var userRepository = new UserRepository();
        await userRepository.add(user);
        return {
            name:user.name,
            email:user.email
        }
    }
    async login(dto) {
        var userRepository = new UserRepository();
        var user = User.create(dto);
        if (email && password) {
            let token = jwt.sign({email: email},
            config.secret,
            { expiresIn: '1h'
            }
            );
 
            res.json({
            success: true,
            message: 'Authentication successful!',
            token: token
            });
 
            await userRepository.add(user);
            return{
            email:user.email
            }
        }
    }
}
 
module.exports =UserService