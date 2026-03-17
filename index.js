const locationRoute = require('./Routes/location');

//Initialisation
const express = require('express')
const app = express()


app.use("/location", locationRoute)
app.listen(3000, () => console.log('api_test listening on port 3000!'))
