const express = require('express')
const app = express.Router()
var User = require('../model/user')
var  Property = require('../model/property')
var  Photos = require('../model/images')
var  Notification = require('../model/notification')
var Rooms = require('../model/rooms')
const jwt = require('jsonwebtoken')
const sercet = "madam1234"

app.get('/register', (req, res) => {
    var data = new User(req.body)
    data.save()
    res.send(data)
})

app.post('/property', (req, res) => {
    var data= new Property(req.body)
    data.save()
    res.send(data)
})

app.post('/notification', (req, res) => {
    var data= new Notification(req.body)
    data.save()
    res.send(data)
})

app.post('/images', (req, res) => {
    var data= new Photos(req.body)
    data.save()
    res.send(data)
})

app.post('/rooms',(req,res) => {
    var data = new Rooms(req.body)
    data.save()
    res.send(data)
})

app.post('/login', (req, res) => {
    var pass = req.body.password
    var query = User.findOne({ username: req.body.username })

    query.exec(function (err, result) {
        var respass = result.password
        if (pass == respass) {
            var token = jwt.sign(req.body, sercet, { expiresIn: "7d" })
            res.send({
                user: {
                    username: result.username,
                    password: result.password
                },
                access_token: token
            })
        }
    })
})


app.post("/register", (req, res) => {
    var response = { error: {}, data: {}, response_status: 200, access_token: null }

    var user = new User(
        req.body
    )
    user.save().then(result => {
        response.error = null
        response.data.status = true
        response.data.body = result
        response.data.message = "successfully registered"
        res.send(response)
    }).catch(err => {
        response.error.status = true
        response.response_status=500
        response.data = null
        response.error.body = err
        response.error.message = "failed to register"
        res.send(response)
    })
})

module.exports = app