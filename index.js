const housingRoute = require('./Routes/housing');

//Initialisation
const express = require('express')
const app = express()


app.use("/housing", housingRoute)
app.listen(3000, () => console.log('api_test listening on port 3000!'))
