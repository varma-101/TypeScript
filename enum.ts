// This code defines an object with specific properties and types.
// Demonstrating the use of objects with specific types
// Values incrementing from a specific number
enum directions{
    north=1,
    south,
    east,
    west
};

console.log(directions.north); // Output: 1
console.log(directions.south); // Output: 2 
console.log(directions.east);  // Output: 3
console.log(directions.west);  // Output: 4

enum statusCodes {
    ok=200,
    notFound=404,
    internalServerError=500,
    badRequest=400
}

console.log(statusCodes.ok); // Output: 200
console.log(statusCodes.notFound); // Output: 404