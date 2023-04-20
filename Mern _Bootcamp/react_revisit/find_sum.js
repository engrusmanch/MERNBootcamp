
// //traverse the array and calculate the sum of two numbers and find the pair with lowest sum value
// function find_sum() {
// //input array
// let numArray=[10,11,12,13,14,15,16,17,1,2,3,4,5,6,7,8,9];
// //stores sum of two numbers
// let sum=0;
// //save pair of numbers with lowest sum value
// let lowestPair=[];
//     for(let i=0;i<numArray.length;i++){
//         for(let j=i+1;j<numArray.length;j++){
//             sum=numArray[i]+numArray[j];
//             if(sum<lowestPair[0]){
//                 lowestPair[0]=sum;
//                 lowestPair[1]=numArray[i];
//                 lowestPair[2]=numArray[j];
//             }
//         }
//     }
//     console.log(lowestPair);
// }
// find_sum();

// // sort the array in ascending avoid built in sort function
// function sort_array() {


// }
// let numArray=[10,11,12,13,14,15,16,17,1,2,3,4,5,6,7,8,9];
let Pair = [];
let lowestSum;

function findLowestPairSum(numbers) {
  lowestSum = numbers[0] + numbers[1];
  Pair = [numbers[0], numbers[1]];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (sum < lowestSum) {
        lowestSum = sum;
        Pair = [numbers[i], numbers[j]];
      }
    }
  }
  return { Pair, lowestSum };
}

let numArray = [10, 11, 12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lowestPair = findLowestPairSum(numArray);
// console.log(lowestPair.lowestSum);
// console.log(lowestPair.Pair);
////////////////////////////////////////////////////////////////////////////////////////////////

//find sum of diagonal elements in square matrix array
//find diagonal elements





  
    





  