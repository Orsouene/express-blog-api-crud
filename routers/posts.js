const express = require("express");
const routers = express.Router();

// IMPORTATO TUTTI LE FUNZIONE
const {
  index,
  show,
  create,
  update,
  destroy,
} = require("../controllers/controller");
// INDEX
routers.get("/", index);
// SHOW
routers.get("/id", show);
// CREATE
routers.post("/", create);
// UPDATE
routers.put("/id", update);
// DELETE
routers.delete("/id", destroy);

// ESPORTAZIONE
module.exports = routers;
