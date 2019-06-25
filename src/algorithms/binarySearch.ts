export function binarySearch<T>(arr: Array<T>, toFind: T) {
  if (arr.length === 0) return -1;

  const inner = (left = 0, right = arr.length - 1): number => {
    const segmentLength = right - left + 1;
    const mid = Math.floor((segmentLength - 1) / 2.0) + left;

    if (arr[mid] === toFind) return mid;

    if (right < 0 || left > arr.length - 1 || segmentLength <= 1) return -1;

    if (arr[mid] > toFind) {
      return segmentLength === 2 ? inner(left, mid - 1) : inner(left, mid);
    } else {
      return segmentLength === 2 ? inner(mid + 1, right) : inner(mid, right);
    }
  };

  return inner();
}
