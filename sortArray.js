// Prompts that ask the numbers and names 
let numbersInput = prompt("Enter numbers"); //24, 65, 21, 5, 9, 32, 42, 80, 57
let namesInput = prompt("Enter names"); //Zenvo, Erica, Jordie, Alicia, Redon

// Convert the numbers and names into arrays using .split()
let numbers = numbersInput.split(',').map(Number);
let names = namesInput.split(',');

// Using concat merge the 2 arrays
const mergedArray = numbers.concat(names);

//Sort and reverse the numbers
numbers.sort(function(a, b){return a-b}).reverse();

// Function to sort and reverse an array
function sortNames(arr) {
    return arr.sort(); // Sort and then reverse the array
}

// Display the merged array
console.log("Merged Array:", mergedArray);

// Display the sorted and reversed numbers
console.log("Sorted and reversed numbers:", numbers);

// Display the sorted names
console.log("Sorted names:", sortNames(names));