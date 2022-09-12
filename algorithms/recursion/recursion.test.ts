describe('Recursion', () => {
  it('String to array', () => {
    const stringMock = '(1)';
    const stringMock2 = '((1, 2))';

    type RecursiveArray = (number | RecursiveArray)[];

    const stringToArray = (string: string): RecursiveArray => {
      let array: RecursiveArray = [];

      let indexLimit = string.indexOf('(');
      indexLimit = indexLimit === -1 ? string.length : indexLimit;

      for (let i = 0; i <= indexLimit; i += 1) {
        if (string[i] === '(') {
          const start = i + 1;
          const end = string.lastIndexOf(')');
          const slice = string.slice(start, end);
          const recursiveValue = stringToArray(slice);

          if (slice[0] !== '(') {
            array = recursiveValue;
          } else {
            array.push(recursiveValue);
          }
        } else if (string[i]?.match(/\d+/g)) {
          array.push(Number(string[i]));
        }
      }

      return array;
    };

    expect(stringToArray(stringMock)).toEqual([1]);
    expect(stringToArray(stringMock2)).toEqual([[1, 2]]);
  });
});
