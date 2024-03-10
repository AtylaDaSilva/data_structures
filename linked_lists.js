/**
 * Linked lists is a data structure in which one or more nodes are connected to each other through pointers.
 * Each node in a linked list is represented by a value and a reference to the next node in the list.
 * Unlike other data structures, values in a linked list are not stored contiguously to each other, rather, they
 * are stored in different locations in memory
 */

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Linked_List {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    getLength() {
        return this.length;
    }

    
}


const list = new Linked_List();

console.log(`List length: ${list.getLength()}`);
console.log(`List is empty? ${list.isEmpty()}`);