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
 * '/housing':
 *  get:
 *     tags:
 *     - Housing
 *     summary: Get housings based on parameters
 *     parameters:
 *       - in: query
 *         name: adresse
 *         schema:
 *           type: string
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *       - in: query
 *         name: price
 *         schema:
 *           type: string
 *       - in: query
 *         name: size
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */

/**
     * @swagger
     * '/housing':
     *  post:
     *     tags:
     *     - Housing
     *     summary: Create new housing
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - adresse
     *              - city
     *              - name
     *              - price
     *              - size
     *              - ownerId
     *            properties:
     *              adresse:
     *                type: string
     *                default:  
     *              city:
     *                type: string
     *                default: 
     *              name:
     *                type: string
     *                default: 
     *              price:
     *                type: string
     *                default: 
     *              size:
     *                type: string
     *                default: 
     *              ownerId:
     *                type: string
     *                default: 
     *     responses:
     *      201:
     *        description: Created
     */

/**
 * @swagger
 * /housing/{id}:
 *    delete:
 *     tags:
 *     - Housing
 *     summary: Delete an housing 
 *     responses:
 *       200:
 *         description: Succes
 *    parameters:
 *      - in: path
 *        name: id # Note the name is the same as in the path
 *        required: true
 *        schema:
 *          type: string
 *        description: The id of the housing you want to delete
 */



/**
     * @swagger
     * '/housing/{id}':
     *  put:
     *     tags:
     *     - Housing
     *     summary: Edit an housing
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - adresse
     *              - city
     *              - name
     *              - price
     *              - size
     *              - ownerId
     *            properties:
     *              adresse:
     *                type: string
     *                default:  
     *              city:
     *                type: string
     *                default: 
     *              name:
     *                type: string
     *                default: 
     *              price:
     *                type: string
     *                default: 
     *              size:
     *                type: string
     *                default: 
     *              ownerId:
     *                type: string
     *                default: 
     *     responses:
     *      200:
     *        description: Edited
     *     parameters:
     *      - in: path
     *        name: id # Note the name is the same as in the path
     *        required: true
     *        schema:
     *          type: string
     *        description: The id of the housing you want to delete
     */

module.exports = router