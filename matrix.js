function diagonalDifference(matrix) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    
    const size = matrix.length;
    
    for (let i = 0; i < size; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][size - 1 - i];
    }
    
    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
const result = diagonalDifference(matrix);
console.log(result);
