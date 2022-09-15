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

  it('String to array ((1, 2), 3)', () => {
    expect(stringToArray('((1, 2), 3)')).toEqual([[1, 2], 3]);
  });
});
