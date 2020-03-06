const { USERVALIDATOREQUIRE, USERVALIDATOLOGIN } = require('../validators/uservalidator')
const validator = require('../utils/validatormiddelware')
const UserService = require('../application/userservice');

class UserController {
  
  static async register(req, res) {
    const service = new UserService();
    let response = await service.register(req.body);
    res.end(JSON.stringify(response));
  }
  static async login(req, res) {
    const service = new UserService();
    let response = await service.login(req.body);
    res.end(JSON.stringify(response));
  }
}

module.exports = function (app) {
  app.post('/register', USERVALIDATOREQUIRE, validator, UserController.register)
  app.post('/login', USERVALIDATOLOGIN, validator, UserController.login)
}