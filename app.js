// const express = require("express");

// const app = express();

// // MongoDB connect
// const db = require("./server").db();
// const mongodb = require("mongodb");

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
//   console.log("user entered / create-item");
//   const new_reja = req.body.reja;
//   db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
//     // console.log(data.ops);
//     res.json(data.ops[0]);
//   });
// });

// app.post("/delete-item", (req, res) => {
//   const id = req.body.id;
//   db.collection("plans").deleteOne(
//     { _id: new mongodb.ObjectId(id) },
//     function (err, data) {
//       res.json({ state: "success" });
//     }
//   );
// });

// app.post("/edit-item", (req, res) => {
//   const data = req.body;
//   console.log(data);
//   db.collection("plans").findOneAndUpdate(
//     { _id: new mongodb.ObjectId(data.id) },
//     { $set: { reja: data.new_input } },
//     function (err, data) {
//       res.json({ state: "success" });
//     }
//   );
// });

// app.post("/delete-all", (req, res) => {
//   if (req.body.delete_all) {
//     db.collection("plans").deleteMany(function () {
//       res.json({ state: "hamma rejalar ochirildi" });
//     });
//   }
// });

// // app.get("/develop", (req, res) => {
// //   res.render("develop", { user: user });
// // });
// app.get("/", function (req, res) {
//   console.log("user entered /");
//   db.collection("plans")
//     .find()
//     .toArray((err, data) => {
//       if (err) {
//         console.log(err);
//         res.end("something went wrong");
//       } else {
//         res.render("reja", { items: data });
//       }
//     });
// });

// module.exports = app;
const express = require("express");
const app = express();

// MongoDB connect
const { getDb } = require("./server"); // `getDb` funksiyasini chaqiramiz
const mongodb = require("mongodb");

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
  console.log("user entered / create-item");
  const new_reja = req.body.reja;
  const db = getDb(); // `db` ob'ektini olish
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  const db = getDb(); // `db` ob'ektini olish
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  const db = getDb(); // `db` ob'ektini olish
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    const db = getDb(); // `db` ob'ektini olish
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar ochirildi" });
    });
  }
});

app.get("/", function (req, res) {
  console.log("user entered /");
  const db = getDb(); // `db` ob'ektini olish
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
