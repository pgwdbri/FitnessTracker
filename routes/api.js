var app = require("express").Router()
var db = require("../model/fitness")

app.get("/", function(req,res){
    db.find().then(function(records){
        console.log(records)
        res.json(records)
    }))
})