/**
 * Stacks are data structures that follow the 'Last In, First Out' (LIFO) principle.
 * The last elemement inserted into the stack is the first one to be removed.
 * A good analogy for stacks is a literal stack of plates: you add plates to the top
 * of the stack and, in order to remove plates from the bottom of the stack, you remove
 * plates from the top until you get to the desired plate to remove it.
 */


/**
 * Stacks are abstract data structures. They are defined by their behaviour rather than a mathematical model or how they're implemented.
 * In this example, I'll use a class to implement a stack.
 */
class Stack {
    constructor(items) {
        this.stack = [...items]; // This is where the items will be stored.
    }

    // Peep returns the items at the top of the stack
    peep() {
        let peep = this.stack[this.stack.length - 1];
        console.log(`${peep} is at the top of the stack`);
        return peep;
    }

    // Pushes an item to the top of the stack and returns the new stack length.
    push(item) {
        let push = this.stack.push(item);
        console.log(`Successfully pushed '${item}'. New Stack length: ${push}.'`);
        return result;
    }

    // Removes and returns the item at the top of the stack
    pop() {
        let pop = this.stack.pop();
        console.log(`Successfully popped '${pop}' from stack. New Stack length: ${this.stack.length}.'`);
        return result;
    }
}

const my_stack = new Stack([1, 42, 90, 23]);// Declare and initialize the stack

my_stack.peep();// Check what item is at the top of the stack. Output: 23

my_stack.push(1337);// Insert '1337' at the top of the stack and output the new stack length. Output: 5

my_stack.peep();// Check what item is at the top of the stack again. Output: 1337

my_stack.pop();// Remove 1337 from the top of the stack and return the new stack length. Output: 4.
