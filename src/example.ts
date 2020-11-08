// 1

const concat = (str1: string, str2: string): string => `${str1}${str2}`;

concat('Hello ', 'World');

// 2

interface Data {
  howIDoIt: string;
  sameArray: Array<string | number>;
}

interface Task extends Data {
  withData: Array<Data>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MyHomeTask: Task = {
  howIDoIt: 'I Do It Wel',
  sameArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', sameArray: ['string one', 23] }],
};

// 3

interface MyArray<T> {
  [N: number]: T;
  reduce<U>(fn: (total: U, currentValue: T, currentIndex: number, arr: MyArray<T>) => U, init: U): U;
}

const newArr: MyArray<number> = [1, 2, 3, 4];

newArr.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);
