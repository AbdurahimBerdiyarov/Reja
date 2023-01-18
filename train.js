let arr = [12, 23, null, 34, null, 32, null, null];

function moveNullsKeepOrder(arr) {
  let new_arr = [];
  let new_arr2 = [];
  arr.map((val) => {
    if (val !== null) {
      new_arr.push(val);
    } else if (val == null) {
      new_arr2.unshift(val);
    }
  });

  return new_arr.concat(new_arr2);
}
let res = moveNullsKeepOrder(arr);
console.log(res);
// let arr = [12, 23, null, 34, null, 32, null, null];

// let ass = arr.filter(function (a) {
//   return a;
// });

// console.log(ass);
//  I-Task: Shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive yani noldan yuqori qiymatlarni arrayda return qilsin
// Masalan: getPositive([0, -15, 5, -3, 2, -8, 9, -11]) return qilishi kerak [5, 2, 9]

// let arr = [0, -15, 5, -3, 2, -8, 9, -11];

// function getPositive(arr) {
//   let new_arr = arr.filter((val) => val > 0);
//   return new_arr;
// }
// const res = getPositive(arr);
// console.log(res);

// function reverseString(str) {
//   newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// const res = reverseString("javaScript");
// console.log(res);
// enginx messages for users, [15 Jan Reiwa 5 at 00:18:12]:
// ...📌  I-Task: Shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive yani noldan yuqori qiymatlarni arrayda return qilsin

// 📩 New message from group :

// 📌  Masalan: getPositive([0, -15, 5, -3, 2, -8, 9, -11]) return qilishi kerak [5, 2, 9]

// let array = [0, -15, 5, -3, 2, -8, 9, -11];

// let getPositive = (arr) => {
//   return arr.filter((val) => val > 0);
// };
// console.log(getPositive(array));

// let arr = [12, 22, 99, 33, 44, 55, 99, 66];

// function findBig(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return arr.indexOf(max);
// }
// const res = findBig(arr);
// console.log(res);
// console.log("tran ishga tush");

// const nodemon = require("nodemon");

// function findDoubler(str) {
//   let new_string = str.split("");

//   let war = new_string.map((val, index) => {
//     if (val == new_string[index + 1]) return true;
//     else return false;
//   });

//   return war.includes(true);
// }
// const result = findDoubler("hello");
// console.log(result);

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

// node single thread

// console.log(
//   "train____________train___________train__________train_________train_________train"
// );

// function getAdvice(a, callback) {
//   if (typeof a !== "number") callback("ERROR");
//   else if (a < 100) callback("100dan kichkina");
//   else if (a > 100) callback("100dan katta");
// }
// getAdvice(112, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log(`${data}`);
//   }
// });
