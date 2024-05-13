const array = ["John", "Bob", "Alice", "Mary"];

const sortedArray = array.sort(); // [ 'Alice', 'Bob', 'John', 'Mary' ]

const array2 = [5, 2, 1, 3, 4];

const sortedArray2 = array2.sort(); // [ 1, 2, 3, 4, 5 ]

const array3 = [10, 2, 5, 1, 9];

const sortedArray3 = array3.sort((a, b) => a - b); // [ 1, 2, 5, 9, 10 ]

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 3, name: "alex",     age: 22 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

const customComparator = function (arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.sort((a, b) => {
    if (a.name === b.name) {
      return a.age < b.age ? -1 : 1
    };
    if (a.name < b.name) {
      return -1
    }
  });
};


console.log(customComparator(students));