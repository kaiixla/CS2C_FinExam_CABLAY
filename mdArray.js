// Empty multi-dimensional array
let userArray = [];

// Names and age to collect
let numberOfUser = 4;

//Use loop to collect the name and age the user entered
for (let i = 0; i < numberOfUser; i++) {
    let name = prompt("Enter name:");
    let age = prompt("Enter age:");
    
    // A sub-array for the value of the user entered
    let userInfo = [name, age];
    
    // Push the sub-array into the main array
    userArray.push(userInfo);
}

// Display the Multi-Dimensional array
console.log("Multi-Dimensional Array:", userArray);