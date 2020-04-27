const logInput = input => `입력 받은 값 : ${input}`;
const logResult = (figure, result) => `${figure}의 넓이는 ${result}입니다.`;
const logFigureError = `지원되지 않는 도형입니다.`;

module.exports = {
  logInput,
  logResult,
  logFigureError
};
