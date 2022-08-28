export interface Item {
  propertyId: number;
  userId: number;
  appointmentDate: Date;
  createdAt: Date;
  status: 'pending' | 'approved' | 'rejected';
}

export default class Stack {
  private readonly stack: Item[];

  constructor() {
    this.stack = [];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  checkAvailability(value: Item): boolean {
    const hour = 60 * 60 * 1000;

    return (
      this.stack.filter((item) => {
        const isSomeProperty = item.propertyId === value.propertyId;

        const isSomePeriod =
          item.appointmentDate.getTime() + hour <=
            value.appointmentDate.getTime() ||
          item.appointmentDate.getTime() - hour >=
            value.appointmentDate.getTime();

        return !(isSomeProperty && isSomePeriod);
      }).length === 0
    );
  }

  add(value: Item, end = true): boolean {
    if (this.checkAvailability(value)) {
      this.stack[end ? 'push' : 'unshift'](value);
      return true;
    }
    return false;
  }

  remove(end = true): void {
    this.stack[end ? 'pop' : 'shift']();
  }

  removeByUserId(userId: number): void {
    const index = this.stack.findIndex((item) => item.userId === userId);
    this.stack.splice(index, 1);
  }

  peek(): Item | undefined {
    return this.stack.at(-1);
  }

  size(): number {
    return this.stack.length;
  }

  print(): Item[] {
    return this.stack;
  }
}
