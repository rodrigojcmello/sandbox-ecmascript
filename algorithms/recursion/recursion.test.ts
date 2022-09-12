import { stringToArray } from './recursion';

describe('Recursion', () => {
  it('String to array (1)', () => {
    expect(stringToArray('(1)')).toEqual([1]);
  });

  it('String to array ((1))', () => {
    expect(stringToArray('((1))')).toEqual([[1]]);
  });

  it('String to array (((1)))', () => {
    expect(stringToArray('(((1)))')).toEqual([[[1]]]);
  });

  it('String to array (1, (2))', () => {
    expect(stringToArray('(1, (2))')).toEqual([1, [2]]);
  });

  it('String to array ((1, (2)))', () => {
    expect(stringToArray('((1, (2)))')).toEqual([[1, [2]]]);
  });

  it('String to array (1, (2, (3), 4), 5)', () => {
    expect(stringToArray('(1, (2, (3), 4), 5)')).toEqual([1, [2, [3], 4], 5]);
  });

  it('String to array ((1), (((2), 3), ((4, (5)), 6), (7, 8)), 9)', () => {
    expect(stringToArray('((1, 2), 3, 4)')).toEqual([[1, 2], 3, 4]);
  });

  it('String to array ((1), (((2), 3), ((4, (5)), 6), (7, 8)), 9)', () => {
    expect(stringToArray('((1, 2, 3, 4, 5, 6, 7, (8, 9)))')).toEqual([
      [1, 2, 3, 4, 5, 6, 7, [8, 9]],
    ]);
  });
});
