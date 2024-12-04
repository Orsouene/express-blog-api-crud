// Importato i miei "POSTS"
const menu = require("../models/menu");

// INDEX
function index(req, res) {
  res.json(menu);
}
// SHOW
function show(req, res) {
  res.send("Visualizzare un elemento");
}
// CREATE
function create(req, res) {
  res.send("Creare un nuovo elemento");
}
// UPDATE
function update(req, res) {
  res.send("Modificare interamente un elemento");
}
// DELETE
function destroy(req, res) {
  res.send("Eliminare un elemento");
}

// ESPORTAZIONE di tutti le funzione
module.exports = { index, show, create, update, destroy };
