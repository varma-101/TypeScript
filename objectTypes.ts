// This code defines an object with specific properties and types.
// Demonstrating the use of objects with specific types 
// Objects are collections of key-value pairs where keys are strings and values can be of any type.
const cars: {type: string,model: string,cost: number}={
    type: 'Sedan',
    model: 'Toyota Camry',
    cost: 30000
};

console.log(cars);

// Demonstrating the use of objects with optional properties
// Optional properties can be defined using the '?' symbol.
const person: {name: string, age?: number} = {
    name: 'John Doe',
    // age is optional
};

console.log(person);

//index signature
// An index signature allows you to define an object with dynamic keys.

const nameAge:{[name : string]:number}={};
nameAge.hafiza= 20;
nameAge.varma=21;

console.log(nameAge);