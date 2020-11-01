//1

const concat = (str1: string, str2: string): string => `${str1}${str2}`;

concat('Hello ', 'World')

//2

interface Data {
    howIDoIt: string,
    sameArray: Array<string | number>
}

interface Task extends Data {
    withData: Array<Data>
}

const MyHomeTask: Task = {
    howIDoIt: "I Do It Wel",
    sameArray: ["string one", "string two", 42],
    withData: [{howIDoIt: "I Do It Wel", sameArray: ["string one", 23]}],
}

//3

interface MyArray<T> {
    [N: number]: T;
    reduce(fn: (total: T, currentValue: T, currentIndex: T, arr: Array<T>) => T): T;
}

const newArr: MyArray<number> = [1, 2, 3, 4]

newArr.reduce((total, currentValue) => total + currentValue)