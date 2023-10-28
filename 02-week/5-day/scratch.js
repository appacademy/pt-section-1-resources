/*
Lucky Numbers (*)
Write a function luckyNumbers(matrix) that takes in a 2-dimensional array(matrix)
and returns all lucky numbers in any order. 

A lucky number is the minimum element in its row and the maximum in its column.
*/

// function maxCol(matrix, col){
//     let max = -Infinity;

//     for(let row = 0; row < matrix.length; row++){
//         if(matrix[row][col] > max){
//             max = matrix[row][col]
//         }
//     };

//     return max;
// };

// function minRow(row){
//     let min = Infinity;

//     for(let i = 0; i < row.length; i++){
//         if(row[i] < min){
//             min = row[i];
//         };
//     };

//     return min;
// };

// function luckyNumbers(matrix){
//     let luckyNums = [];

//     for(let row = 0; row < matrix.length; row++){
//         let minInRow = minRow(matrix[row]);

//         for(let col = 0; col < matrix[row].length; col++){
//             let maxInCol = maxCol(matrix, col);

//             if(minInRow === maxInCol){
//                 luckyNums.push(minInRow);
//             }
//         };
//     }

//     return luckyNums;
// };


// let matrix1 = [
//     [ 5,  9, 21],
//     [ 9, 19,  6],
//     [12, 14, 15]
// ]

// console.log(luckyNumbers(matrix1)); // [12]

// let matrix2 = [[ 5, 10,  8,  6],
//           [10,  2,  7,  9],
//           [21, 15, 19, 10]]

// console.log(luckyNumbers(matrix2)); // [10]


/*
Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the elements in spiral order.
*/

function spiralOrder(matrix){
    let res = [];

    let startRow = 0;
    let startCol = 0;
    let endRow = matrix.length - 1;
    let endCol = matrix[0].length - 1;

    while(startRow <= endRow && startCol <= endCol){
        //go right
        for(let i = startCol; i <= endCol; i++){
            console.log(matrix[startRow][i])
            res.push(matrix[startRow][i])
        };

        //go down
        for(let i = startRow + 1; i <= endRow; i++){
            console.log(matrix[i][endCol])
            res.push(matrix[i][endCol])
        }

        //go left
        for(let i = endCol - 1; i >= startCol; i--){
            if(startRow === endRow){
                break;
            }
            console.log(matrix[endRow][i])
            res.push(matrix[endRow][i])
        }

        //go up
        for(let i = endRow - 1; i >= startRow + 1; i--){
            if(startCol === endCol){
                break;
            }
            console.log(matrix[i][startCol])
            res.push(matrix[i][startCol])
        }

        startRow++;
        startCol++;
        endRow--;
        endCol--;
    };
    return res;
};




let matrix1 = [
    [ 1, 2, 3],
    [ 4, 5, 6],
    [ 7, 8, 9]
]

console.log(spiralOrder(matrix1)); // [1,2,3,6,9,8,7,4,5]

// let matrix2 = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9,10,11,12]
// ];


// console.log(spiralOrder(matrix2)); // [1,2,3,4,8,12,11,10,9,5,6,7]
