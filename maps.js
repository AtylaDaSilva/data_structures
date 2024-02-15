/**
 * Maps are a collection of key-value pairs that can hold any type of data.
 * Unlike Sets, Maps can hold repeated values, but the keys MUST be unique.
 * Also unlike Sets, Maps remember the insertion order of values.
 * Maps are iterable and can be looped with for, while, for...of loops and the forEach method.
 */

// Use the 'Map' constructor along with the 'new' keyword to declare new maps.
let my_map = new Map();

// Use the 'set' method to add items to the Map.
my_map.set("key1", "value1");
my_map.set("key2", "value2");
my_map.set("key3", "value3");

my_map.set("key1", 42); // Values inserted into existing keys will replace the existing value.

// Iterate using loops
for (const [key, value] of my_map) {
    console.log(`${key} => ${value}`);
    //key1 => value1
    //key2 => value2
    //key3 => value3
}

console.log("===================================");

//Similar to Sets, delete items with the 'delete' method
my_map.delete("key2");

my_map.forEach((value, key) => {
    console.log(`${key} => ${value}`);
    //key1 => 42
    //key3 => value3
});

console.log("===================================");

//Unlike Sets, Map keys are not limited to strings or symbols.
const key = { name: "Super cool key", description: "Lorem ipsum..." };

my_map.set(key, "Super cool value");

console.log(my_map.get(key)); // Access values with the 'get' method.