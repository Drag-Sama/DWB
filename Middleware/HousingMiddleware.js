const {validationResult, check} = require('express-validator');

const fieldRule = (name) => 
    check(name).notEmpty().withMessage(`${name} must not be empty`)


const stringRule = (name) => 
    fieldRule(name)
        .isString().withMessage(`${name} must be a string`)


const nameRule = (name) => 
    stringRule(name)
        .isLength({max:20}).withMessage(`${name} should contain max 20 characters.`)
        .matches(/^[A-Za-z-]+$/).withMessage(`${name} should contain only letters or "-".`)

const idRule = (name) => 
    stringRule(name)
    .isMongoId().withMessage(`${name} must be a Mongo Id`)

const intRule = (name) => 
    fieldRule(name)
        .isInt().withMessage(`${name} must be an int`)


const isValuesValid = () => [
    stringRule('adresse'),

    nameRule('city'),
    
   nameRule('name'),

    intRule('price'),
    
    intRule('size'),

    idRule('ownerId')    
];

const isValuesValidOptional = () => [
    stringRule('adresse').optional(),

    nameRule('city').optional(),
    
   nameRule('name').optional(),

    intRule('price').optional(),
    
    intRule('size').optional(),

    idRule('ownerId').optional()    
];

const isIdValid = () => [
    idRule('id')
]

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

const validateGet = validate(isValuesValidOptional());

const validateId = validate(isIdValid());

module.exports = {validateAdd, validateGet, validateId}