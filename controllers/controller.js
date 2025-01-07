// Importato i miei "POSTS"
const dolciItaliani = require("../models/menu");
console.log(dolciItaliani);

// INDEX
function index(req, res) {
  //  Il query string è tags=pasta e req.query.tags restituirà il valore pasta nel mio esempio su postman
  const tag = req.query.tags;
  // ERROR per il errorHandler :
  // consolelog();
  // Console.log() per il debug
  console.log(tag);
  // Faccio un copia dell array originale
  let newArray = [...dolciItaliani];
  //  controlla il valore del parametro tags che ho passato nell'URL  esiste e ha un valore valido
  if (tag) {
    //  creo un nuovo array che contiene solo gli oggetti che hanno un tag che corrisponde al valore di tag.
    newArray = newArray.filter(
      (item) =>
        // item.tags: Se item ha la proprietà tags (cioè, se esiste).
        item.tags &&
        // item.tags.includes(tag): Se la proprietà tags è un array e contiene il valore di tag
        item.tags.includes(tag)
    );
  }

  res.json(newArray);
}
// SHOW
function show(req, res) {
  let id = parseInt(req.params.id);
  // Cerco l'item che ha un id uguale a quello indicato nell endPoint
  item = dolciItaliani.find((item) => item.id === id);
  //  se ho trovato l'item
  if (item) {
    res.json(item);
  } else res.status(404).json("nessun elemento trovato");
}
// CREATE
function store(req, res) {
  console.log(req.body);
  // Assegnare al nuovo ID il valore più alto tra quelli presenti nell'array, incrementato di 1
  let newId = 0;
  let nuovoConteggio = 0;
  for (i = 0; i < dolciItaliani.length; i++) {
    if (dolciItaliani[i].id > 0) {
      newId = dolciItaliani[i].id + 1;
      nuovoConteggio = newId;
    }
  }
  let newdolciItaliani = {
    id: newId,
    titolo: req.body.titolo,

    img: req.body.img,
    tag: req.body.tags,
  };
  dolciItaliani.push(newdolciItaliani);
  dolciItaliani.push(" il nuovo conteggio è : " + nuovoConteggio);
  res.status(201).json(dolciItaliani);
}
// UPDATE
function update(req, res) {
  console.log(req.body);
  let id = parseInt(req.params.id);
  // Cerco l'item con il suo id
  item = dolciItaliani.find((item) => item.id === id);
  // Controllo se il parametro si riferisce ad un post esistente,
  if (item) {
    // Prendo l'item Trovato
    item.titolo = req.body.titolo;

    item.img = req.body.img;
    item.tags = req.body.tags;
    // Tutto il dolciItaliani con il nuovo item
    res.json(dolciItaliani);
  } else {
    res.status(404).json({ Error: "ITEM-NOT-FOUND" });
  }
}
// DELETE
function destroy(req, res) {
  let id = parseInt(req.params.id);
  // Cerco l'indice dell'elemento che ha l'ID uguale all'ID indicato
  index = dolciItaliani.findIndex((item) => item.id === id);
  if (index !== -1) {
    dolciItaliani.splice(index, 1);
    console.log(
      dolciItaliani,
      "Il Nuovo conteggio del posts:",
      dolciItaliani.length - 1
    );
    res.sendStatus(204);
  } else
    res.status(404).json({ Error: "nessun elemento da eliminare trovato" });
}

// ESPORTAZIONE di tutti le funzione
module.exports = { index, show, store, update, destroy };
