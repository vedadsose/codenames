import getRandomInt from './getRandomInt'

export default (words, n) => {
  let rnd;
  const results = [];
  while (results.length < n) {
    rnd = getRandomInt(0, words.length);
    if (results.indexOf(words[rnd]) === -1) {
      results.push(words[rnd]);
    }
  }
  return results;
}
