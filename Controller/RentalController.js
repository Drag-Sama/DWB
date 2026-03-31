const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

getRentals = async (req,res) => {
    try {
        const {id,renterId,housingId,start_date,end_date,sort,order} = req.query
        const filters = {}
        if (id) filters.id = id
        if (renterId) filters.renterId = renterId
        if (housingId) filters.housingId = housingId
        if (start_date) filters.start_date = {contains:start_date}
        if (end_date) filters.end_date = {contains:end_date}
        let orderBy = undefined
        if (sort) {
            orderBy = {[sort]: order || "asc"} //asc par défaut si pas de sort après l'order
        }
        const users = await prisma.rental.findMany({
            where:filters,
            orderBy
        })
        res.json(users)
    } catch (err) {
        console.error("Error getRentals : " + err)
        res.status(500).json({error: "Internal server error"})
    }
}

addRental = async (req,res) => {
    console.log(req.body)
    try {
        const {renterId,housingId,start_date,end_date} = req.body
        const rental = await prisma.rental.create({
           data: {
            renterId,
            housingId,
            start_date,
            end_date
           }
        })
        res.status(201).json(rental)
    } catch (err) {
        console.error("Error AddRental : ", err)
        res.status(500).json({error: "Internal server error"})
    }
}

updateRentalById = async(req,res)=> {
    try {
        const {id} = req.params
        const {renterId,housingId,start_date,end_date} = req.body;
        const updatedRental = await prisma.rental.update({
            where: {id},
            data: {renterId,housingId,start_date,end_date}
        })
        res.json(updatedRental)
    } catch(err) {
        console.error("Error updateRentalById : ",err)
        res.status(500).json({error: err.message})
    }
}

deleteRentalById = async (req,res) => {
    try {
        const {id} = req.params
        const rental = await prisma.rental.deleteMany({
            where: {id:id}
        })
        res.status(200).json({message:"rental deleted",rental:rental})
    } catch (err) {
        console.error("Error DeleteRental:", err)
        res.status(500).json({error: "Internal server error"})
    }
}


module.exports = {getRentals,addRental,updateRentalById,deleteRentalById}