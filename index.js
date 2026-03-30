const express = require('express')
const {PrismaClient}  = require("@prisma/client");
const housingRouter = require("./Routes/housing");
const userRouter = require("./Routes/housing");

const prisma = new PrismaClient();

const app = express();
const port = 8080;

app.use(express.json());

// Register API routes
app.use("/housing", housingRouter);
app.use("/users", userRouter)


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
