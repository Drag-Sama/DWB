const express = require("express");
const rentalController = require("../Controller/RentalController")
const rentalMiddleware = require ("../Middleware/RentalMiddleware");

const router = express.Router();

router.get("/",rentalMiddleware.validateGetRentals,rentalController.getRentals)
router.post("/",rentalMiddleware.validateAddRental,rentalController.addRental)
router.put("/:id",rentalMiddleware.validateUpdateRentalById,rentalController.updateRentalById)
router.delete("/:id",rentalMiddleware.validateDeleteRentalById,rentalController.deleteRentalById)

/**
 * @swagger
 * '/rental':
 *  get:
 *     tags:
 *     - Rental
 *     summary: Get rentals based on parameters
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *       - in: query
 *         name: renterId
 *         schema:
 *           type: string
 *       - in: query
 *         name: housingId
 *         schema:
 *           type: string
 *       - in: query
 *         name: start_date
 *         schema:
 *           type: date
 *       - in: query
 *         name: end_date
 *         schema:
 *           type: date
 *     responses:
 *       200:
 *         description: Success
 */

/**
     * @swagger
     * '/rental':
     *  post:
     *     tags:
     *     - Rental
     *     summary: Create new rental
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - renterId
     *              - housingId
     *              - start_date
     *              - end_date
     *            properties:
     *              renterId:
     *                type: string
     *                default: ""  
     *              housingId:
     *                type: string
     *                default: "" 
     *              start_date:
     *                type: date
     *                default: "" 
     *              end_date:
     *                type: date
     *                default: ""
     *     responses:
     *      201:
     *        description: Created
     */

    /**
 * @swagger
 * /rental/{id}:
 *    delete:
 *     tags:
 *     - Rental
 *     summary: Delete a rental 
 *     responses:
 *       200:
 *         description: Deleted
 *    parameters:
 *      - in: path
 *        name: id # Note the name is the same as in the path
 *        required: true
 *        schema:
 *          type: string
 *        description: The id of the rental you want to delete
 */


/**
     * @swagger
     * '/rental/{id}':
     *  put:
     *     tags:
     *     - Rental
     *     summary: Edit a rental
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - renterId
     *              - housingId
     *              - start_date
     *              - end_date
     *            properties:
     *              renterId:
     *                type: string
     *                default: ""  
     *              housingId:
     *                type: string
     *                default: "" 
     *              start_date:
     *                type: date
     *                default: "" 
     *              end_date:
     *                type: date
     *                default: "" 
     *     responses:
     *      200:
     *        description: Edited
     *     parameters:
     *      - in: path
     *        name: id # Note the name is the same as in the path
     *        required: true
     *        schema:
     *          type: string
     *        description: The id of the rental you want to edit
     */
module.exports = router