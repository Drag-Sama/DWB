const express = require("express");
const rentalController = require("../Controller/RentalController")
const rentalMiddleware = require ("../Middleware/RentalMiddleware");

const router = express.Router();

router.get("/",rentalMiddleware.validateGetRentals,rentalController.getRentals)
router.post("/",rentalMiddleware.validateAddRental,rentalController.addRental)
router.put("/:id",rentalMiddleware.validateUpdateRentalById,rentalController.updateRentalById)
router.delete("/:id",rentalMiddleware.validateDeleteRentalById,rentalController.deleteRentalById)

module.exports = router