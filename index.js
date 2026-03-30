const express = require("express")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const housingRouter = require("./Routes/housing")

const app = express()

app.use(express.json())

app.use("/housing", housingRouter);

app.listen(3000, () => console.log('Server running on port 3000'))
