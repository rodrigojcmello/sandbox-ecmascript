describe('Recursion', () => {
  it('String to array', () => {
    const stringMock = '(1, 2, (3, 4, 5, (7, 8, 9)))';

    type RecursiveArray = (number | RecursiveArray)[];

    const stringToArray = (string: string): RecursiveArray => {
      let array: RecursiveArray = [];

      let indexLimit = string.indexOf('(');
      indexLimit = indexLimit === -1 ? string.length : indexLimit;

      for (let i = 0; i <= indexLimit; i += 1) {
        if (string[i] === '(') {
          const recursiveValue = stringToArray(string.slice(i + 1));

          if (i === 0) {
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

    expect(stringToArray(stringMock)).toEqual([1, 2, [3, 4, 5, [7, 8, 9]]]);
  });
});
