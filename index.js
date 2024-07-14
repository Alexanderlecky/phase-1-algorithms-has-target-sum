function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();

  for (const number of array) {
    const complement = target - number;

    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n)
  space complexity: O(n)
*/

/* 
  Add your pseudocode here
  1. Initailize an empty set called seenNumbers.
  2.Iterate through each number in the array.
  3.For each number , calcute the complement by subtracting the number from the target.
  4. Check if the completes exists in seenNumbers.
    -If it does,return true.
    -If it doesn't add the number to seenNumbers.
  5.If the loop completes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
  The function `hasTargetSum` aims to determine if there are any two numbers in the input array that add up to the target number.
  To achieve this, we use a set to keep track of the numbers we've seen so far.
  For each number in the array, we compute the complement (i.e., the difference between the target and the current number).
  If this complement is already in our set, it means we have previously encountered a number that, when added to the current number, equals the target.
  In that case, we return true.
  If the complement is not in the set, we add the current number to the set and continue.
  If we finish iterating through the array without finding any such pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
