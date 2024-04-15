/// Explain DOM API in JS and how to manipulate DOM using JS
// Prvide real world examples of DOM manipulation using JS

// DOM API in JS
// DOM is a programming interface for web documents. It represents the structure of the document as a tree of nodes.
// The DOM API is a set of interfaces that allow scripts to read and manipulate the structure of the document.
// The DOM API provides methods and properties that allow you to access and manipulate the nodes in the document.
// The DOM API is a powerful tool for creating dynamic web pages and web applications.

// How to manipulate DOM using JS

// 1. Selecting Elements
// You can select elements in the document using the following methods:
// Example:
// Select an element by its id
// Return the element as an Object with the specified ID
const element = document.getElementById('myElement');
// Select an element by its class name
// Return a collection ( Array ) of elements with the specified class name
const elements_by_class = document.getElementsByClassName('myClass');
// Select an element by its tag name
// Return a collection ( Array ) of elements with the specified tag name
const elements_by_tag = document.getElementsByTagName('div');
// Select an element by its CSS selector
// Return the first element that matches the specified CSS selector
const element_by_selector = document.querySelector('div #istest .calssname');
// Select multiple elements by their CSS selector
// Return a collection ( Array ) of elements that match the specified CSS selector
const elements_by_selector_all = document.querySelectorAll('.myClass');

// 2. Modifying Elements
// You can modify elements in the document using the following methods:
// Example:
// Change the text content of an element
element.textContent = 'Hello, World!';
// Change the HTML content of an element
element.innerHTML = '<strong>Hello, World!</strong>';
// Change the style of an element
element.style.color = 'red';
// Add a class to an element
element.classList.add('newClass');
// Remove a class from an element
element.classList.remove('oldClass');
// Toggle a class on an element
element.classList.toggle('active');
// Change the input value of an element
element.value = 'new value';

// 3. Creating Elements
// You can create new elements in the document using the following methods:
// Example:
// Create a new element
const newElement = document.createElement('div');
// Add text content to the new element
newElement.textContent = 'Hello, World!';
// Add the new element to the document
document.body.appendChild(newElement);
// Add the new element to another element
element.appendChild(newElement);
// Add the new element before another element
element.insertBefore(newElement, element.firstChild);

// 4. Event Handling
// You can handle events on elements in the document using the following methods:
// Example:
// Add an event listener to an element
element.addEventListener('click', function (){
    console.log('Element clicked!');
});
// Remove an event listener from an element
element.removeEventListener('click', function(){
    console.log('Element clicked!');
});

// Real world examples of DOM manipulation using JS.
// 1. Creating a To-Do List
// You can create a to-do list by adding new items to a list and removing items from the list.
// Example:
// Select the input element
const input = document.getElementById('todoInput');
// Select the list element
const list = document.getElementById('todoList');
// Add an event listener to the input element
input.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        const item = document.createElement('li');
        item.textContent = input.value;
        list.appendChild(item);
        input.value = '';
    }
});

// 2. Creating a Modal
// You can create a modal by adding a new element to the document and showing and hiding the element based on user interaction.
// Example:
// Select the modal element
const modal = document.getElementById('modal');
// Select the button element
const button = document.getElementById('modalButton');
// Add an event listener to the button element
button.addEventListener('click', function(){
    modal.style.display = 'block';
});
// Add an event listener to the modal element
modal.addEventListener('click', function(){
    modal.style.display = 'none';
});

// 3. Creating a Carousel
// You can create a carousel by adding multiple images to a container element and changing the display of the images based on user interaction.
// Example:
// Select the container element
const container = document.getElementById('carousel');
// Select the next button element
const nextButton = document.getElementById('nextButton');
// Select the previous button element
const prevButton = document.getElementById('prevButton');
// Select the images
const images = container.querySelectorAll('img');
// Set the index of the current image
let index = 0;
// Add an event listener to the next button element
nextButton.addEventListener('click', function(){
    images[index].style.display = 'none';
    index = (index + 1) % images.length;
    images[index].style.display = 'block';
});
// Add an event listener to the previous button element
prevButton.addEventListener('click', function(){
    images[index].style.display = 'none';
    index = (index - 1 + images.length) % images.length;
    images[index].style.display = 'block';
});

