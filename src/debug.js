/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  while (arr.length > 0) {
    arr.pop()
  }
};

const getFirstItem = (array) => {
  let newArr = [];
  newArr.push(array[0])
  return newArr[0]
};

module.exports = {
  clearArr,
  getFirstItem,
};
