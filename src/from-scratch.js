const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    arr.unshift(value)
  } else {
    arr.push(value)
  }
};

const reverseString = (str) => {
  return str.split('').reverse().join('')
};

const newArrayFullOf = (value, numOfValue) => {
  let arr = []
  for (let i = 0; i < numOfValue; i++) {
    arr.push(value)
  }
  return arr
};

const insertIntoMiddle = (arr, value) => {
  let middleOfArr = Math.floor(arr.length / 2)
  arr.splice(middleOfArr, 0, value)
};

const deleteFromMiddle = (arr) => {
  let middleOfArr = Math.floor(arr.length / 2)
  arr.splice(middleOfArr, 1)
};

const isRightIndex = (arr, value, index) => {
  if (value === arr[index]) {
    return true
  } else {
    return false
  }
};

const roundAllNumsDown = (arr) => {
  return arr.map((x) => Math.floor(x))
};

const getAllYCoordinates = (arrOfCoords) => {
  let newArr = []
  for (let i = 0; i < arrOfCoords.length; i++) {
    newArr.push(arrOfCoords[i][1])
  }
  return newArr
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
