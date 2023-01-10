const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code

// 3 Views
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/develop", (req, res) => {
  res.render("develop", { user: user });
});
app.get("/", function (req, res) {
  res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The server is runing successfully on port: ${PORT}, http://localhost:${PORT}`
  );
});
// console.log("web Serverni boshlash");
// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", //  20-30
//   "ozingizga ishlashni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new ERROR("inser a number");
//   else if (a < 20) return list[0];
//   else if ((a > 20) & (a < 30)) return list[1];
//   else if ((a > 30) & (a < 40)) return list[2];
//   else if ((a > 40) & (a < 50)) return list[3];
//   else if ((a > 50) & (a < 60)) return list[4];
//   else {
//     return list[5];
//   }
// }

// // call via then/catch
// console.log("passed hero 0");
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob", data);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });
// console.log("passed here 1");

// call via async/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);

//   javob = await maslahatBering(12);
//   console.log(javob);

//   javob = await maslahatBering(77);
//   console.log(javob);
// }
// run();

// console.log("web Serverni boshlash");
// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", //  20-30
//   "ozingizga ishlashni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// function maslahatBering(a, callback, yosh) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, yosh[0], list[0]);
//   else if (a > 20 && a <= 30) callback(null, yosh[1], list[1]);
//   else if (a > 30 && a <= 40) callback(null, yosh[2], list[2]);
//   else if (a > 40 && a <= 50) callback(null, yosh[3], list[3]);
//   else if (a > 50 && a <= 60) callback(null, yosh[4], list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5], yosh);
//     }, 5000);
//   }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log(`data chiqar  yoshini chiqar ${data}`);
//   }
// });
// console.log("passed here 1");

// const express = require("express");
// const res = require("express/lib/response");
// const app = express();
// const http = require("http");
// const fs = require("fs");
// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });
// // 1 Kirish code
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // 2 Session code

// // 3 Views
// app.set("views", "views");
// app.set("view engine", "ejs");

// // 4 Routing
// app.post("/create-item", (req, res) => {
//   console.log(req.body);
//   res.json({ test: "success" });
// });

// app.get("/develop", (req, res) => {
//   res.render("develop", { user: user });
// });
// app.get("/", function (req, res) {
//   res.render("harid");
// });

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log(`The server is runing successfully on port: ${PORT}`);
// });

// console.log("server ishga tushdi");

// const schedule = require("node-schedule");
// const moment = require("moment");
// const shell = require("shelljs");

// schedule.scheduleJob("*/05  * * *  * *", function () {
//   const time = moment().format(" HH:mm");
//   console.log(`contabni ishga tushir: ${time}`);
//   shell.exec("node operate.js", { async: true });

//   // let x = Math.floor(101 * Math.random());koment holat
//   // console.log(`${time} => xni chiqar: ${x}`);koment holat
// });
