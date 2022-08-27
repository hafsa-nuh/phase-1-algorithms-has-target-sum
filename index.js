function hasTargetSum(array, target) {
  for (let i=0; i < array.length; i++){
    const subtractTargetArrau = target - array[i]
    for (let j=i+1; j< array.length; j++){
      if (array[j] === subtractTargetArrau)
      return true;
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here

*/


/* 
  Add your pseudocode here
  ([22, 19, 4, 6, 30], 25)) 25-22 =3 is 3 inthe array 
  if any number is adding up to the target return true else false
*/

/*
  Add written explanation of your solution here
 hasTargetSum([3, 8, 12, 4, 11, 7], 10)) looking for 10 in the array

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
