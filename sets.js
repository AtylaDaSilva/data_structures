/**
 * Sets are data structures that can hold a collection of UNIQUE values.
 * Sets can store a mix of different data types.
 * Sets are dynamically sized and do not maintain insertion order.
 * Like arrays and Maps, sets are iterables and can be looped with for, while or for ... of loops.
 */

// To declare a set, use the constructor preceded by the 'new' keyword.
let my_set = new Set();

// To add item to the set, use the 'add' method
my_set.add("banana");
my_set.add("apple");
my_set.add("grape");

// Duplicate items will be ignored
my_set.add("banana"); // Will not be added.

my_set.add("Banana"); // Added!

/**
 * Sets use the 'SameValueZero' algorithm to check for duplicities, which means that all values are concidered equal according to the 
 * semantics of the '===' operation, the exception being the value 'NaN' whereas, in this case, NaN === NaN.
 */

// Iterate with for, while, or for...of loops or with the 'forEach' method

for (const item of my_set) {
    console.log(item);
    //banana
    //apple
    //grape
}

console.log("==============================================");

// Delete set items with the 'delete' method.
my_set.delete("grape"); // Begone, grape!

my_set.forEach(item => {
    console.log(item);
    //banana
    //apple
    //Banana
})

console.log("==============================================");

// Check if a certain item is contained withing a set using the 'has' method.
console.log(my_set.has("grape")); // false
console.log(my_set.has("banana")); // true