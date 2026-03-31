const express = require("express");
const userController = require("../Controller/UserController")
const userMiddleware = require ("../Middleware/UserMiddleware")

const router = express.Router();

router.get("/",userMiddleware.validateGetUsers,userController.getUsers)
router.post("/",userMiddleware.validateAddUser,userController.addUser)
router.delete("/:id",userMiddleware.validateDeleteUser,userController.deleteUserById)
router.put("/:id",userMiddleware.validateUpdateUser, userController.updateUserById)

module.exports = router