// const http = require("http");

// const mongodb = require("mongodb");
// let db;
// const connectionString =
//   "mongodb+srv://hoorwen:8PhPq2oTvulynXJx@cluster0.ajwstkx.mongodb.net/Reja ";

// mongodb.connect(
//   connectionString,
//   {
//     useNewUrlParser: true,
//     useUrlTopology: true,
//   },
//   (err, data) => {
//     if (err) console.log("ERROR on connection MongoDB");
//     else {
//       console.log("MongoDB connection succeed");
//       module.exports = data;

//       const app = require("./app");
//       const server = http.createServer(app);
//       let PORT = 3008;
//       server.listen(PORT, function () {
//         console.log(
//           `The server is runing successfully on port: ${PORT}, http://localhost:${PORT}`
//         );
//       });
//     }
//   }
// );
// const { MongoClient } = require("mongodb");
// const http = require("http");
// const { MongoClient } = require("mongodb");

// const connectionString =
//   "mongodb+srv://hoorwen:8PhPq2oTvulynXJx@cluster0.ajwstkx.mongodb.net/Reja";

// let db;

// MongoClient.connect(
//   connectionString,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true, // To'g'ri parameter
//   },
//   (err, client) => {
//     if (err) {
//       console.log("ERROR on connection MongoDB", err);
//     } else {
//       console.log("MongoDB connection succeed");
//       db = client.db(); // `db` ob'ektini o'zgaruvchiga tayinlaymiz

//       const app = require("./app");
//       const server = http.createServer(app);
//       let PORT = 3008;
//       server.listen(PORT, function () {
//         console.log(
//           `Server muvaffaqiyatli ishga tushdi: ${PORT}, http://localhost:${PORT}`
//         );
//       });
//     }
//   }
// );

// // `getDb` funksiyasini eksport qilamiz
// module.exports = { getDb: () => db };

const http = require("http");
const { MongoClient } = require("mongodb");

// MongoDB ulanish satri
const connectionString =
  "mongodb+srv://hoorwen:8PhPq2oTvulynXJx@cluster0.ajwstkx.mongodb.net/Reja?retryWrites=true&w=majority";

let db;

// MongoDB ulanishi
MongoClient.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Bu to'g'ri parametrlardir
  },
  (err, client) => {
    if (err) {
      console.error("MongoDB ulanishida xatolik yuz berdi:", err);
    } else {
      console.log("MongoDB ulanishi muvaffaqiyatli amalga oshirildi");
      db = client.db(); // `db` obyektini saqlash

      // HTTP server yaratish
      const app = require("./app");
      const server = http.createServer(app);
      const PORT = 3008;
      server.listen(PORT, function () {
        console.log(
          `Server muvaffaqiyatli ishga tushdi: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);

// `db` obyektini olish uchun funksiyani eksport qilamiz
module.exports = { getDb: () => db };
