/*
 * 1. 원의 넓이를 구하는 공식
 * 2. PI 정의
 * 3. 공식을 통해 결과 얻기
 */

// commonjs
// const { getCircleArea } = require("./mathUtil");

// esm
// import { getCircleArea } from "./mathUtil";
// export default로 사용했을 경우
import mathUtil from "./mathUtil";

const result = mathUtil.getCircleArea(2);
console.log(result);
