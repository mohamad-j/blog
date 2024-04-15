// Write code to explain Objects in JavaScript.
// Objects are variables too. But objects can contain many values.
// The values are written as name:value pairs (name and value separated by a colon).
// Example
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// Objects are written with curly braces {}.
// Object properties are written as name:value pairs, separated by commas.
// Example
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.
// Spaces and line breaks are not important. An object definition can span multiple lines:
// Example
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
// Accessing Object Properties
// You can access object properties in two ways:
// objectName.propertyName
// or
// objectName["propertyName"]
// Example
var firstName = person.firstName;
var lastName = person['lastName'];
// The two examples above do exactly the same. There is no advantage of one syntax over the other.

// Adding New Properties
// You can add new properties to an existing object by simply giving it a value. For example:
// Example
person.national = "English";
// Deleting Properties
// You can delete a property by using the delete operator.
// Example
delete person.age;

// Add method to an object in JavaScript
// You can also add methods to an object:
// Example
person.fullName = function() {
    return this.firstName + " " + this.lastName;
};
// The this Keyword
// In a function definition, this refers to the "owner" of the function.
// In the example above, this is the person object that "owns" the fullName function.
// In other words, this.firstName means the firstName property of this object.
// Accessing Object Methods
// You access an object method with the following syntax:
// objectName.methodName()
// Example
person.fullName();

