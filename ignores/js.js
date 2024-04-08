/// Functions that will represent the callback concepts in JAvaScript
function myFunction() {
  console.log('Hello World');
}

myFunction();

function myFunctionWithArgs( name , age) {
    console.log('Hello ' + name + ' you are ' + age + ' years old');
}



function myFunctionWithReturn(name, age) {
    return 'Hello ' + name + ' you are ' + age + ' years old';
}

let result = myFunctionWithReturn('Moha', 33);

someOtheFunc( result );

anotherFunc( result );

anuryr();

function myFunctionWithCallback(name, age, callback) {
    // Do stuff before callback
    setTimeout(() => {
        callback(name, age);
    }, 2000);
}

myFunctionWithCallback( 'Moha', 1313, function( name, age ){
    anothercallback( p, function(){

    } )
} )

function myFunctionWithPromise(name, age) {
    return new Promise((resolve, reject) => {
        if (name && age) {
            resolve('Hello ' + name + ' you are ' + age + ' years old');
        } else {
            reject('Name and Age are required');
        }
    });
}

myFunctionWithPromise('Moha', 1312)
.then(function(){

})
.then(
    
)

let mysql = {
    createPool: function(){},
    createConnection: function(){},
    _conn_name: "",
    limit: 10
}

mysql.createPool();


const { createPool } = mysql;

createPool();





