function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  
    const len = arr.length;
  
    for (let i = 0; i < len; i++) {
      let lowest = i;
  
      for (let j = i + 1; j < len; j++) {
        if (arr[lowest] > arr[j]) {
          lowest = j;
        }
      }
  
      if (i !== lowest) {
        swap(arr, i, lowest);
      }
    }
  
    return arr;
}
  

module.exports = selectionSort;