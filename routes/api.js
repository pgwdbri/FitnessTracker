var app = require("express").Router()
var db = require("../model/fitness")

app.get("/api/workouts", function(req,res){
    db.find().then(function(records){
        console.log("GET",records)
        res.json(records)
    })
})
app.put("/api/workouts/:id", function(req,res){
    db.findByIdAndUpdate(req.params.id,
        {$push: {exercises:req.body}},{new:true}).then(function(records){
        console.log("PUT",records)
        res.json(records)
    })
})
app.post("/api/workouts", function(req,res){
    db.create(req.body).then(function(records){
        console.log("POST",records)
        res.json(records)
    })
})

app.get("/api/workouts/range", function(req,res){
    db.find().limit(10).then(function(records){
        console.log("GET",records)
        res.json(records)
    })
})
module.exports = app