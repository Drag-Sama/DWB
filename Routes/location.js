const express = require("express");
const locationController = require("../Controller/LogementController")

const router = express.Router();

//Get
router.get("/", (req,res) => res.send(locationController.fetchLocations()))
router.get("/:id", (req,res) => res.send(locationController.fetchLocationById(req.params.id)))
router.get("/city/:city", (req,res) => res.send(locationController.fetchLocationByCity(req.params.city)))
router.get("/sort/:property", (req,res) => res.send(locationController.fetchLocationByCity(req.params.city)))

//Post
router.post("/:location", (req,res) => res.send(locationController.createLocation(req.params.location)))
//Delete
router.delete("/:id", (req, res) => res.send(locationController.deleteLocation(req.params.id)))
//Put
router.put("/:id/:location", (req, res) => res.send(locationController.editLocation(req.params.location, req.params.id)))

module.exports = router;