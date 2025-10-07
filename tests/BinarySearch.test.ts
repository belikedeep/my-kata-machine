import binary_search from '../src/practice/BinarySearchList';

test('should return true if element is found', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    const result = binary_search(arr, target);
    expect(result).toBe(true);
});

test('should return false if element is not found', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 10;
    const result = binary_search(arr, target);
    expect(result).toBe(false);
});

test('should return false for an empty array', () => {
    const arr: number[] = [];
    const target = 10;
    const result = binary_search(arr, target);
    expect(result).toBe(false);
});

test('should return true for the first element', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 1;
    const result = binary_search(arr, target);
    expect(result).toBe(true);
});

test('should return true for the last element', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 5;
    const result = binary_search(arr, target);
    expect(result).toBe(true);
});
