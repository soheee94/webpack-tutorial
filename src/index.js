// /*
//  * 1. 원의 넓이를 구하는 공식
//  * 2. PI 정의
//  * 3. 공식을 통해 결과 얻기
//  */

// // commonjs
// // const { getCircleArea } = require("./mathUtil");

// // esm
// // import { getCircleArea } from "./mathUtil";
// // export default로 사용했을 경우
// import mathUtil from "./mathUtil";

// const result = mathUtil.getCircleArea(2);
// console.log(result);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const { logInput, logResult, logFigureError } = require("./log");
const { getCircleArea, getSquareArea } = require("./mathUtil");

rl.question("원하는 도형을 입력해주세요. (정사각형, 원)", figure => {
  console.log(`선택된 도형 : ${figure}`);

  switch (figure) {
    case "정사각형":
      rl.question("변의 길이를 입력해주세요 : ", input => {
        console.log(logInput(input));
        console.log(logResult(figure, getCircleArea(input)));
        rl.close();
      });
      break;
    case "원":
      rl.question("변의 길이를 입력해주세요 : ", input => {
        console.log(logInput(input));
        console.log(logResult(figure, getSquareArea(input)));
        rl.close();
      });
      break;
    default:
      console.log(logFigureError);
      rl.close();
  }
});
