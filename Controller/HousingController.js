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
        const {adresse,city,name,price,size,ownerId,sort,order} = req.query
        const filters = {}
        if (adresse) filters.addHousing = {contains:adresse}
        if (city) filters.city = {contains:city}
        if (name) filters.name = {contains:name}
        if (price) filters.price = {contains:price}
        if (size) filters.size = {contains:size}
        if (ownerId) filters.ownerId = ownerId
        let orderBy = undefined
        if (sort) {
            orderBy = {[sort]: order || "asc"} //asc par défaut si pas de sort après l'order
        }
        const housings = await prisma.housings.findMany({
            where:filters,
            orderBy
        })
        res.json(housings)
        res.status(200).json({message: "Success"})
    } catch (err) {
        console.error("Error getHousings : " + err)
         res.status(500).json({ error: "Internal server error" })
} }

//Post
addHousing = async (req, res) => {
    const {adresse,city,name,price,size,ownerId} = req.body
    try{
        const housing = await prisma.housings.create(
        {
            data:{
                adresse,
                city,
                name,
                price,
                size,
                ownerId
            },
        });
        res.status(201).json({message: "Created", housing: housing})
    }catch (err) {
        console.error("Error addHousing : " + err)
         res.status(500).json({ error: "Internal server error" })
    }
}

//DELETE
deleteHousings = async (req, res) => {
    const {id} = req.params
    try {
        const housing = await prisma.housings.deleteMany(
            {where:{id: id}}
        );
        res.json(housing)
        res.status(200).json({message: "Deleted", housing: housing})
    } catch (err) {
        console.error("Error deleteHousings : " + err)
         res.status(500).json({ error: "Internal server error" })
} }

//PUT
updateHousing = async (req, res) => {
    const {id} = req.params
    const {adresse,city,name,price,size,ownerId} = req.body
    try {
        const housing = await prisma.housings.updateMany(
            {where:{id: id},
            data:{
                adresse:adresse,
                city:city,
                name:name,
                price:price,
                size:size,
                ownerId:ownerId
            },}
        );
       res.status(200).json({message: "Edited", housing: housing})
    } catch (err) {
        console.error("Error updateHousing : " + err)
         res.status(500).json({ error: "Internal server error" })
} }

 module.exports = {getHousings, addHousing, deleteHousings, updateHousing}