const router = require("express").Router();
const projectController = require("../../controller/projectController");

router.route("/")
.get(projectController.findAll)