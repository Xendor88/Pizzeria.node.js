const { check} = require('express-validator');

const PIZZAVALIDATOR=[
    check('name').isAlpha().isLength({ min: 1, max: 100 }),
];
module.exports={
    PIZZAVALIDATOR    
}