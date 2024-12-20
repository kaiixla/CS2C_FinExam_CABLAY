// Empty array for the grocery items
let groceryStack = [];

// Peek function to check the current stack's size empty or not
function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
        return null;
    } else {
        console.log("Top item:", groceryStack[groceryStack.length - 1]);
        return groceryStack[groceryStack.length - 1];
    }
}

// Push function to add the item to the stack
function push(item) {
    groceryStack.push(item); //Add item to put to the top of the stack
    console.log(`New item added: ${item}`);
    peek(); //It checks the top item of the stack
    printStack(); //It prints the situation of the stack after pushing an item
}

// Pop functiin to remove the last item of the stack
function pop() {
    if (groceryStack.length === 0) {
        console.log("You can't pop. The stack empty.");
    } else {
        const removedItem = groceryStack.pop(); // Remove item from the top of the stack
        console.log(`New item removed: ${removedItem}`);
        peek(); // It checks the top item after removing the recent top of the stack
        printStack(); //It prints the situation of the stack after popping an item
    }
}

// function that prints the situation of the stack after pushing or popping
function printStack() {
    console.log("The grocery stack at the moment", groceryStack);
}

// Function where user input the grocery items
function main() {
    for (let i = 0; i < 5; i++) {
        let item = prompt("Enter an item");
        push(item); // Use to push the items that the user entered
    }

    // Example of popping an item from the stack
   pop(); // This can remove the last item that you added
   console.log("The last item you entered just removed.")
}

// Start the program
main();
