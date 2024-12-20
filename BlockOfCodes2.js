//Identify the Big-O Notation of the following Blocks of Codes 2
//Explanation below the Block of Codes

const products = [50, 20, 60, 15, 30];

const sortByPrice = (arr) => {
    return arr.sort((a, b) => a - b);
}

console.log(sortByPrice(products));
module.exports = { sortByPrice };

/*
    The Big-O Notation of the following Block of Codes is characterized by Time Complexity of O(n log n). It uses a sort
    method that sorts their numerical values in ascending order. The comparison to each value that being sort has a contribution
    to the time complexity. It ensure that even a larger datasets, the sorting operation remains efficient, demonstrating why
    the time complexity is classified as O(n log n).
*/