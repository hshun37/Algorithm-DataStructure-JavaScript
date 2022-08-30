function Selection(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minValueIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) {
        minValueIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minValueIndex];
    arr[minValueIndex] = temp;
  }
}

let arr = [1, 4, 2, 3];

Selection(arr);

console.log(arr);
