import {fromFlatToTree} from "./from-flat-to-tree.js";
import {NFS_MW_CITY_DISTRICTS, NFS_MW_CITY_DISTRICTS_TREE} from "./mock-data.js";
import {fromTreeToFlat} from "./from-tree-to-flat.js";

describe("from flat to tree", () => {
  it('should return object that represents correct relation between instances of cities', () => {
    expect(fromFlatToTree(NFS_MW_CITY_DISTRICTS, NFS_MW_CITY_DISTRICTS[0])).toEqual(NFS_MW_CITY_DISTRICTS_TREE);
  });
  it('must return a positive boolean value', () => {
    expect(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0)).toBeTruthy();
  });
  it('fromTreeToFlat() not to be the same NFS_MW_CITY_DISTRICTS_TREE', () => {
    expect(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0)).not.toBe(NFS_MW_CITY_DISTRICTS_TREE);
  });
  it('here is a obj of cities', () => {
    expect(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0)).toBeDefined();
  });
  it('content contains string', () => {
    expect.stringContaining(JSON.stringify(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0)))
  })
});
