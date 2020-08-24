function findMinAndRemoveSorted(arr) {
  return arr.shift() // helper function to remove minimum value of a sorted array
}

function merge(firstArr, secondArr) {
  let minValue
  let sortedArr = []
  // loop through both arrays until all values are inserted into sorted array
  while (firstArr.length > 0 && secondArr.length > 0) {
    if (firstArr[0] < secondArr[0]) {
      minValue = findMinAndRemoveSorted(firstArr)
    } else {
      minValue = findMinAndRemoveSorted(secondArr)
    }
    sortedArr.push(minValue)
  }

  return sortedArr.concat(firstArr).concat(secondArr) // merge sorted array with remaining values
}

function mergeSort(arr) {
  let midpoint = arr.length / 2
  let firstHalf = arr.slice(0, midpoint)
  let secondHalf = arr.slice(midpoint)

  if (arr.length < 2) {
    return arr // base case
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf)) // recursive call
  }
}
