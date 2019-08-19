const express = require("express");
const routes = express.Router();
const ArtController = require("./controllers/artController");

routes.post("/arts", ArtController.check);

module.exports = routes;
