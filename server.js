console.log("web Serverni boshlash");

const express = require("express");

const app = express();
const http = require("http");
// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code

// 3 Views
app.set("view", "views");
app.set("view engine", "ejs");

// 4 Routing
app.get("/hello", function (req, res) {
  res.end(`<h1>Hello World</h1>`);
});
app.get("/gift", function (req, res) {
  res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is runing successfully on port: ${PORT}`);
});
