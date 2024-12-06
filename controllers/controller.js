// Importato i miei "POSTS"
const menu = require("../models/menu");

// INDEX
function index(req, res) {
  const tag = req.query.tags;
  // ERROR per il errorHandler :
  // consolelog();

  console.log(tag);
  let newArray = [...menu];
  if (tag) {
    newArray = newArray.filter((item) => item.tags && item.tags.includes(tag));
  }

  res.json(newArray);
}
// SHOW
function show(req, res) {
  let id = parseInt(req.params.id);
  // Cerco l'item con il suo id
  item = menu.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else res.status(404).json("nessun elemento trovato");
}
// CREATE
function store(req, res) {
  console.log(req.body);
  // Assegnare al nuovo ID il valore più alto tra quelli presenti nell'array, incrementato di 1
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

  res.status(201).json(newMenu);
}
// UPDATE
function update(req, res) {
  console.log(req.body);
  let id = parseInt(req.params.id);
  // Cerco l'item con il suo id
  item = menu.find((item) => item.id === id);
  // Controllo se il parametro si riferisce ad un post esistente,
  if (!item) {
    res.status(404).json({ Error: "ITEM-NOT-FOUND" });
  }
  // Prendo l'item Trovato
  item.titolo = req.body.titolo;
  item.contenuto = req.body.contenuto;
  item.immagine = req.body.immagine;
  item.tag = req.body.tag;
  // Tutto il menu con il nuovo item
  res.json(menu);
}
// DELETE
function destroy(req, res) {
  let id = parseInt(req.params.id);
  // Cerco l'indice dell'elemento che ha l'ID uguale all'ID indicato
  index = menu.findIndex((item) => item.id === id);
  if (index !== -1) {
    menu.splice(index, 1);
    console.log(menu, "Il Nuovo conteggio del posts:", menu.length - 1);
    res.sendStatus(204);
  } else
    res.status(404).json({ Error: "nessun elemento da eliminare trovato" });
}

// ESPORTAZIONE di tutti le funzione
module.exports = { index, show, store, update, destroy };
