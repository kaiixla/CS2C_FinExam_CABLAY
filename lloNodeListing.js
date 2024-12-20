//Constructor that set value as received parameter
class Node {
    constructor(value) {
        this.value = value; // It sets the node's valuw
        this.next = null;   // Next node directed as a null
    }
}

// Define the LinkedList class
class LinkedList {
    constructor() {
        this.head = null;   // Initialize head as null
        this.size = 0;      // Initialize size as 0
    }

    // Create a append function inside the Linkedlist
    append(value) {
        const newNode = new Node(value); // Create a new node

        if (!this.head) { //Set the head to new node if the list is empty
            this.head = newNode;
        } else {
            let current = this.head; // Start at the head
            while (current.next) {    // Traverse to the end of the list
                current = current.next;
            }
            current.next = newNode;   // At the end it links tthe new node
        }

        this.size++;                  // Increment size of the list
        this.print();                 // Print the current situation of the list
    }

    // It print the linkedlist
    print() {
        let current = this.head;      // Start at the head
        let result = [];              // It hold values to print

        while (current) {             // Traverse through the list
            result.push(current.value); // Push method to add value to the result
            current = current.next;     // It move to the next node
        }

        console.log("Linked List:", result.join(" -> ")); // Displays the output
    }
}

//Instance of linkedlist
const linkedList = new LinkedList();

// Items that append to the linkedlist
linkedList.append("Data Structures - Array");
linkedList.append("Variable Type - Integer");
linkedList.append("Sorting Algorithm - Bubble Sort");
