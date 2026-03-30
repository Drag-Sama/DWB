const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


getHousings = async (req, res) => {
    try {
        const housings = await prisma.Housings.findMany()
        res.json(housings)
    } catch (err) {
        console.error("Error getHousings : " + err)
         res.status(500).json({ error: "Internal server error" })
} }

getHousingById = async (req, res) => {
    const {id} = req.params
    console.log(id)
    try {
        const housings = await prisma.Housings.findMany(
            {where:{id: id},}
        )
        res.json(housings)
    } catch (err) {
        console.error("Error getHousings : " + err)
         res.status(500).json({ error: "Internal server error" })
} }

 module.exports = {getHousings,getHousingById}