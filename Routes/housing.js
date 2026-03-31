const express = require("express");
const housingController = require("../Controller/HousingController")
const housingMiddleware = require("../Middleware/HousingMiddleware")

const router = express.Router();

//Get
router.get("/", housingController.getHousings)
router.get("/get", housingController.getHousingsByProperty)
router.get("/sort/:property", housingController.sortHousingsByProperty)
//POST
router.post("/", housingMiddleware.validateAdd, housingController.addHousing)
//DELETE
router.delete("/:id", housingController.deleteHousings)
//PUT
router.put("/:id", housingController.updateHousing)

module.exports = router;