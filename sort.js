function getIndexToIns(arr, num) {

  arr.sort((a, b) => a - b);
// here the array is sorted from the lowest to the largest using the .sort(callbackFunction).
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}
//and thn we run a for loop throught the array to compare items in the array starting from the smallest one. 
//When an item on the array is greater than the number we are comparing against, then we return the index.

getIndexToIns([40, 60], 50);
