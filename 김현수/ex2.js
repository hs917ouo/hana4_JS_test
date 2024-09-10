// range 함수를 작성하세요.
const range = (start, end, step = start > end ? -1 : 1) => {
  if (!end && s === 0) return [0];
  if (!end && s > 0) {
    end = start;
    start = 1;
  }
  if (!end && s < 0) {
    end = -1;
  }
  if (step === 0 || start === end) return [start];
};
module.exports = { range };
