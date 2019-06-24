export function binarySearch<T>(arr: Array<T>, toFind: T) {
  if (arr.length === 0) return -1;

  const inner = (left = 0, right = arr.length - 1, offset = 0): number => {
    console.log(left, right, offset);

    if (left === Infinity || right === Infinity) return -1;
    if (left === right) return -1;

    const mid = (((right - left) / 2) >>> 0) + offset;

    if (arr[mid] === toFind) return mid;

    if (arr[mid] > toFind) return inner(left, mid);
    else return inner(mid, right, left + offset);
  };

  return inner();
}

console.log(binarySearch([2, 3, 6, 8, 10], 3), 1);
console.log(binarySearch([2, 3, 6, 8, 10], 6), 2);
console.log(binarySearch([2, 3, 6, 8, 10], 8), 3);
console.log(binarySearch([2, 3, 6, 8, 10], 10), 4);
