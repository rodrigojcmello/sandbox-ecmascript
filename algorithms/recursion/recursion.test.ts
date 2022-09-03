describe('Recursion', () => {
  it('String to array', () => {
    const stringMock = '(1, 2, (3, 4, 5, (7, 8, 9)))';

    type RecursiveArray = (number | RecursiveArray)[];

    const stringToArray = (string: string): RecursiveArray => {
      let array: RecursiveArray = [];
      let control = false;

      for (let i = 0; i < string.length; i += 1) {
        if (!control) {
          if (string[i] === '(') {
            control = true;
            const stringRest = string.slice(i + 1);

            if (i === 0) {
              array = stringToArray(stringRest);
            } else {
              array.push(stringToArray(stringRest));
            }
          } else if (Number(string[i]) >= 0 && string[i] !== ' ') {
            array.push(Number(string[i]));
          }
        }
      }

      return array;
    };

    expect(stringToArray(stringMock)).toEqual([1, 2, [3, 4, 5, [7, 8, 9]]]);
  });
});
