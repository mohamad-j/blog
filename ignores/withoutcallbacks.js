function writeSomeText() {
    console.log("writeSomeText started...");
    let text = "Some long text that will be written in the console. ";
    return text;

}

function prettierText( p_text ) {
    console.log("prettierText started..." + p_text);
    let text = p_text + "asdasd ";
    return text;
}

function writtingCompleted() {
    console.log("Writting completed.");
}

let text = writeSomeText();

let prettier = prettierText(text);

writtingCompleted();