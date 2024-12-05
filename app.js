// importato express sul app.js
const express = require("express");
// istanza del server
const app = express();
// port da ascoltare nel localhost
const PORT = 3000;

// body parser
app.use(express.json());

// IMPORTARE IL POSTS
const postRouters = require("./routers/posts");
// importare chefs
const chefsRouters = require("./routers/chefRouter");
// ROUTER API DEL POSTS
app.use("/posts", postRouters);
// ROUTER API DEL CHEFS
app.use("/chefs", chefsRouters);
// ROOT default
app.get("/", (req, res) => {
  res.send("<h1>Il mio server</h1>");
});
// METTO IL SERVER IN ASCOLTO SU LOCALHOST alla PORT GIà INDICATA
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// FALLBACK
app.all("*", (req, res) => {
  res.status(404).send("<h1>*404-NOT-FOUND</h1>*");
});
