type RecursiveArray = (number | RecursiveArray)[];

// eslint-disable-next-line import/prefer-default-export
export const stringToArray = (string: string): RecursiveArray => {
  let array: RecursiveArray = [];

  for (let i = 0; i <= string.length; i += 1) {
    if (string[i] === '(') {
      let start = i + 1;
      let end = string.lastIndexOf(')');
      if (string.indexOf('(') > 0) {
        start -= 1;
        end += 2;
      }
      const slice = string.slice(start, end);
      const recursiveValue = stringToArray(slice);
      i += end - start;

      if (slice[0] === '(') {
        array.push(recursiveValue);
      } else {
        array = recursiveValue;
      }
    } else if (string[i]?.match(/\d+/g)) {
      array.push(Number(string[i]));
    }
  }

  return array;
};
