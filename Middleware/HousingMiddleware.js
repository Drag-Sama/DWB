const { body , validationResult} = require('express-validator');
const housingController = require("../Controller/HousingController")

const isValueValid = () => body('city', 'City must not be empty').notEmpty();

addHousing = async(req, res) => {
    const errors = validationResult(req);
    if(errors.isEmpty())
        housingController.addHousing(req,res)
    else{
        res.status(400).json({ error: "Internal server errorss" })
    }
}

module.exports = {isValueValid, addHousing}