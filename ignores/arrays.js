/// Write code where you will explaine how arrays are used in JAvascript.
// Arrays are used to store multiple values in a single variable.
// Example
var cars = ["Saab", "Volvo", "BMW"];
// In the example above, cars is an array that stores three values.
// You refer to an array element by referring to the index number.
// Example
var name = cars[0];
// You can also change an array element by referring to the index number.
// Example
cars[0] = "Opel";
// The length property returns the number of elements in an array.
// Example
var len = cars.length;
// The length property is always one more than the highest array index.
// Example
cars[cars.length] = "Mercedes";


// Adding elements to an array
// The easiest way to add a new element to an array is using the push() method:
// Example
cars.push("Audi");
// The push() method adds a new element to an array (at the end), and "unshift()" adds a new element to an array (at the beginning).


// Removing elements from an array
// The easiest way to remove a new element to an array is using the pop() method:
// Example
cars.pop(); // Removes the last element ("Audi") from cars
// The pop() method removes the last element from an array.


// The shift() method removes the first array element and "splice()" method can be used to add new items to an array.
// Example
cars.shift(); // Removes the first element ("Opel") from cars
// The shift() method removes the first array element.


// The splice() method can be used to add new items to an array.
// Example
cars.splice(2, 0, "Lamborghini", "Ferrari");
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lamborghini", "Ferrari") define the new elements to be added.
// The splice() method returns an array with the deleted items.
// The splice() method changes the original array.

// The concat() method creates a new array by combining two or more arrays:
// Example
var moreCars = ["Audi", "Mercedes"];
var allCars = cars.concat(moreCars);
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.
// The concat() method can also take strings as arguments.
// Example
var allCars = cars.concat("Audi", "Mercedes");

// The concat() method can also take array-like objects (objects with a length property and indexed elements).
// Example
var allCars = cars.concat({make: "Audi", model: "Audi"});

// The slice() method slices out a piece of an array into a new array.
// Example
var someCars = allCars.slice(1, 4);
// The method slice() does not change the original array.
// The first parameter (1) defines the position where the slice should start.
// The second parameter (4) defines the position where the slice should end.
// If a parameter is negative, the position is counted from the end of the array.

// The sort() method sorts an array alphabetically:
// Example
cars.sort(); // Sorts the elements of cars
// The reverse() method reverses the elements in an array.
// Example
cars.reverse(); // Reverses the order of the elements
// The sort() method sorts an array alphabetically.
// The reverse() method reverses the elements in an array.
// The sort() method sorts an array in ascending order.

// Foreach loop in arrays
// The forEach() method calls a function (a callback function) once for each array element.
// Example
cars.forEach(myFunction);
function myFunction(value) {
  console.log(value);
}
// The value of the current element
// The index of the current element
// The array object the current element belongs to
// The map() method creates a new array by performing a function on each array element. It retuns a new array.
// Example
var numbers = [45, 4, 9, 16, 25];
var numbers2 = numbers.map(myFunction);
function myFunction(value) {
  return value * 2;
}
// The value of the current element
// The index of the current element
// The array object the current element belongs to

// The filter() method creates a new array with array elements that passes a test.
// Example
var over18 = numbers.filter(myFunction);
function myFunction(value) {
  return value > 18;
}
// The value of the current element
// The index of the current element
// The array object the current element belongs to

// The find() method returns the value of the first array element that passes a test function. 
/// It returns undefined if no elements pass the test.
// Example
var first = numbers.find(myFunction);
function myFunction(value) {
  return value > 18;
}
// The value of the current element
// The index of the current element
// The array object the current element belongs to

// The some() method checks if any of the elements in an array pass a test (provided as a function). It returns a Boolean value.
// Example
var someOver18 = numbers.some(myFunction);
function myFunction(value) {
  return value > 18;
}
// The value of the current element
// The index of the current element
// The array object the current element belongs to
