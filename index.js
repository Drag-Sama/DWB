const express = require("express")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const housingRouter = require("./Routes/housing")
const userRouter = require("./Routes/user")

const app = express()

app.use(express.json())

app.use("/housing", housingRouter);
app.use("/user",userRouter);

app.listen(3000, () => console.log('Server running on port 3000'))
