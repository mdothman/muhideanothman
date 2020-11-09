const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const router = require("express").Router();

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


app.use(express.urlencoded({ extended: true }));
app.use("/public",express.static(path.join(__dirname,"../client/public")))
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });