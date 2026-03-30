const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

updateUser = async(req,res)=> {
    const {id} = req.params
    try {
        const updatedUser = await prisma.user.update({
            where: {id},
            data: req.body
        })
        res.json(updatedUser)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
}

class User {
    constructor(id, firstName, name,birthdate) {
        this.id = id;
        this.firstName = firstName;
        this.name = name;
        this.birthdate = birthdate;
    }
}

async function getAllUsers() {
    return await prisma.user.findMany()
}

/*async function addUser(user) {
    prisma.user.create()
}*/

function showUsers(list){
    for (usr in list) {
        console.log("Name : " + usr.firstName + "\n")
    }
}

module.exports = {updateUser}