//Demonstrating the use of any type
// The any type allows for any kind of value, but it bypasses type safety.
let v: any = true;
v = "string"; 
Math.round(v);

console.log(v);

//Demonstrating the use of unknown type
// The unknown type is safer than any, as it requires type checking before use.
function handleInput(input: unknown) {
    if (typeof input === 'number') {
        console.log(input.toFixed(2));
    } else if (typeof input === 'string') {
        console.log(input.trim());
    } else {
        console.log("Unsupported type");
    }
}

handleInput(42.72737913179);
handleInput("  Hello, World!  ");