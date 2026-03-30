const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


getHousings = async (req, res) => {
    try {
        const housings = await prisma.housings.findMany()
        res.json(housings)
    } catch (err) {
        console.log("Error getHousings")
    } }

 module.exports = {getHousings}