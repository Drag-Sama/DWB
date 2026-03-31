const helper = require("./helper");

getRentalsValidationRules = [
    helper.idRule("id").optional(),
    helper.idRule("renterId").optional(),
    helper.idRule("housingId").optional(),
    helper.dateRule("start_date").optional(),
    helper.dateRule("end_date").optional()
]

addRentalValidationRules = [
    helper.idRule("renterId"),
    helper.idRule("housingId"),
    helper.dateRule("start_date"),
    helper.dateRule("end_date")
]

updateRentalByIdValidationRules = [
    helper.idRule("id"),
    helper.idRule("housingId").optional(),
    helper.idRule("renterId").optional(),
    helper.dateRule("start_date").optional(),
    helper.dateRule("end_date").optional()
]

deleteRentalByIdValidationRules = [
    helper.idRule("id")
]

validateGetRentals = helper.validate(getRentalsValidationRules)
validateAddRental = helper.validate(addRentalValidationRules)
validateUpdateRentalById = helper.validate(updateRentalByIdValidationRules)
validateDeleteRentalById = helper.validate(deleteRentalByIdValidationRules)

module.exports = {validateGetRentals,validateAddRental,validateUpdateRentalById,validateDeleteRentalById}