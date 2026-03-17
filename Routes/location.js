const express = require("express");
const locationController = require("../Controller/LogementController")

const router = express.Router();

//Get
router.get("/", (req,res) => res.send(locationController.fetchLocations()))
router.get("/:id", (req,res) => res.send(locationController.fetchLocationById(req.params.id)))
router.get("/filter/:property/:value", (req,res) => res.send(locationController.fetchLocationBy(req.params.property,req.params.value)))
router.get("/sort/:property", (req,res) => res.send(locationController.fetchLocationSortedBy(req.params.property)))

//Post
router.post("/:location", (req,res) => res.send(locationController.createLocation(req.params.location)))
//Delete
router.delete("/:id", (req, res) => res.send(locationController.deleteLocation(req.params.id)))
//Put
router.put("/:id/:location", (req, res) => res.send(locationController.editLocation(req.params.location, req.params.id)))

module.exports = router;