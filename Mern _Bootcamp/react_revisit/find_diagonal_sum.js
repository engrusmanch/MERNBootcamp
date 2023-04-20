function findDiagonal(matrix) {
    const diagonal = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === j) {
          diagonal.push(matrix[i][j]);
        }
      }
    }
    return diagonal;
  }
  
  const matrix = 
  [[1,4,3,6],
   [1,8,3,5],
   [1,2,3,7],
   [2,4,6,8]];
  const diagonal = findDiagonal(matrix);
  console.log(`Diagonal of matrix is : ${diagonal}`); // outputs [1, 2, 3]
  let sum=0;
  function findDiagonalSum(diagonal){
    for (const element of diagonal) {
        sum+=element;
      }
      return sum;
  }
  let diagonalSum=findDiagonalSum(diagonal);
  console.log(`Sum of diagonal is : ${diagonalSum}`); // outputs 6
  