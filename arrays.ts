//Demonstrationg the use of arrays in TypeScript
// Arrays in TypeScript can be defined with specific types for their elements.  
// This ensures type safety and helps catch errors at compile time.
const str: string[] = [];
str.push("Dylan");

//Demonstrating the use of readonly arrays
//Readonly arrays are immutable, meaning you cannot change their contents after creation.
// This is useful for ensuring that certain data structures remain unchanged.
const names: readonly string[] = ["Dylan"];
function greet(name: string) {
    console.log(`Hello, ${name}!`);
}
names.forEach(greet);