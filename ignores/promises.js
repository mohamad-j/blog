function writeSomeText() {
    console.log("writeSomeText started...");
    // Simulating an asynchronous operation
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let text = "Some long text that will be written in the console. ";
            console.log("writeSomeText Ready");
            resolve(text);
        }, 3000);
    });
}

function prettierText(p_text) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let text = p_text + "asdasd ";
            console.log(" prettierText Ready");
            if( text.length > 10 ) {
                resolve(text);
            }else {
                reject("Text is not long enough.");
            }   
        }, 1000);
    });
}


function writtingCompleted() {
    console.log("Operation completed.");
}



writeSomeText()
.then(function(text) {
    return prettierText(text);
})
.then(function(prettier) {
    writtingCompleted();
});