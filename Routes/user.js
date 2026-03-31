const express = require("express");
const userController = require("../Controller/UserController")
const userMiddleware = require ("../Middleware/UserMiddleware")

const router = express.Router();

router.get("/",userMiddleware.validateGetUsers,userController.getUsers)
router.post("/",userMiddleware.validateAddUser,userController.addUser)
router.delete("/",userController.deleteUser)
router.put("/", userController.updateUser)

module.exports = router