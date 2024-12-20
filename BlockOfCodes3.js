//Identify the Big-O Notation of the following Blocks of Codes 2
//Explanation below the Block of Codes

const users = ["Alice", "Bob", "Charlie", "Diane", "Eve"];

const getUserByID = (arr, index) => arr[index];

console.log(getUserByID(users, 2));
module.exports = { getUserByID };

/*
     The Big-O Notation of the following Block of Codes is characterized by Time Complexity of O(1).
It doesn't depend on the size of the array but on the list of users. The function has two parameters which 
is the array and index. Only a single operation can access the element to retrieve the value. It can works
the same with the larger array. This method can be a quick retrieval of data as essential.
*/