/*
Challenge 1
Create a function addTwo that accepts one input and adds 2 to it.
*/

function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
//console.log(addTwo(3));
//console.log(addTwo(10));


/*
Challenge 2
Create a function addS that accepts one input and adds an "s" to it.
*/

function addS(word) {
	return word + "s";
}

// uncomment these to check your work
//console.log(addS('pizza'));
//console.log(addS('bagel'));

/*
Challenge 3
Create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
multiplyByTwo(1); //-> 2
multiplyByTwo(2); //-> 4
*/

function map(array, callback) {
    const output = [];

    for (let i = 0; i < array.length; i++) {
        output.push(callback(array[i]));
    }

    return output;
}

//console.log(map([1, 2, 3], addTwo));


/*
Challenge 4
Create a function called forEach that takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
    alphabet += char;
});
console.log(alphabet);   //prints 'abcd'
*/

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// see for yourself if your forEach works!
let alphabet = '';
const letters = ['h', 'e', 'l', 'l', 'o'];

forEach(letters, function (char) {
    alphabet += char;
});

//console.log(alphabet);

/*
Challenge 5
In challenge 3, you've created a function called map. In this challenge, you're going to rebuild the map function
by creating a function called mapWith. This time you're going to use forEach inside of mapWith instead of using a 
for loop.
*/

function mapWith(array, callback) {
    const output = [];

    forEach(array, function (element, index, arr) {
        output.push(callback(element, index, arr));
    });

    return output;
}

//console.log(mapWith([1, 2, 3], addTwo));


/*
Challenge 6
Create a function called reduce that takes an array and reduces the elements to a single value. For example it can 
sum all the numbers, multiply them, or any operation that you can put into a function.
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
reduce(nums, add, 0);   //-> 8
Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates 
the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments
to the callback. The callback's return value becomes the new accumulator value. The next loop executes with this new 
accumulator value. In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is
now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned.
*/

// Challenge 6
function reduce(array, callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }

    return accumulator;
}

const nums = [4, 1, 3];
const add = function (a, b) { return a + b; };
const result = reduce(nums, add, 0);
//console.log(result);


// More exercises: http://csbin.io/callbacks