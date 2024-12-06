// importato express sul app.js
const express = require("express");
// istanza del server
const app = express();
// port da ascoltare nel localhost
const PORT = 3000;

// IMPORTARE IL POSTS
const postRouters = require("./routers/posts");
// importare chefs
const chefsRouters = require("./routers/chefRouter");
// importare il date
const checktime = require("./middlewares/checktime");

// importare error
const errorHandler = require("./middlewares/errorHandler");
// importare error
const notFound = require("./middlewares/notFound");
// body parser qualunque richiesta che arriva va parsata in application json
app.use(express.json());
// ROOT default
app.get("/", (req, res) => {
  res.send("<h1>Il mio server</h1>");
});
// Router api del checktime
app.use(checktime);

// ROUTER API DEL POSTS
app.use("/posts", postRouters);
// ROUTER API DEL CHEFS
app.use("/chefs", chefsRouters);

// FALLBACK
// app.all("*", (req, res) => {
//   res.status(404).send("<h1>*404-NOT-FOUND</h1>*");
// });

// Router api per errorHandler
app.use(errorHandler);
// router api dell'error not found
app.use(notFound);
// METTO IL SERVER IN ASCOLTO SU LOCALHOST alla PORT GIà INDICATA
app.listen(PORT, () => {
  console.log("Il mio server => " + `http://localhost:${PORT}`);
});
