// Explain HttpRequest in JS and how to make HTTP requests using JS and fetch()
// Provide real world examples of making HTTP requests using fetch()

// // HttpRequest in JS
// // The XMLHttpRequest object is used to make HTTP requests from a web page. It is a built-in object in all modern browsers.
// // The XMLHttpRequest object is used to interact with servers and send or receive data from a web server without reloading the page.
// // The XMLHttpRequest object can be used to make GET, POST, PUT, DELETE, and other types of HTTP requests.

// // How to make HTTP requests using JS and fetch()
// // You can make HTTP requests in JavaScript using the fetch() method. The fetch() method is a modern way to make HTTP requests in JavaScript.
// // The fetch() method returns a Promise that resolves to the Response to that request, whether it is successful or not.

// // Example:
// // Make a GET request
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// // Make a POST request
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

// // Make a PUT request
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// // Make a DELETE request
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Get data from an API and update the DOM
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    data.forEach(post => {
        const element = document.createElement('div');
        element.textContent = post.title;
        document.body.appendChild(element);
    });
})
.catch(error => console.error(error));

// Send form data to a server using fetch
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});

// Send form data as a JSON object to a server using fetch
const container = document.getElementById('form-container');
let values = {};
// GEt values from all input fields under the container
container.querySelectorAll('input').forEach(input => {
    values[input.name] = input.value;
});
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then(response => response.json())
.then(data => {
    console.log(data);
    // Popup a message to the user
    alert('Post created successfully');
    
})
.catch(error => console.error(error));
