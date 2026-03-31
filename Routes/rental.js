const express = require("express");
const rentalController = require("../Controller/RentalController")
//const rentalMiddleware = require ("../Middleware/RentalMiddleware");

const router = express.Router();

router.get("/",rentalController.getRentals)
router.post("/",rentalController.addRental)
router.put("/:id",rentalController.updateRentalById)
router.delete("/:id",rentalController.deleteRentalById)

module.exports = router