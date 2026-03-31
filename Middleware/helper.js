const {check,validationResult} = require('express-validator');

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

const idRule = (idtype) =>
    check(idtype)
        .notEmpty().withMessage(`${idtype} must not be empty`)
        .isMongoId().withMessage(`${idtype} must be a MongoID`)

const dateRule = (date) =>
    check(date)
        .notEmpty().withMessage(`${date} must not be empty`)
        .matches(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/).withMessage(`${date} must be in format mm/dd/yyyy`)
//      01 à 09 ou 10 à 12 / 01 à 09 ou 10 à 29 ou 30 à 31 / 4 chiffres (yyyy)


module.exports = {validate,idRule,dateRule,}