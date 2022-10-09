type RecursiveArray = (number | RecursiveArray)[];

function nextArray(string: string): string {
  const end = string.lastIndexOf(')');

  return string.slice(1, end);
}

// eslint-disable-next-line import/prefer-default-export
export const stringToArray = (string: string, first = true): RecursiveArray => {
  const array: RecursiveArray = [];

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') {
      const slice = nextArray(string);
      const recursiveValue = stringToArray(slice, false);

      array.push(recursiveValue);

      i += slice.length + 1;
    } else if (string[i]?.match(/\d+/g)) {
      array.push(Number(string[i]));
    }
  }

  return (first ? array[0] : array) as RecursiveArray;
};
