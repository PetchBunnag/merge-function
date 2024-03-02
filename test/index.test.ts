import { merge } from '../src/index';

describe('merge function', () => {
    it('should merge three sorted arrays', () => {
        const collection1 = [1, 3, 5, 7];
        const collection2 = [10, 8, 6, 4, 2];
        const collection3 = [0, 2, 4, 6, 8, 10];

        const merged = merge(collection1, collection2, collection3);
        expect(merged).toEqual([0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 10, 10]);
    });

    it('should handle empty arrays', () => {
        const collection1: number[] = [];
        const collection2: number[] = [];
        const collection3: number[] = [];

        const merged = merge(collection1, collection2, collection3);
        expect(merged).toEqual([]);
    });

    it('should handle arrays of different lengths', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [10, 8];
        const collection3 = [0, 2, 4, 6, 8, 10];

        const merged = merge(collection1, collection2, collection3);
        expect(merged).toEqual([0, 1, 2, 3, 4, 5, 6, 8, 8, 10, 10]);
    });
});