const PI = 3.14;
const getCircleArea = r => r * r * PI;
const getSquareArea = d => d * d;

// Common.js
// 전체 기능 내보내기
module.exports = {
  PI,
  getCircleArea,
  getSquareArea
};

// 개별적으로 기능 내보내기
// exports.PI = PI;
// exports.getCircleArea = getCircleArea;

// esm
// export default { PI, getCircleArea };
