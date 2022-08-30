let arr = [4, 1, 5, 3, 6, 2];

function Insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    let valueData = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > valueData) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }

    arr[j + 1] = valueData;
  }
}

console.log(arr);

Insert(arr);
console.log(arr);
