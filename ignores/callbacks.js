function writeSomeText( callback ) {
    console.log("writeSomeText started...");
    // Simulating an asynchronous operation
    setTimeout(function() {
        let text = "Some long text that will be written in the console. ";
      console.log("writeSomeText Ready");
      callback( text )
    }, 3000);
  }
  
  function prettierText( p_text ) {
    console.log("prettierText started..." + p_text);
    // Simulating an asynchronous operation
    setTimeout(function() {
        let text = p_text + "asdasd ";
      console.log(" prettierText Ready");
        return text;
    }, 1000);
  }

  function writtingCompleted() {
    console.log("Operation completed.");
  }


writeSomeText( prettierText );

let prettier = prettierText(text);

writtingCompleted();
