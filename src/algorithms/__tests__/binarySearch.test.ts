import { binarySearch } from '../binarySearch';

const testArray = [2, 3, 6, 8, 10];

test('existing entries', () => {
  expect(binarySearch(testArray, 2)).toBe(0);
  expect(binarySearch(testArray, 3)).toBe(1);
  expect(binarySearch(testArray, 6)).toBe(2);
  expect(binarySearch(testArray, 8)).toBe(3);
  expect(binarySearch(testArray, 10)).toBe(4);
});

test("entries that don't exist", () => {
  expect(binarySearch(testArray, 1)).toBe(-1);
  expect(binarySearch(testArray, 4)).toBe(-1);
  expect(binarySearch(testArray, 7)).toBe(-1);
  expect(binarySearch(testArray, 9)).toBe(-1);
  expect(binarySearch(testArray, 11)).toBe(-1);
});
