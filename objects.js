/**
 * In javascript, objects are a collection of key-value pairs; the key must either be a string or a symbol data type whereas the value can be of any data type, including other objects.
 */

let an_object = {}; // Literal syntax

let another_object = Object(); // Constructor

// Valid keys and values

let obj1 = {
    "key1": "value1",
    key2: 2,
    key3: { "key4": [1, 2, 3] }
}

console.log(obj1);

/**
 * To access data in an oject, use 'dot notation' or 'bracket notation'.
 */

console.log(obj1.key3); // Dot notation: object name, followed by a dot '.', followed by the key name.

console.log(obj1["key1"]); // Bracket notation: object name followed by an opening bracket, followed by the key name (in quotes), and ended by a closing bracket.

/**
 * Unlike arrays, objects are NOT iterables.
 */

for (const [key, val] of obj1) {
    console.log(`${key} => ${val}`); // Output: TypeError: obj1 is not iterable
}
