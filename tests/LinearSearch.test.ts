import { linearSearch } from '../src/algorithms/LinearSearch';

test('should return the correct index if element is found', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    const index = linearSearch(arr, target);
    expect(index).toBe(2);
});

test('should return -1 if element is not found', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 10;
    const index = linearSearch(arr, target);
    expect(index).toBe(-1);
});
