const { body, check, param} = require('express-validator');

const helper = require("./helper")

exist = async (req, res, next) => {
    const {id} = req.params;

    const user = await prisma.user.findUnique({
        where: {id: id}
    });

    if(user){
        return res.status(404).json({ error: "User not found" });
    }

    next();
};

const nameRule = (name) =>
    check(name)
        .isLength({max:20}).withMessage(`${name} should contain max 20 characters.`)
        .matches(/^[A-Za-z-]+$/).withMessage(`${name} should contain only letters or "-".`);

const idParamRule = 
    param('id')
        .isMongoId().withMessage("id must be a MongoId")
        .notEmpty().withMessage();

const addUserValidationRules = [
    nameRule('firstName').notEmpty().withMessage('firstName is required.'),
    nameRule('name').notEmpty().withMessage('name is required.'),
    helper.dateRule('birthday').notEmpty().withMessage('birthday is required.')
]

const getUsersValidationRules = [
    nameRule('firstName').optional(),
    nameRule('name').optional(),
    helper.dateRule('birthday').optional(),
    check('sort')
        .optional()
        .isIn(['firstName','name','birthday']).withMessage('sort must be firstName, name or birthday.'),
    check('order')
        .optional()
        .isIn(['asc','desc']).withMessage('order must be "asc" or "desc".')
]

const updateUserValidationRules = [
    idParamRule,
    exist,
    nameRule('firstName').optional(),
    nameRule('name').optional(),
    helper.dateRule('birthday').optional(),
    check('housingsId')
        .optional()
        .isArray().withMessage("housingsId must be an array")
        .custom((ids) => ids.every(id => id !== "")).withMessage("housingsId must not contain empty values")
]





const deleteUserValidationRules = [
    idParamRule,
    exist
]

const validateAddUser = helper.validate(addUserValidationRules)
const validateGetUsers = helper.validate(getUsersValidationRules)
const validateUpdateUser = helper.validate(updateUserValidationRules)
const validateDeleteUser = helper.validate(deleteUserValidationRules)

module.exports = {validateAddUser,validateGetUsers,validateUpdateUser,validateDeleteUser}