const menu = [
  //   post-1
  {
    id: 1,
    titolo: "ciambellone",
    contenuto:
      "Un ciambellone soffice e profumato, ideale per una colazione ricca e sana, preparato con farina, uova e zucchero.",
    immagine: "images/ciambellone.jpeg",
    tags: ["ciambellone", "colazione", "soffice", "dolce", "tradizionale"],
  },
  //   post-2
  {
    id: 2,
    titolo: "cracker_barbabietola",
    contenuto:
      "Cracker croccanti preparati con barbabietola, un'ottima alternativa salata e sana per accompagnare formaggi o antipasti.",
    immagine: "images/cracker_barbabietola",
    tags: ["cracker", "barbabietola", "salato", "snack", "sano"],
  },
  //   post-3
  {
    id: 3,
    titolo: "pane_fritto_dolce",
    contenuto:
      "Pane fritto dolce, croccante all'esterno e morbido all'interno, spesso ricoperto da zucchero a velo o miele.",
    immagine: "images/pane_fritto_dolce",
    tags: ["pane fritto", "dolce", "frittura", "tradizionale", "morbido"],
  },
  //   post-4
  {
    id: 4,
    titolo: "pasta_barbabietola",
    contenuto:
      "Pasta fresca preparata con succo di barbabietola, che dona un colore rosso intenso e un sapore delicato e dolce.",
    immagine: "images/pasta_barbabietola",
    tags: ["pasta", "barbabietola", "fresca", "salato", "sano"],
  },
  //   post-5
  {
    id: 5,
    titolo: "torta_paesana",
    contenuto:
      "Torta rustica della tradizione contadina, preparata con ingredienti semplici come farina, uova e frutta secca.",
    immagine: "images/torta_paesana",
    tags: ["torta paesana", "rustica", "tradizionale", "dolce", "festa"],
  },
];

// Aggiungere il conteggio al inizio dell'array
menu.unshift({ "Il conteggio del posts": menu.length });
// Esportazione
module.exports = menu;
