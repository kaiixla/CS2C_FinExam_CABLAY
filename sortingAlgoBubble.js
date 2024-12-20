//Empty array for the numbers
let array = [];

// How many numbers to collect
let numberOfUser = 10;

function bblSort(array) {

    for (var i = 0; i < array.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (array.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (array[j] > array[j + 1]) {

                // If the condition is true
                // then swap them
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }

    // Print the sorted array
    console.log(array);
}

//Use loop to collect number that the user entered
for (let i = 0; i < numberOfUser; i++) {
    let arr = prompt("Enter number:");

    array.push(Number(arr));
}

// Now pass this array to the bblSort() function
bblSort(array);