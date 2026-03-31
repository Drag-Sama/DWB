const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

getRentals = async (req,res) => {
    try {
        const {renterId,housingId,start_date,end_date,sort,order} = req.query
        const filters = {}
        if (renterId) filters.renterId = {contains:renterId}
        if (housingId) filters.housingId = {contains:housingId}
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