import getRandomInt from './getRandomInt'

export default (words) => {
  const replaced = [];
  const newArray = words.slice(0);
  for (let i = 0; i < words.length; i += 1) {
    let newIndex;

    do {
      newIndex = getRandomInt(0, words.length - 1);
    } while (replaced.indexOf(newIndex) >= 0);

    replaced.push(newIndex);
    newArray[newIndex] = words[i];
  }

  return newArray;
}
