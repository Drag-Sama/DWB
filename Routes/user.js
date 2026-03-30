const express = require("express");
const userController = require("../Controller/UserController")

const router = express.Router();

router.get("/",userController.getAllUsers)
router.post("/add",userController.addUser)
router.delete("/delete/:id",userController.deleteUser)
router.put("/:id", userController.updateUser)

module.exports = router