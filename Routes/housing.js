const express = require("express");
const housingController = require("../Controller/HousingController")
const housingMiddleware = require("../Middleware/HousingMiddleware")

const router = express.Router();

//Get
/**
 * @swagger
 * /housing/:
 *   get:
 *     tags:
 *     - Housing
 *     summary: Returns all housings
 *     responses:
 *       200:
 *         description: Succes
 */
router.get("/", housingController.getHousings)

/**
 * @swagger
 * '/housing/get':
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

//Get
/**
 * @swagger
 * /housing/sort/{property}:
 *    get:
 *     tags:
 *     - Housing
 *     summary: Sort all housings by property
 *     responses:
 *       200:
 *         description: Succes
 *    parameters:
 *      - in: path
 *        name: property # Note the name is the same as in the path
 *        required: true
 *        schema:
 *          type: string
 *        description: The property you want to use to sort housings
 */
router.get("/sort/:property", housingController.sortHousingsByProperty)
//POST

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
router.post("/", housingMiddleware.validateAdd, housingController.addHousing)


//Get
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
router.delete("/:id", housingMiddleware.validateId, housingController.deleteHousings)


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
     *      201:
     *        description: Created
     *     parameters:
     *      - in: path
     *        name: id # Note the name is the same as in the path
     *        required: true
     *        schema:
     *          type: string
     *        description: The id of the housing you want to delete
     */
router.put("/:id",  housingMiddleware.validateId, housingController.updateHousing)

module.exports = router;