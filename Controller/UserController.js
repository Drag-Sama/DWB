const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

//GETs

getUsers = async (req,res) => {
    try {
        const {firstName,name,birthday,sort,order} = req.query
        const filters = {}
        if (firstName) filters.firstName = {contains:firstName}
        if (name) filters.name = {contains:name}
        if (birthday) filters.birthday = {contains:birthday}
        let orderBy = undefined
        if (sort) {
            orderBy = {[sort]: order || "asc"} //asc par défaut si pas de sort après l'order
        }
        const users = await prisma.user.findMany({
            where:filters,
            orderBy
        })
        res.json(users)
    } catch (err) {
        console.error("Error getUsers : " + err)
        res.status(500).json({error: "Internal server error"})
    }
}


//POSTs
addUser = async (req,res) => {
    console.log(req.body)
    try {
        const {firstName, name, birthday} = req.body
        const user = await prisma.user.create({
           data: {
            firstName,
            name,
            birthday
           }
        })
        res.status(201).json(user)
    } catch (err) {
        console.error("Error AddUser : ", err)
        res.status(500).json({error: "Internal server error"})
    }
}

//PUTs
updateUserById = async(req,res)=> {
    try {
        const {id} = req.params
        const {firstName, name, birthday, housingsId} = req.body;
        const updatedUser = await prisma.user.update({
            where: {id},
            data: {firstName,name,birthday,housingsId}
        })
        res.json(updatedUser)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
}

//DELETEs
deleteUserById = async (req,res) => {
    try {
        const {id} = req.params
        const user = await prisma.user.deleteMany({
            where: {id:id}
        })
        res.status(200).json({message:"User deleted",user:user})
    } catch (err) {
        console.error("Error DeleteUser:", err)
        res.status(500).json({error: "Internal server error"})
    }
}


module.exports = {updateUserById,addUser,deleteUserById,getUsers}