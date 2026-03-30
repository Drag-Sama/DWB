const express = require("express");
const housingController = require("../Controller/HousingController")

const router = express.Router();

//Get
router.get("/", (req,res) => res.send(housingController.allHousings()))
router.get("/:id", (req,res) => res.send(housingController.fetchHousingById(req.params.id)))
router.get("/filter/:property/:value", (req,res) => res.send(housingController.fetchHousingBy(req.params.property,req.params.value)))
router.get("/sort/:property", (req,res) => res.send(housingController.fetchHousingSortedBy(req.params.property)))

//Post
router.post("/:housing", (req,res) => res.send(housingController.createHousing(req.params.housing)))
//Delete
router.delete("/:id", (req, res) => res.send(housingController.deleteHousing(req.params.id)))
//Put
router.put("/:id/:housing", (req, res) => res.send(housingController.editHousing(req.params.housing, req.params.id)))

module.exports = router;