const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

function measureTime(func, array, name){
    perf.start();
    func(array);
    let result = perf.stop();
    console.log(`${name} - ${array.length} elements: ${result.preciseWords}`);
}


// How long does it take to double every number in a given array? 

/* the time varies depending on the size of the array. 

tinyArray - 10 elements: 123.1 μs
smallArray 100 elements: 14.9 μs
mediumArray - 1000 elements: 30.5 μs
largeArray - 10000 elements: 298.3 μs
extraLargeArray - 100000 elements: 5.9125 ms
 */


//Try it with first function
 perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results
 //Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


/* 
console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords); */
console.log('Results for different array sizes:');
console.log('------------------------------------');
measureTime(doublerAppend, tinyArray, 'doublerAppend');
measureTime(doublerInsert, tinyArray, 'doublerInsert');
measureTime(doublerAppend, smallArray, 'doublerAppend');
measureTime(doublerInsert, smallArray, 'doublerInsert');
measureTime(doublerAppend, mediumArray, 'doublerAppend');
measureTime(doublerInsert, mediumArray, 'doublerInsert');
measureTime(doublerAppend, largeArray, 'doublerAppend');
measureTime(doublerInsert, largeArray, 'doublerInsert');
measureTime(doublerAppend, extraLargeArray, 'doublerAppend');
measureTime(doublerInsert, extraLargeArray, 'doublerInsert');
