const express = require("express");
const rentalController = require("../Controller/RentalController")
const rentalMiddleware = require ("../Middleware/RentalMiddleware")

const router = express.Router();

router.get("/",rentalController.getRentals)