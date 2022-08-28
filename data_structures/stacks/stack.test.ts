import Stack, { Item } from './Stack';

const mock: Item[] = [
  {
    propertyId: 4,
    userId: 0,
    appointmentDate: new Date(2022, 7, 26, 23),
    createdAt: new Date(2022, 7, 27, 23),
    status: 'pending',
  },
  {
    propertyId: 4,
    userId: 1,
    appointmentDate: new Date(2022, 7, 26, 10),
    createdAt: new Date(2022, 7, 27, 23),
    status: 'pending',
  },
  {
    propertyId: 4,
    userId: 2,
    appointmentDate: new Date(2022, 7, 26, 15),
    createdAt: new Date(2022, 7, 27, 23),
    status: 'pending',
  },
  {
    propertyId: 4,
    userId: 3,
    appointmentDate: new Date(2022, 7, 26, 17),
    createdAt: new Date(2022, 7, 27, 23),
    status: 'pending',
  },
  {
    propertyId: 4,
    userId: 4,
    appointmentDate: new Date(2022, 7, 26, 16, 30),
    createdAt: new Date(2022, 7, 27, 23),
    status: 'pending',
  },
];

describe('Stacks', () => {
  it('Empty - check if stack is empty', () => {
    const stack = new Stack();

    expect(stack.print()).toHaveLength(0);
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('Push - add new value to the end', () => {
    const stack = new Stack();

    stack.add(mock[0]);
    stack.add(mock[1]);
    stack.add(mock[2]);

    expect(stack.print()).toHaveLength(3);
    expect(stack.print()).toEqual([mock[0], mock[1], mock[2]]);
  });

  it('Unshift - add new value to the beginning', () => {
    const stack = new Stack();

    stack.add(mock[0]);
    stack.add(mock[1]);
    stack.add(mock[2]);
    stack.add(mock[3], false);

    expect(stack.print()).toHaveLength(4);
    expect(stack.print()).toEqual([mock[3], mock[0], mock[1], mock[2]]);
  });

  it('Pop - remove the last value', () => {
    const stack = new Stack();

    stack.add(mock[0]);
    stack.add(mock[1]);
    stack.add(mock[2]);
    stack.remove();

    expect(stack.print()).toHaveLength(2);
    expect(stack.print()).toEqual([mock[0], mock[1]]);
  });

  it('Shift - remove the first value', () => {
    const stack = new Stack();

    stack.add(mock[0]);
    stack.add(mock[1]);
    stack.add(mock[2]);
    stack.remove(false);

    expect(stack.print()).toHaveLength(2);
    expect(stack.print()).toEqual([mock[1], mock[2]]);
  });

  it('Remove - remove by userId', () => {
    const stack = new Stack();

    stack.add(mock[0]);
    stack.add(mock[1]);
    stack.add(mock[2]);
    stack.add(mock[3]);
    stack.removeByUserId(2);

    expect(stack.print()).toHaveLength(3);
    expect(stack.print()).toEqual([mock[0], mock[1], mock[3]]);
  });

  it('Peek - return the last value added', () => {
    const stack = new Stack();

    stack.add(mock[0]);
    stack.add(mock[1]);
    stack.add(mock[2]);

    expect(stack.print()).toHaveLength(3);
    expect(stack.peek()).toEqual(mock[2]);
  });

  it('Size - return stack size', () => {
    const stack = new Stack();

    stack.add(mock[0]);
    stack.add(mock[1]);
    stack.add(mock[2]);

    expect(stack.print()).toHaveLength(3);
    expect(stack.size()).toEqual(3);
  });

  it('Validation - check id and date', () => {
    const stack = new Stack();

    stack.add(mock[0]);
    stack.add(mock[3]);
    stack.add(mock[2]);
    const unavailable = stack.add(mock[4]);
    stack.add(mock[1]);

    expect(stack.print()).toHaveLength(4);
    expect(stack.print()).toEqual([mock[0], mock[3], mock[2], mock[1]]);
    expect(unavailable).toBeFalsy();
  });

  it('Update - change status', () => {
    const stack = new Stack();

    stack.add(mock[0]);
    stack.add(mock[1]);
    stack.add(mock[2]);
    stack.add(mock[3]);
    stack.update(2, 'approved');

    expect(stack.print()).toHaveLength(4);
    expect(stack.print()).toEqual([mock[0], mock[1], mock[2], mock[3]]);
    expect(stack.print()[2].status).toEqual('approved');
  });
});
