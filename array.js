const number =[1,2,3,4,5,6,7,8,9,10,100];
// console.log(number.length); for measuring length of array

// 'for accessing the first element of array' get the element by index number
// console.log(number[0]); 

// set the Element of array
// number[0] = 100;
// console.log(number[0]);
number.push(100); // add the element at the end of array
number.pop(); // remove the element from the end of array
number.shift(); // remove the element from the beginning of array
number.unshift(100); // add the element at the beginning of array

console.log(number.includes(100)); // check the element is present in array or not
console.log(number.indexOf(100)); // check the index of the element
console.log(number.lastIndexOf(100)); // check the last index of the element
console.log(Array.isArray(number)); // check the array is array or not
// console.log(number.reverse()); // reverse the array
// console.log(number.slice(0, 5)); // slice the array and get the element 
// console.log(number.splice(0, 5)); // splice the array and remove the element from array and return the removed element  // 0 is the starting index and 5 is the number of element to remove from array  // if we don't pass the second argument then it will remove all the element from the starting index to end of array  
// console.log(number); // print the array

// console.log(number.join(' ')); // join the array element with the given separator and return the string of array element    // if we don't pass the separator then it will join the element with comma
// console.log(number.toString()); // convert the array into string and return the string of array element   // if we don't pass the separator then it will join the element with comma
// console.log(number.fill(100)); // fill the array with the given element and return the new array
// let m= 100;
// console.log(typeof m); // check the type of array

// console.log(number.concat([100, 200, 300])); // concat the array with the given array and return the new array // if we don't pass the array then it will return the same array         // we can also pass the element instead of array
