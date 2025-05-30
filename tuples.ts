// Demonstrating the use of tuples
// Tuples are fixed-length arrays with specific types for each element.
// They are useful for representing a fixed structure of data.
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push('Something new and wrong');
ourTuple.push(10);
console.log(ourTuple);
//There are readonly tuples, which are immutable and cannot be changed after creation.
const readonlyTuple: readonly [number, boolean, string] = [5, false, 'Coding God was here'];
// readonlyTuple.push('Something new and wrong'); // This will cause an error
console.log(readonlyTuple);

//Demonstrating the use of named tuples
// Named tuples allow you to give names to the elements of a tuple for better readability.
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(`The coordinates of the point are x: ${graph[0]}, y: ${graph[1]}`);

type Point = [x: number, y: number];

function logPoint(p: Point) {
  const [x, y] = p;
  console.log(`X: ${x}, Y: ${y}`);
}

const myPoint: Point = [10, 20];
logPoint(myPoint); // Output: X: 10, Y: 20
