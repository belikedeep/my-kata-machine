import linear_search from '../src/practice/LinearSearchList';

test('should return true if element is found', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    const result = linear_search(arr, target);
    expect(result).toBe(true);
});

test('should return false if element is not found', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 10;
    const result = linear_search(arr, target);
    expect(result).toBe(false);
});
