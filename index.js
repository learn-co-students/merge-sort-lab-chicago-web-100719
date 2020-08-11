function findMinAndRemoveSorted(arr) {
    return arr.shift()
}

function merge(arr1, arr2) {
    let sorted = [];
    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
            sorted.push(arr1.shift());
        } else {
            sorted.push(arr2.shift());
        }
    }
    return sorted.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
    let midpoint = arr.length / 2;
    let firstHalf = arr.slice(0, midpoint);
    let backHalf = arr.slice(midpoint);

    if (arr.length < 2) {
        return arr;
    } else {
        return merge(mergeSort(firstHalf), mergeSort(backHalf));
    }
}
