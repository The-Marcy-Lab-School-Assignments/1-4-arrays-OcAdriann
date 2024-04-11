const uppercaseAll = (...words) => {
  newArr = []
  for (let i = 0; i < words.length; i++) {
    newArr.push(words[i].toUpperCase())
  }
  return newArr
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
