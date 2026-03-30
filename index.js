<<<<<<< HEAD
const express = require('express')
const {PrismaClient}  = require("@prisma/client");
const housingRouter = require("./Routes/housing");
const userRouter = require("./Routes/housing");
=======
const express = require("express")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
>>>>>>> fba8149ba6ec127e8a1a24aab6f4648ba87ac033

const housingRouter = require("./Routes/housing")

const app = express()

<<<<<<< HEAD
app.use(express.json());

// Register API routes
app.use("/housing", housingRouter);
app.use("/users", userRouter)


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
=======
app.use("/housing", housingRouter);

app.use(express.json())
app.listen(3000, () => console.log('Server running on port 3000'))
>>>>>>> fba8149ba6ec127e8a1a24aab6f4648ba87ac033
