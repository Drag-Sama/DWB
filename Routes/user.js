const express = require("express");
const userController = require("../Controller/UserController")

const router = express.Router();

router.get("/", (req,res) => res.send(userController.getAllUsers()))