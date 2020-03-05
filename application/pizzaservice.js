const Pizza = require ('../domain/pizza')
const PizzaRepository = require ('../infraestructure/pizzarepository')

class PizzaService{
    async add(dto){
        var pizza = Pizza.create(dto);
        var pizzaRepository = new PizzaRepository();
        await pizzaRepository.add(pizza)
        return{
            name : pizza.name
            //image
        }
    }
}

module.exports = PizzaService