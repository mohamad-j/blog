let form = document.getElementById('post-info');

form.addEventListener('submit', function( event ){

    event.preventDefault();

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