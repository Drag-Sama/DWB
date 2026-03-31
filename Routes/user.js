const express = require("express");
const userController = require("../Controller/UserController")
const userMiddleware = require ("../Middleware/UserMiddleware")

const router = express.Router();

router.get("/",userMiddleware.validateGetUsers,userController.getUsers)
router.post("/",userMiddleware.validateAddUser,userController.addUser)
router.delete("/:id",userMiddleware.validateDeleteUser,userController.deleteUserById)
router.put("/:id",userMiddleware.validateUpdateUser, userController.updateUserById)


/**
 * @swagger
 * '/user':
 *  get:
 *     tags:
 *     - User
 *     summary: Get users based on parameters
 *     parameters:
 *       - in: query
 *         name: firstName
 *         schema:
 *           type: string
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *       - in: query
 *         name: birthday
 *         schema:
 *           type: date
 *     responses:
 *       200:
 *         description: Success
 */

/**
     * @swagger
     * '/user':
     *  post:
     *     tags:
     *     - User
     *     summary: Create new user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - firstName
     *              - name
     *              - birthday
     *            properties:
     *              firstName:
     *                type: string
     *                default:""
     *              name:
     *                type: string
     *                default:"" 
     *              birthday:
     *                type: date
     *                default:""
     *     responses:
     *      201:
     *        description: Created
     */

/**
 * @swagger
 * /user/{id}:
 *    delete:
 *     tags:
 *     - User
 *     summary: Delete an user 
 *     responses:
 *       200:
 *         description: Succes
 *    parameters:
 *      - in: path
 *        name: id # Note the name is the same as in the path
 *        required: true
 *        schema:
 *          type: string
 *        description: The id of the user you want to delete
 */



/**
     * @swagger
     * '/user/{id}':
     *  put:
     *     tags:
     *     - User
     *     summary: Edit an user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - firstName
     *              - name
     *              - birthday
     *            properties:
     *              firstName:
     *                type: string
     *                default:"" 
     *              name:
     *                type: string
     *                default:""
     *              birthday:""
     *                type: date
     *                default:""
     *     responses:
     *      200:
     *        description: Edited
     *     parameters:
     *      - in: path
     *        name: id # Note the name is the same as in the path
     *        required: true
     *        schema:
     *          type: string
     *        description: The id of the user you want to edit
     */

module.exports = router