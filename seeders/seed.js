const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/muhideanothman",{
    useNewUrlParser: true, useUnifiedTopology: true
})

const projectSeed =[
    {
        title:"The Chef's Pick",
        description:" ",
        repoUrl:"",
        liveUrl:"",
    }
]



