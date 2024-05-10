let btn = document.getElementById('signup-btn');

btn.addEventListener('click', function( event ){

    let name = document.getElementById('yourName');

    let email = document.getElementById('yourEmail');

    let username = document.getElementById('yourUsername');

    let password = document.getElementById('yourPassword');

    let conf_password = document.getElementById('confirmPassword');

    let phone = document.getElementById('mobileNumber');

    // let formData = new FormData( document.getElementById('signup-form') );

    let data = {
        name: name.value,
        email: email.value,
        username: username.value,
        password: password.value,
        conf_password: conf_password.value,
        phone: phone.value
    }

    fetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify( data ),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( function(response){ 
        return response.json();
    } )
    .then( function(data){
        console.log(data)
    } )
    .catch( function( err ){
        console.error(err)
    } );

})
