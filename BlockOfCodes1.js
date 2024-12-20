//Identify the Big-O Notation of the following Blocks of Codes 1
//Explanation below the Block of Codes

const sortedInventory = [10, 20, 30, 40, 50, 60, 70];               
                                                                    
const binarySearch = (arr, target) => {                           
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return `Found ${target}`;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return `${target} not found`;
};

console.log(binarySearch(sortedInventory, 30));
module.exports = { binarySearch };


/*
    The Big-O Notation of the following Blocks of Codes is characterized by Time Complexity of O(log n). It is repeatedly 
and there is ability to split up to search through iteration, which is the left and right. A while loop was implemented
and as long as there is an element it continues to search. In the middle there is an index that tells if the target is found
and there is a comparison between left and right. The message will return upon matching the middle element and the target.
The left is moved to mid +1 and discarding the element on the left, if the middle element is less than the target, on the other
hand it is the vice versa of the right but it would moved to mid -1. This  method guarantees that with each step, the number of
possible candidates for the next searches is effectively cut in half, resulting in at most log base 2 of n steps needed for an
array of size n.
*/