const PizzaService = require('../application/pizzaservice')
const validator = require('../utils/validatormiddelware')
const {PIZZAVALIDATOR} = require('../validators/pizzavalidator')
class PizzaController {
    static async add(req,res) {
        var pizzaservice = new PizzaService();
        var response =  await pizzaservice.add(req.body);
        res.end(JSON.stringify(response));
 }
}

module.exports = function (app){
app.post('/pizzas',PIZZAVALIDATOR,validator, PizzaController.add)
}