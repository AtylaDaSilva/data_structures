/**
 * Arrays can contain a multitude of values of different types.
 * In JS, arrays are resizable and you do not have to declare their size.
 * In most languages (including JS), arrays are 0-indexed. The first element is located at index 0 and the last is located at index array_length - 1.
 * Arrays are iterables and can be looped with a for, while, and for ... of (JS only) loops as well as Array.prototype.forEach (JS only).
 */

const array = []; // Literal notation

const construc = Array(); // Array constructor

const same_as_construc = new Array(); // Including a 'new' operator makes no difference; both create a new instance of an array.

/**
 * When using the Array() constructor, you can pass 1 or more arguments:
 */

const arr_with_length = Array(1) // 1 argument = array length. NOTE: this argument has to be of type NUMBER.

const arr_with_one_value = Array("1"); // If the first argument is of any type other than NUMBER, it will be treated as a value instead of length

const arr_with_values = Array(1, 2, 3, 4, 5, 6); // > 1 arguments = array values.


/**
 * Array Time Complexity
 */

