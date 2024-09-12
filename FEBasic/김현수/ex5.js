const con2Exp = new Map([
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
  ["ㄲ", "[ㄲ까-낗]"],
  ["ㄸ", "[ㄸ따-띻]"],
  ["ㅃ", "[ㅃ빠-삫]"],
  ["ㅆ", "[ㅆ싸-앃]"],
  ["ㅉ", "[ㅉ짜-찧]"],
]);
const txt2Exp = (txt) =>
  txt
    .split("")
    .reduce((s, i) => (con2Exp.has(i) ? (s += con2Exp.get(i)) : (s += i)), "");

const searchByKoreanInitialSound = (data, firstSounds) =>
  data.filter((str) => {
    if (str.search(txt2Exp(firstSounds)) !== -1) return str;
  });

module.exports = { searchByKoreanInitialSound };
