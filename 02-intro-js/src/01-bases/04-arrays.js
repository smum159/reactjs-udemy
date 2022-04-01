const myArray = [1,2,3,4];
// Output
//     [1,2,3,4]

//Simialr to the objects we want to copy the main array into a new one
//in order to keep the original intact and modify the copy only
const array2 = myArray;
array2.push(5)

console.log(myArray);
console.log(array2);
// Output
//     [1,2,3,4,5]
//     [1,2,3,4,5]

// Same as the objects the same thing happend and we can't copy the original
// array by just putting adding it to a new one. We need to implement
// the spread '...' oparator

const array3 = [...myArray]
array3.push(6);
console.log(array3);
// Output
//     [1,2,3,4,5]
//     [1,2,3,4,5]
//     [1,2,3,4,5,6]

const array4 = array3.map( function(val) {
    return val * 2
})
console.log(array4);
// Output
//     [1,2,3,4,5]
//     [1,2,3,4,5]
//     [1,2,3,4,5,6]
//     [2,4,6,8,10,12]