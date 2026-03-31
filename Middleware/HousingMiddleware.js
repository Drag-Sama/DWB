const { body , validationResult} = require('express-validator');

const isValuesValid = () => [
    body('adresse').notEmpty().withMessage('Adresse must not be empty')
        .isString().withMessage('Adresse must be a string'), 

    body('city').notEmpty().withMessage('City must not be empty')
        .isString().withMessage('City must be a string'), 
    
    body('name').notEmpty().withMessage('Name must not be empty')
        .isString().withMessage('Name must be a string'), 

    body('price').notEmpty().withMessage('Price must not be empty')
        .isInt().withMessage('Price must be an int'),   
    
    body('size').notEmpty().withMessage('Size must not be empty')
        .isInt().withMessage('Size must be an int'),   

    body('ownerId').notEmpty().withMessage('OwnerId must not be empty')
        .isString().withMessage('OwnerId must be a string'),     
];

const validate = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map(v => v.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    };
};

const validateAdd = validate(isValuesValid());

module.exports = {validateAdd}