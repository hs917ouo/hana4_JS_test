// range 함수를 작성하세요.
const range = (start, end, step = start > end ? -1 : 1) => {
  if (end === undefined) {
    if (start === 0) return [0];
    if (start > 0) {
      end = start;
      start = 1;
    }
    if (start < 0) {
      end = -1;
    }
  }
  if ((start - end) * step > 0) return [];
  if (step === 0 || start === end) return [start];

  const count = Math.abs(Math.trunc((end - start) / step)) + 1;
  const ret = [start];
  for (let i = 1; i <= count - 1; i += 1) {
    ret.push(ret[ret.length - 1] + step);
  }
  const floatLen = (step - parseInt(step)).toString().length - 2;
  if (floatLen > 0) {
    ret.forEach((e, idx, array) => {
      array[idx] = parseFloat(e.toFixed(floatLen));
    });
  }
  return ret;
};
module.exports = { range };
