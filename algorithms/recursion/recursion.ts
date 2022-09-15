type RecursiveArray = (number | RecursiveArray)[];

function nextArray(string: string): string | null {
  const start = string.indexOf('(');
  const end = string.indexOf(')');

  if (start === -1 || end === -1) {
    return null;
  }
  return string.slice(start + 1, end);
}

// eslint-disable-next-line import/prefer-default-export
export const stringToArray = (string: string): RecursiveArray => {
  const array: RecursiveArray = [];

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') {
      const start = i + 1;
      const end = string.lastIndexOf(')');

      const slice = string.slice(start, end);

      if (slice[0] !== '(') {
        for (let j = 0; j < slice.length; j += 1) {
          if (slice[j]?.match(/\d+/g)) {
            array.push(Number(slice[i]));
          } else if (slice[j] === '(') {
            const sliceEnd = slice.lastIndexOf(')') + 1;
            const newSlice = slice.slice(j, sliceEnd);
            array.push(stringToArray(newSlice));
            j = sliceEnd;
          }
        }
      } else {
        const recursiveValue = stringToArray(slice);
        array.push(recursiveValue);
      }

      i = end;
    }
    // else if (string[i]?.match(/\d+/g)) {
    //   array.push(Number(string[i]));
    // }
  }

  return array;
};
