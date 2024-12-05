// Importato i miei "POSTS"
const menu = require("../models/menu");

// INDEX
function index(req, res) {
  res.json(menu);
}
// SHOW
function show(req, res) {
  let id = parseInt(req.params.id);
  item = menu.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else res.status(404).send("nessun elemento trovato");
}
// CREATE
function create(req, res) {
  console.log(req.body);
  let newId = 0;
  for (i = 0; i < menu.length; i++) {
    if (menu[i].id > 0) {
      newId = menu[i].id + 1;
    }
  }
  let newMenu = {
    id: newId,
    titolo: req.body.titolo,
    contenuto: req.body.contenuto,
    immagine: req.body.immagine,
    tag: req.body.tag,
  };
  menu.push(newMenu);

  res.status(201).json({ newMenu: newMenu, message: "Aggiunto un nuovo menu" });
}
// UPDATE
function update(req, res) {
  res.send("Modificare interamente un elemento");
}
// DELETE
function destroy(req, res) {
  let id = parseInt(req.params.id);
  index = menu.findIndex((item) => item.id === id);
  if (index !== -1) {
    menu.splice(index, 1);
    console.log(menu, "Il Nuovo conteggio del posts:", menu.length - 1);
    res.sendStatus(204);
  } else res.send("Eliminare un elemento");
}

// ESPORTAZIONE di tutti le funzione
module.exports = { index, show, create, update, destroy };
