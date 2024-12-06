// Importato i miei "POSTS"
const chefs = require("../models/chefModel");

// INDEX
function index(req, res) {
  res.json(chefs);
}
// SHOW
function show(req, res) {
  let id = parseInt(req.params.id);
  // Cerco l'item con il suo id
  item = chefs.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else res.status(404).json("nessun chef trovato");
}
// CREATE
function store(req, res) {
  console.log(req.body);
  // Assegnare al nuovo ID il valore più alto tra quelli presenti nell'array, incrementato di 1
  let newId = 0;
  for (i = 0; i < chefs.length; i++) {
    if (chefs[i].id > 0) {
      newId = chefs[i].id + 1;
    }
  }
  let newchefs = {
    id: newId,
    chefId: req.body.chefId,
    chefName: req.body.chefName,
  };
  chefs.push(newchefs);

  res.status(201).json(newchefs);
}
// UPDATE
function update(req, res) {
  console.log(req.body);
  let id = parseInt(req.params.id);
  // Cerco l'item con il suo id
  item = chefs.find((item) => item.id === id);
  // Controllo se il parametro si riferisce ad un post esistente,
  if (!item) {
    res.status(404).json({ message: "chef-NOT-FOUND" });
  }
  // Prendo l'item Trovato
  chefId = req.body.chefId;
  chefName = req.body.chefName;
  // Tutto il chefs con il nuovo item
  res.json(chefs);
}
// DELETE
function destroy(req, res) {
  let id = parseInt(req.params.id);
  // Cerco l'indice dell'elemento che ha l'ID uguale all'ID indicato
  index = chefs.findIndex((item) => item.id === id);
  if (index !== -1) {
    chefs.splice(index, 1);
    console.log(chefs, "Il Nuovo conteggio del chefs:", chefs.length - 1);
    res.sendStatus(204);
  } else res.status(404).json("404-NOT-FOUND");
}

// ESPORTAZIONE di tutti le funzione
module.exports = { index, show, store, update, destroy };
