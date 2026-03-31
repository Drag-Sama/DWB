const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const allowedFields = ["id", "adresse", "city", "name", "price", "size"]
const intFields = ["price", "size"]

getFilterFromBody = (req) => {
    const {adresse,city,name,price,size,userId} = req.body
    
    const filter = {};
    if(adresse) filter.adresse = adresse;
    if(city) filter.city = city;
    if(name) filter.name = name;
    if(price) filter.price = price;
    if(size) filter.size = size;
    if(userId) filter.userId = userId;

    return filter;
}

//GET
getHousings = async (req, res) => {
    try {
        const housings = await prisma.Housings.findMany()
        res.json(housings)
    } catch (err) {
        console.error("Error getHousings : " + err)
         res.status(500).json({ error: "Internal server error" })
} }

getHousingsByProperty = async (req, res) => {
    const filter = getFilterFromBody(req)
    try {
        const housings = await prisma.housings.findMany(
            {where:filter}
        );
        res.json(housings)
    } catch (err) {
        console.error("Error getHousingsByProperty : " + err)
         res.status(500).json({ error: "Internal server error" })
} }

sortHousingsByProperty = async (req, res) => {
    const {property} = req.params
    try {
        if(!allowedFields.includes(property)){
            res.status(400).json({error: "Property not valid"});
            return -1
        }
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

filterHousingsByPropertyMax = async (req, res) => {
    var {value} = req.params
    const {adresse,city,name,price,size,userId} = req.body

    const filter = {};
    if(adresse) filter.adresse = adresse;
    if(city) filter.city = city;
    if(name) filter.name = name;
    if(price) filter.price = parseInt(price);
    if(size) filter.size = parseInt(size);
    if(userId) filter.userId = userId;
    try {
        const housings = await prisma.housings.findMany(
            {where:filter}
        );
        console.log(housings)
        res.json(housings)
    } catch (err) {
        console.error("Error getHousingsByProperty : " + err)
         res.status(500).json({ error: "Internal server error" })
} }

//Post
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

//DELETE
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

//PUT
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