const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var userRoute = require('./routes/userRoute')
var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json());
app.use(cors())
app.use(userRoute)

require('./setup/mongo')



app.listen(port, () => console.log(`Example app listening on port ${port}!`))