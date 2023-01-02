// const e = require("express");

// console.log("tran ishga tush");

const func = (a, b, c) => {
  if (b == "/" && c == 0) {
    return "not valid to operate'";
  } else if (b == "+") {
    return a + c;
  } else if (b == "-") {
    return a - c;
  } else if (b == "*") {
    return a * c;
  } else if (b == "/") {
    return a / c;
  }
};
const war = func(6, "/", 0);
console.log(war);
