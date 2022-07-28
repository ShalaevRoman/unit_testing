import {fromTreeToFlat} from "./from-tree-to-flat.js";
import {NFS_MW_CITY_DISTRICTS, NFS_MW_CITY_DISTRICTS_TREE} from "./mock-data.js";

describe("from tree to flat  ", () => {
    it('should return an array that has one level nesting', () => {
        expect(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0)).toEqual(NFS_MW_CITY_DISTRICTS);
    });
    it('must return a positive boolean value', () => {
        expect(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0)).toBeTruthy();
    });
    it('array length should be 17', () => {
        expect(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0)).toHaveLength(18);
    })
    it('here is a new array of cities', () => {
        expect(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0)).toBeDefined();
    });
    it('the resulting array must be identical to the given one', () => {
        expect(NFS_MW_CITY_DISTRICTS).toEqual(expect.arrayContaining(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0)))
    })
});