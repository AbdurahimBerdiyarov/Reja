console.log("tran ishga tush");

function findDoubler(str) {
  let new_string = str.split("");

  let war = new_string.map((val, index) => {
    if (val == new_string[index + 1]) return true;
    else return false;
  });

  return war.includes(true);
}
const result = findDoubler("hello");
console.log(result);

// const e = require("express");

// const func = (a, b, c) => {
//   if (b == "/" && c == 0) {
//     return "not valid to operate'";
//   } else if (b == "+") {
//     return a + c;
//   } else if (b == "-") {
//     return a - c;
//   } else if (b == "*") {
//     return a * c;
//   } else if (b == "/") {
//     return a / c;
//   }
// };
// const war = func(6, "/", 0);
// console.log(war);

// function findDoubler(str) {
//   if (typeof str === "str") {
//     return "string ";
//   }
//   return str
//     .split("")
//     .map((val) => val.repeat(2))
//     .join("");
// }

// const result = findDoubler("rahim");
// console.log(result);

// function findDoubler(str) {
//   if (
//     str
//       .split("")
//       .map((val) => val.repeat(2))
//       .join("")
//   ) {
//     return str;

//   } else if (
//     str
//       .split("")
//       .map((val) => val.repeat(1))
//       .join("")
//   ) {
//     return false;
//   }
// }

// const result = findDoubler("rahhim");
// console.log(result);

// function findDoubler(str) {
//   const new_string = str.split("");
//   console.log(new_string);
//   // const img = new_string.repeat(2);
//   // console.log(img);

//   const war = new_string.map((val) => {
//     if (val.repeat(2)) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   return war.join("");

//   // if (typeof str === "str") {
//   //   return "string ";
//   // }
//   // // const war = str
//   //   .split("")
//   //   .map((val) => val.repeat(2))
//   //   .join("");
//   // return war;
// }

// const result = findDoubler("rahim");
// console.log(result);

// const war = new_string.map((val) => {
