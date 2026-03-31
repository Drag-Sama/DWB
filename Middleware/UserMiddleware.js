const { body , validationResult, check, param} = require('express-validator');

const nameRule = (name) =>
    check(name)
        .isLength({max:20}).withMessage(`${name} should contain max 20 characters.`)
        .matches(/^[A-Za-z-]+$/).withMessage(`${name} should contain only letters or "-".`);

const birthdayRule = 
    check('birthday').matches(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/).withMessage('birthday must be in format mm/dd/yyyy.');
    //      01 à 09 ou 10 à 12 / 01 à 09 ou 10 à 29 ou 30 à 31 / 4 chiffres (yyyy)

const idParamRule = 
    param('id')
        .isMongoId().withMessage("id must be a MongoId")
        .notEmpty().withMessage();

const addUserValidationRules = [
    nameRule('firstName').notEmpty().withMessage('firstName is required.'),
    nameRule('name').notEmpty().withMessage('name is required.'),
    birthdayRule.notEmpty().withMessage('birthday is required.')
]

const getUsersValidationRules = [
    nameRule('firstName').optional(),
    nameRule('name').optional(),
    birthdayRule.optional(),
    check('sort')
        .optional()
        .isIn(['firstName','name','birthday']).withMessage('sort must be firstName, name or birthday.'),
    check('order')
        .optional()
        .isIn(['asc','desc']).withMessage('order must be "asc" or "desc".')
]

const updateUserValidationRules = [
    idParamRule,
    nameRule('firstName').optional(),
    nameRule('name').optional(),
    birthdayRule.optional(),
    check('housingsId')
        .optional()
        .isArray().withMessage("housingsId must be an array")
        .custom((ids) => ids.every(id => id !== "")).withMessage("housingsId must not contain empty values")
]

const deleteUserValidationRules = [
    idParamRule
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
const validateUpdateUser = validate(updateUserValidationRules)
const validateDeleteUser = validate(deleteUserValidationRules)

module.exports = {validateAddUser,validateGetUsers,validateUpdateUser,validateDeleteUser}