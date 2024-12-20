//Identify the Big-O Notation of the following Blocks of Codes 4
//Explanation below the Block of Codes

const productList = ["Shoes", "Shirt", "Hat", "Bag"];

const findProductPairs = (products) => {
    const pairs = [];
    for (let i = 0; i < products.length; i++) {
        for (let j = i + 1; j < products.length; j++) {
            pairs.push(`${products[i]} and ${products[j]}`);
        }
    }
    return pairs;
};

console.log(findProductPairs(productList));
module.exports = { findProductPairs };

/*
    The Big-O Notation of the following Block of Codes is characterized by Time Complexity of O(n²).
This notation use two nested loops wherein the inner loops iterate the remaining products to form pairs, while 
outer loop iterate eacg product. Uses nested loops to populate a product name array and design a function that
generates every possible unique pair from the array. After choosing a product in the first loop, the second loop
chooses more goods to create a pair, which is then appended to the pairs array. The resulting list of pairs is
returned and can be logged or exported for further use. It helps in evaluating algorithm performance and choosing
appropriate methods based on specific use cases.
*/