const { body , validationResult, check, query} = require('express-validator');

const addUserValidationRules = [
    check('firstName')
        .notEmpty().withMessage('firstName is required.')
        .isLength({max:20}).withMessage('firstName should contain max 20 characters.')
        .matches(/^[A-Za-z-]+$/).withMessage('firstName should contain only letters or "-".'),
    check('name')
        .notEmpty().withMessage('name is required.')
        .isLength({max:20}).withMessage('name should contain max 20 characters.')
        .matches(/^[A-Za-z-]+$/).withMessage('name should contain only letters or "-".'),
    check('birthday')
        .notEmpty().withMessage('birthday is required.')
        .isLength({max:10}).withMessage('birthday should contain max 10 characters.')
        .matches(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/).withMessage('birthday must be in format mm/dd/yyyy.'),
        //      01 à 09 ou 10 à 12 / 01 à 09 ou 10 à 29 ou 30 à 31 / 4 chiffres (yyyy)
]

const getUsersValidationRules = [
    //adduservalidationrules?
    check('sort')
        .optional()
        .isIn(['firstName','name','birthday']).withMessage('sort must be firstName, name or birthday.'),
    check('order')
        .optional()
        .isIn(['asc','desc']).withMessage('order must be "asc" or "desc".')
]

const validate = (validations) => {
    return async (req,res,next) => {
        await Promise.all(validations.map(v => v.run(req)));

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({errors:errors.array()})
        }

        next();
    }
}

const validateAddUser = validate(addUserValidationRules)
const validateGetUsers = validate(getUsersValidationRules)

module.exports = {validateAddUser,validateGetUsers}