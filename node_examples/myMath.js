class MyMath {
  static PI = 3.14;
}

// // експорт за замовчанням (ESModules)
// export default MyMath;

// // export default S; --- ERROR

// експорт за замовчанням (CommonJS)

module.exports = MyMath;

// module.exports = 5; // не помилка, але перезапис

// // іменний експорт (ESModules)
// export { MyMath };

// export const test = 5;

// export function testFunc() {
//   console.log("test func");
// }

// іменний експорт (ESModules)

// якщо exports це обʼєкт
module.exports.test = 5;

module.exports.testFunc = () => {
  console.log("test func");
}

// якщо exports це не обʼєкт
module.exports = {
  test: 5,
  MyMath,
  testFunc : () => {
    console.log("test func");
  }
}

// console.log(module);
console.log("MyMath.js");
