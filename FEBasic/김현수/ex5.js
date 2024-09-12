const con2exp = new Map([
  ["ㄱ", "[ㄱ가-깋]"],
  ["ㄴ", "[ㄴ나-닣]"],
  ["ㄷ", "[ㄷ다-딯]"],
  ["ㄹ", "[ㄹ라-맇]"],
  ["ㅁ", "[ㅁ마-밓]"],
  ["ㅂ", "[ㅂ바-빟]"],
  ["ㅅ", "[ㅅ사-싷]"],
  ["ㅇ", "[ㅇ아-잏]"],
  ["ㅈ", "[ㅈ자-짛]"],
  ["ㅊ", "[ㅊ차-칳]"],
  ["ㅋ", "[ㅋ카-킿]"],
  ["ㅌ", "[ㅌ타-팋]"],
  ["ㅍ", "[ㅍ파-핗]"],
  ["ㅎ", "[ㅎ하-힣]"],
]);
const txt2exp = (txt) =>
  txt
    .split("")
    .reduce((s, i) => (con2exp.has(i) ? (s += con2exp.get(i)) : (s += i)), "");

const searchByKoreanInitialSound = (data, firstSounds) =>
  data.filter((str) => {
    if (str.search(txt2exp(firstSounds)) !== -1) return str;
  });

module.exports = { searchByKoreanInitialSound };
