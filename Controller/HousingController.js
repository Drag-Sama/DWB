const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const allowedFields = ["id", "adresse", "city", "name", "price", "size"]
const intFields = ["price", "size"]


getHousings = async (req, res) => {
    try {
        const housings = await prisma.Housings.findMany()
        res.json(housings)
    } catch (err) {
        console.error("Error getHousings : " + err)
         res.status(500).json({ error: "Internal server error" })
} }

getHousingsByProperty = async (req, res) => {
    var {property,value} = req.params
    console.log(property) //TODO verifier que property est bien dans une liste avec toutes les propriétés de Housing
    if(intFields.includes(property)){
        value = Number(value)
    }
    try {
        const housings = await prisma.housings.findMany(
            {where:{[property]: value}}
        );
        console.log(housings)
        res.json(housings)
    } catch (err) {
        console.error("Error getHousingsByProperty : " + err)
         res.status(500).json({ error: "Internal server error" })
} }

sortHousingsByProperty = async (req, res) => {
    const {property} = req.params
    console.log(property) //TODO verifier que property est bien dans une liste avec toutes les propriétés de Housing
    try {
        const housings = await prisma.housings.findMany({
            orderBy: {
                [property]: "desc",
            },
        });
        console.log(housings)
        res.json(housings)
    } catch (err) {
        console.error("Error sortHousingsByProperty : " + err)
         res.status(500).json({ error: "Internal server error" })
} }

addHousing = async (req, res) => {
    const {adresse,city,name,price,size,userId} = req.body
    try{
        const housing = await prisma.housings.create(
        {
            data:{
                adresse,
                city,
                name,
                price,
                size,
                userId
            },
        });
        res.json(housing)
    }catch (err) {
        console.error("Error getHousings : " + err)
         res.status(500).json({ error: "Internal server error" })
    }
}

deleteHousings = async (req, res) => {
    const {id} = req.params
    try {
        const housings = await prisma.housings.deleteMany(
            {where:{id: id}}
        );
        res.json(housings)
    } catch (err) {
        console.error("Error getHousingsByProperty : " + err)
         res.status(500).json({ error: "Internal server error" })
} }

updateHousing = async (req, res) => {
    const {id} = req.params
    const {adresse,city,name,price,size} = req.body
    try {
        const housings = await prisma.housings.updateMany(
            {where:{id: id},
            data:{
                adresse:adresse,
                city:city,
                name:name,
                price:price,
                size:size,
            },}
        );
        res.json(housings)
    } catch (err) {
        console.error("Error getHousingsByProperty : " + err)
         res.status(500).json({ error: "Internal server error" })
} }

 module.exports = {getHousings, getHousingsByProperty, sortHousingsByProperty, addHousing, deleteHousings, updateHousing}