let form = document.getElementById('post-info');

// form.addEventListener('submit', function( event ){
    
//     event.preventDefault();

//     let title = document.getElementById('title');
//     let slug = document.getElementById('slug');
//     let meta_title = document.getElementById('meta_titel');

//     let data = {
//         title: title.value,
//         slug: slug.value,
//         meta_titel: meta_title.value
//     };


//     fetch('http://localhost:3000/posts/create', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then( function(response){ 
//          return response.json(); 
//     })
//     .then( function(data){ 
//         console.log(data); 
//     })
//     .catch( function(error){ 
//         console.log(error); 
//     });
// });


// Using FormData
// form.addEventListener('submit', function( event){
//     event.preventDefault();

//     const formData = new FormData(form);
//     const data = {};

//     for (let key of formData.keys()) {
//         data[key] = formData.get(key);
//     }


//     fetch('http://localhost:3000/posts/create', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then( function(response){ 
//          return response.json(); 
//     })
//     .then( function(data){ 
//         console.log(data); 
//     })
//     .catch( function(error){ 
//         console.log(error); 
//     });
// }); 


// Using a DIV

let button = document.getElementById('add-button');

button.addEventListener('click', function( event){

    let title = document.getElementById('title');
    let slug = document.getElementById('slug');

    let data = {
        title: title.value,
        slug: slug.value
    };

    fetch('http://localhost:3000/posts/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then( function(response){ 
         return response.json(); 
    })
    .then( function(data){ 
        console.log(data); 
    })
    .catch( function(error){ 
        console.log(error); 
    });
});


