const { check} = require('express-validator');

const USERVALIDATOREQUIRE=[
    check('email').normalizeEmail().isEmail(),
    check('password').isAlphanumeric().isLength({ min: 5, max: 10 }),
    check('name').isAlpha().isLength({ min: 3, max: 10 }),
];

const USERVALIDATOLOGIN=[
    check('email').normalizeEmail().isEmail(),
    check('password').isAlphanumeric().isLength({ min: 5, max: 10 }),    
];

module.exports={
    USERVALIDATOREQUIRE,
    USERVALIDATOLOGIN
}