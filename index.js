// // іменний імпорт (ESModules)
// import { test, testFunc as newTestFuncName } from "./myMath.js";

// import * as MyMath from "./myMath.js";

// іменний імпорт (CommonJS)
const { test, testFunc: myTestFunc } = require("./myMath.js");

// // імпорт за замовчанням (ESModules)
// import MyMathModule from "./myMath.js";

// // імпорт за замовчанням (CommonJS)
const myMathExports = require("./myMath.js");

console.log(myMathExports);

// console.log(MyMath);

// newTestFuncName();

// console.log(__dirname); // шлях до папки, що містить файл
// console.log(__filename); // шлях до файлу, що запущено

// console.log(module);
