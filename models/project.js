const mongoose =  require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    repoUrl:{type:String, required:true},
    liveUrl:{type:String, required:true}

})

const Project = mongoose.model("Project",projectSchema);

module.exports = Project;